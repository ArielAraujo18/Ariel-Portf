import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Sistema ERP",
    description: "Solução completa para gestão empresarial, com controle de estoque e financeiro.",
    stack: ["Python", "MySQL"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Avs.png",
  },
  {
    title: "Segurança do Açude",
    description: "Aplicação para monitorar e gerenciar processos de segurança do açude.",
    stack: ["JavaScript", "Python", "MySQL"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Acude.png",
  },
  {
    title: "Node API",
    description: "Envio de informações via HTTP para um banco de dados MongoDB.",
    stack: ["Node.js", "MongoDB"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Node.png",
  },
  {
    title: "Yt-Download",
    description: "Download de arquivos mp3 e mp4 do YouTube em alta qualidade.",
    stack: ["Python"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Yt.jpg",
  },
  {
    title: "Gerenciador de tarefas",
    description: "O gerenciador de tarefas para o dia-a-dia. Criado com React e Tailwind.",
    stack: ["React", "Tailwind"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Lista.jpg",
  },
  {
    title: "Automação de telegram",
    description: "Automatizei o envio de mensagens e tarefas do telegram com Python.",
    stack: ["Python"],
    detailsUrl: "#",
    situation: "Finalizado",
    image: "/Telegram.png",
  },

];

export function ProjectsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activePageRef = useRef(0);

  const [activePage, setActivePage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, index) =>
    projects.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage)
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

    const closestPage = pageRefs.current.reduce((closest, page, index) => {
      if (!page) return closest;

      const currentDistance = Math.abs(
        page.offsetLeft - carousel.offsetLeft - carousel.scrollLeft
      );

      const closestItem = pageRefs.current[closest];
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
    <section className="mx-auto min-h-screen max-w-6xl px-6 pt-24 pb-36 md:pb-48">
      <div id="projetos" className="mb-10 scroll-mt-2 text-center md:scroll-mt-15">
        <h2 className="font-['Sora'] text-3xl font-[800] tracking-[0.01em] text-white md:text-5xl">
          Projetos recentes
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-base">
          Alguns projetos desenvolvidos com foco em performance, responsividade
          e experiência de usuário.
        </p>
      </div>

      <div className="mx-auto max-w-[520px] md:max-w-[1180px]">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth py-0 md:py-6"
        >
        {pages.map((page, pageIndex) => (
            <div
            key={pageIndex}
            ref={(el) => {
                pageRefs.current[pageIndex] = el;
            }}
            className="w-full min-w-full flex-none snap-start"
            >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
                {page.map((project) => (
                <article
                    key={project.title}
                    className="flex h-[430px] flex-col rounded-3xl border border-purple-400/20 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 md:h-[500px] md:p-6 md:hover:-translate-y-2 md:hover:border-purple-300/40 md:hover:bg-white/[0.07] md:hover:shadow-[0_0_45px_rgba(147,51,234,0.22)]"
                    >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mb-5 h-40 w-full shrink-0 rounded-2xl border border-purple-400/20 object-cover md:h-48"
                    />

                    <div className="flex flex-1 flex-col">
                        <h3 className="font-['Sora'] text-lg font-bold leading-snug text-white md:text-xl">
                        {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                        {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span
                            key={tech}
                            className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>

                        <a
                        href={project.detailsUrl}
                        className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-purple-500/40 px-5 py-3 text-sm font-semibold text-purple-100 transition-all duration-300 hover:border-purple-300 hover:bg-purple-500/10 hover:text-white md:hover:-translate-y-1"
                        >
                        {project.situation}
                        </a>
                    </div>
                </article>
                ))}
            </div>
            </div>
        ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
            {pages.map((_, index) => (
                <button
                key={index}
                onClick={() => goToPage(index)}
                aria-label={`Ir para página ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                    activePage === index
                    ? "w-8 bg-purple-300"
                    : "w-2.5 bg-purple-400/30 hover:bg-purple-300/60"
                }`}
                />
            ))}
        </div>
      </div>
    </section>
  );
}