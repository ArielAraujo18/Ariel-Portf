const steps = [
  {
    number: "1",
    title: "Briefing",
    description: "Conversamos sobre sua ideia, objetivos e necessidades.",
  },
  {
    number: "2",
    title: "Planejamento",
    description: "Defino escopo, cronograma e tecnologias adequadas.",
  },
  {
    number: "3",
    title: "Desenvolvimento",
    description: "Codifico a solução com atualizações regulares.",
  },
  {
    number: "4",
    title: "Entrega e Suporte",
    description: "Lanço o projeto e ofereço suporte contínuo.",
  },
];

export function WorkProcessSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-['Sora'] text-3xl font-[800] tracking-[0.01em] text-white md:text-5xl">
          Como trabalho
        </h2>

        <p className="mx-auto mt-4 max-w-xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-lg">
          Processo simples e transparente.
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent md:left-7" />

        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-6 md:gap-8">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 font-['Sora'] text-base font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.5)] md:h-14 md:w-14">
                {step.number}
              </div>

              <div className="pt-1 text-left">
                <h3 className="font-['Sora'] text-lg font-bold text-white md:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}