import { AnimatedBackground } from "../../components/AnimatedBackground";
import { CoderEmoji } from "../../components/CoderEmoji";
import { ProjectsCarousel } from "../../components/ProjectsCarousel";
import { AboutSection } from "../../components/AboutSection";
import { ServicesSection } from "../../components/ServicesSection";
import { SoftwaresSection } from "../../components/SoftwaresSection";
import { WorkProcessSection } from "../../components/WorkProcessSection";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
function Landing() {
    return (
        <main className="relative min-h-screen text-white">
            <AnimatedBackground />
            <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center
            justify-center gap-8 px-6 text-center">
                <div>
                    <CoderEmoji />
                </div>
                <div>

                    <h1 className="mx-auto max-w-[21rem] bg-gradient-to-r from-[#e6e0f5]
                     via-[#cfc3e8] to-[#9d8bdc] bg-clip-text font-['Sora']
                      text-3xl font-[800] leading-tight tracking-[0.01em]
                      text-transparent drop-shadow-[0_0_18px_rgba(124,58,237,0.22)]
                      sm:max-w-xl sm:text-4xl md:max-w-4xl md:text-7xl md:tracking-[0.015em]">
                        Desenvolvedor de Software criando soluções digitais eficientes
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl font-['Inter']
                    text-base font-light leading-relaxed text-zinc-300 md:text-lg">
                    Crio sites, sistemas, automações e softwares sob medida para empresas,
                    criadores e negócios digitais.
                    </p>

                    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                        href="#projetos"
                        className="inline-flex w-fit items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(147,51,234,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_45px_rgba(147,51,234,0.65)] active:translate-y-0"
                        >
                            Ver projetos
                        </a>

                        <a href="#contato"
                        className="rounded-full border border-purple-400/40
                        px-6 py-3 text-center text-sm font-semibold
                      text-purple-200 transition hover:border-purple-300 hover:bg-purple-500/10">
                            Entrar em contato
                        </a>
                    </div>
                </div>
            </section>
            <AboutSection />
            <ProjectsCarousel />
            <ServicesSection />
            <SoftwaresSection />
            <WorkProcessSection />
            <ContactSection />
            <Footer />
        </main>
    );
}

export default Landing;