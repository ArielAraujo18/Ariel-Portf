import { useCallback, useEffect, useRef, useState } from "react";

const softwares = [
  {
    title: "Sistema ERP",
    description: "Gestão empresarial simplificada.",
    features: [
      "Controle financeiro e estoque",
      "Relatórios detalhados e automatizados",
      "Integrações com sistemas externos",
    ],
    button: "Saber mais",
    url: "https://wa.me/5574988048578?text=Tenho%20interesse%20no%20Software%20ERP.",
    icon: "/software.png",
  },
  {
    title: "Youtube Download",
    description: "Baixe videos e músicas do YouTube em alta qualidade no seu computador.",
    features: [
      "Baixe videos em alta qualidade",
      "arquivos MP3 e MP4",
      "Faça downloads ilimitados",
    ],
    button: "Saber mais",
    url: "https://wa.me/5574988048578?text=Tenho%20interesse%20no%20Software%20Youtube-Download.",
    icon: "/y.png",
  },
  {
    title: "Gerenciador de tarefas",
    description: "Organize seu dia a dia com facilidade.",
    features: [
      "Crie, edite e complete tarefas",
      "Facilidade de uso",
      "Plataforma web",
    ],
    button: "Acessar site",
    url: "https://gerenciadortarefasariel.netlify.app/", 
    icon: "todo.png",
  },
];

export function SoftwaresSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activePageRef = useRef(0);

  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const totalPages = Math.ceil(softwares.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) =>
    softwares.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
  );

  const goToPage = useCallback(
    (page: number) => {
      const safePage = Math.max(0, Math.min(page, totalPages - 1));

      activePageRef.current = safePage;
      setActivePage(safePage);

      const carousel = carouselRef.current;
      const targetPage = pageRefs.current[safePage];

      if (!carousel || !targetPage) return;

      carousel.scrollTo({
        left: targetPage.offsetLeft - carousel.offsetLeft,
        behavior: "smooth",
      });
    },
    [totalPages]
  );

  useEffect(() => {
    function updateItemsPerPage() {
      setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
    }

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    activePageRef.current = 0;
    setActivePage(0);

    carouselRef.current?.scrollTo({
      left: 0,
      behavior: "instant",
    });
  }, [itemsPerPage]);

  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = window.setInterval(() => {
      const nextPage =
        activePageRef.current === totalPages - 1
          ? 0
          : activePageRef.current + 1;

      goToPage(nextPage);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [goToPage, totalPages]);

  function handleScroll() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const refs = pageRefs.current.slice(0, totalPages);

    const closestPage = refs.reduce((closest, page, index) => {
      if (!page) return closest;

      const currentDistance = Math.abs(
        page.offsetLeft - carousel.offsetLeft - carousel.scrollLeft
      );

      const closestItem = refs[closest];
      if (!closestItem) return index;

      const closestDistance = Math.abs(
        closestItem.offsetLeft - carousel.offsetLeft - carousel.scrollLeft
      );

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    activePageRef.current = closestPage;
    setActivePage(closestPage);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
      <div className="mb-14">
        <h2 className="font-['Sora'] text-3xl font-[800] tracking-[0.08em] text-white md:text-5xl">
          Meus Softwares
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-lg">
          Produtos digitais prontos para usar.
        </p>
      </div>

      <div className="mx-auto max-w-[520px] overflow-hidden md:max-w-6xl">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth py-3"
        >
          {pages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              ref={(el) => {
                pageRefs.current[pageIndex] = el;
              }}
              className="w-full flex-none snap-start"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {page.map((software) => (
                  <article
                    key={software.title}
                    className="flex min-h-[425px] flex-col rounded-3xl border border-purple-400/20 bg-white/[0.04] p-8 text-left backdrop-blur-md transition-all duration-300 md:min-h-[460px] md:hover:-translate-y-2 md:hover:border-purple-300/40 md:hover:bg-white/[0.07] md:hover:shadow-[0_0_45px_rgba(147,51,234,0.2)]"
                  >
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-2xl text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                      <img

                      className="h-10 w-10 object-contain rounded-full"
                      src={software.icon}
                      alt="" />
                    </div>

                    <h3 className="font-['Sora'] text-xl font-bold text-white">
                      {software.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {software.description}
                    </p>

                    <ul className="mt-7 space-y-4">
                      {software.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <span className="text-emerald-400">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={software.url}
                      rel="noreferrer"
                      target="_blank"
                      className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(192,38,211,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(192,38,211,0.55)] md:hover:-translate-y-1"
                    >
                      {software.button}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex justify-center gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                aria-label={`Ir para software ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activePage === index
                    ? "w-8 bg-purple-300"
                    : "w-2.5 bg-purple-400/30 hover:bg-purple-300/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}