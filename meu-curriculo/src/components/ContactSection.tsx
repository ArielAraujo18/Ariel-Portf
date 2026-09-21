export function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="rounded-3xl border border-purple-400/20 bg-white/[0.04] px-6 py-14 text-center backdrop-blur-md shadow-[0_0_60px_rgba(147,51,234,0.14)] md:px-16 md:py-20">
        <h2 className="mx-auto max-w-4xl font-['Sora'] text-3xl font-[800] leading-tight tracking-[0.03em] text-white md:text-5xl">
          Tem uma ideia ou precisa de um software?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl font-['Inter'] text-sm font-light leading-relaxed text-zinc-300 md:text-lg">
          Vamos conversar sobre como posso ajudar a transformar sua visão em
          realidade. Respondo rápido e ofereço orçamento sem compromisso.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5574988048578?text=Ol%C3%A1%2C%20vi%20seu%20curr%C3%ADculo%20e%20tenho%20interesse%20em%20conversar%20com%20voc%C3%AA."
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center gap-3 rounded-2xl bg-purple-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(147,51,234,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(147,51,234,0.65)] active:translate-y-0 md:text-base"
          >
            <img src="/icons/whatsapp.png" alt="" className="h-8 w-8 object-contain" />
            Chamar no WhatsApp
          </a>

          <a
            href="mailto:arielaraujo120@gmail.com"
            className="inline-flex w-fit items-center justify-center gap-3 rounded-2xl border border-purple-400/40 px-7 py-4 text-sm font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-purple-500/10 hover:text-white active:translate-y-0 md:text-base"
          >
            <img src="/icons/gmail.png" alt="" className="h-8 w-8 object-contain" />
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}