import "./Main.css"
import { Link } from "react-router-dom";

export function Main(){
    return(
        <main className="main">
            <section className="principal">
                <section className="principal-foto">
                    <img src="/Ariel.png" alt="" />
                </section>

                <section className="principal-conteudo">
                    <h2 className="principal-titulo">Olá!</h2>
                    <h3 className="principal-subtitulo">Um pouco sobre mim</h3>
                </section>

                <section className="principal-texto">
                    <p>Estudante de Sistemas de Informação pela Universidade Federal Rural do Semi-Árido,
                     com experiência em Python e desenvolvimento de software.
                    Atuo em projeto acadêmico desenvolvendo um sistema completo,
                    com foco em back-end, front-end e banco de dados,
                    buscando constante aprimoramento e inovação.
                    </p>

                    <section className="principal-botoes">
                        <button className="botao botao-1" onClick={() => window.open("/ArielSantos.pdf")}>Currículo</button>
                        <Link to="/projetos">
                            <button className="botao botao-2">Projetos</button>
                        </Link>
                        <button className="botao botao-3" onClick={() => window.open("https://wa.me//5574988048578?text=Acabei%20de%20ver%20seu%20currículo...")}>Contato</button>
                    </section>
                </section>

                

            </section>
        </main>
    );
}