const items = ["Aplicações web", "Automações", "Sistemas sob medida"];

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
      <div className="rounded-3xl border border-purple-400/20 bg-white/[0.04] px-6 py-10 backdrop-blur-md shadow-[0_0_50px_rgba(147,51,234,0.12)] md:px-16 md:py-16">
        <h2 className="font-['Sora'] text-2xl font-[800] tracking-[0.01em] text-white md:text-5xl">
          Sobre mim
        </h2>

        <p className="mx-auto mt-6 max-w-4xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-xl">
          Sou desenvolvedor focado em criar soluções práticas que resolvem
          problemas reais. Especializado em performance, automação e produtos
          digitais que geram resultados mensuráveis para negócios de todos os
          tamanhos.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 md:px-6 md:py-3 md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}