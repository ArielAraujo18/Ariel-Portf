// src/components/ServicesSection.tsx

const services = [
  {
    title: "Landing Pages",
    description: "Páginas otimizadas para conversão com design moderno.",
  },
  {
    title: "Sistemas Web",
    description: "Aplicações completas sob medida para seu negócio.",
  },
  {
    title: "Automações",
    description: "Automatize processos e economize tempo valioso.",
  },
  {
    title: "Integrações com APIs",
    description: "Conecte sistemas e plataformas de forma eficiente.",
  },
  {
    title: "Dashboards",
    description: "Painéis de dados visuais e informativos.",
  },
  {
    title: "MVPs para Startups",
    description: "Valide sua ideia rapidamente com protótipos funcionais.",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center md:pt-32 md:pb-28">
      <div className="mb-12">
        <h2 className="font-['Sora'] text-3xl font-[800] tracking-[0.01em] text-white md:text-5xl">
          Serviços Freelance
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-lg">
          Transformo ideias em soluções digitais funcionais.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-purple-400/20 bg-white/[0.04] p-6 text-left backdrop-blur-md transition-all duration-300 hover:border-purple-300/40 hover:bg-white/[0.07] md:hover:-translate-y-2 md:hover:shadow-[0_0_45px_rgba(147,51,234,0.18)]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-500/10 text-purple-200 transition-all duration-300 group-hover:border-purple-300/50 group-hover:bg-purple-500/20">
              ✦
            </div>

            <h3 className="font-['Sora'] text-lg font-bold text-white">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}