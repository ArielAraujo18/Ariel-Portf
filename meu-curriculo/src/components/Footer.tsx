const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ArielAraujo18",
    icon: "/icons/github.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ariel-santos-935217228/",
    icon: "icons/linkedin.png",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5574988048578?text=Ol%C3%A1%2C%20vi%20seu%20curr%C3%ADculo%20e%20tenho%20interesse%20em%20conversar%20com%20voc%C3%AA.",
    icon: "icons/whatsapp.png",
  },
  {
    label: "E-mail",
    href: "mailto:arielaraujo120@gmail.com",
    icon: "/icons/gmail.png",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-purple-400/10 bg-[#10091f] px-6 py-16 text-center shadow-[inset_0_1px_80px_rgba(147,51,234,0.16)]">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-['Sora'] text-2xl font-[800] tracking-[0.03em] text-white md:text-3xl">
          Ariel Santos
        </h2>

        <p className="mt-3 font-['Inter'] text-sm font-light tracking-[0.04em] text-zinc-400">
          Desenvolvedor de Software Freelance
        </p>

        <div className="mt-9 flex justify-center gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-white/[0.04] text-sm font-semibold text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              <img
                src={social.icon}
                alt={social.label}
                className="h-8 w-8 object-contain"
              />
            </a>
          ))}
        </div>

        <p className="mt-9 font-['Inter'] text-sm font-light text-zinc-500">
          Disponível para projetos freelance e parcerias.
        </p>
      </div>
    </footer>
  );
}