import "./Projects.css";

export function Projects(){
    return(
        <main className="projects">
            
            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/ProjetoAcude")}>
                <section className="conteudo-titulo">Segurança da barragem</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/Geotec.png" alt="" />
                </section>
                <hr />
                <section className="conteudo-autor">
                    Autor: Ariel Araújo dos Santos
                </section>
                <hr />
                <section className="conteudo-linguagens">
                    <span>Linguagens: </span>
                    <span>Python</span>
                    <i className="devicon-python-plain"></i>
                    <span>|</span> 
                    <span>MySQL</span>
                    <i className="devicon-mysql-original"></i>
                    <span>|</span> 
                    <span>Html</span>
                    <i className="devicon-html5-plain"></i>
                    <span>|</span> 
                    <span>Css</span>
                    <i className="devicon-css3-plain"></i>
                    <span>|</span> 
                    <span>JavaScript</span>
                   <i className="devicon-javascript-plain"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                    <p>Este foi o principal projeto desenvolvido durante o período da bolsa acadêmica,
                    consistindo na criação de um sistema desktop completo utilizando HTML, CSS, JavaScript, Python e MySQL.
                    A aplicação foi estruturada com APIs próprias, responsáveis pela comunicação entre a interface e o back-end,
                    garantindo organização, confiabilidade e escalabilidade dos dados.
                    O sistema integra a API do Google Maps para geolocalização,
                    permitindo o mapeamento de residências e o cadastro detalhado das famílias localizadas em áreas de risco.
                    O software tem como objetivo apoiar a elaboração do Plano de Segurança de Barragens,
                    identificando e organizando informações sobre moradores em situação de vulnerabilidade no município de Ouro Branco-RN,
                    auxiliando na prevenção de riscos e na tomada de decisões estratégicas por órgãos responsáveis.
                    O projeto alia solução tecnológica robusta a um forte impacto social e preventivo.</p>
                </section>
            </section>

            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/ErpSistema")}>
                <section className="conteudo-titulo">Sistema ERP</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/Erp.png" alt="" />
                </section>
                <hr />
                <section className="conteudo-autor">
                    Autor: Ariel Araújo dos Santos
                </section>
                <hr />
                <section className="conteudo-linguagens">
                    <span>Linguagens: </span>
                    <span>Python</span>
                    <i className="devicon-python-plain"></i>
                    <span>|</span> 
                    <span>MySQL</span>
                    <i className="devicon-mysql-original"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                    <p>Este projeto consiste no desenvolvimento de um sistema ERP completo,
                    criado inteiramente em Python, com interface gráfica e integração com banco de dados MySQL.
                    O sistema foi projetado para centralizar e automatizar processos empresariais,
                    oferecendo maior controle e organização das informações.
                    O ERP conta com múltiplos módulos, incluindo cadastro de clientes, funcionários,
                    produtos e fornecedores, além de PDV, controle de dívidas,
                    apuração de lucros e gestão financeira, atendendo às principais necessidades operacionais de pequenas e médias empresas.
                    A aplicação já foi utilizada comercialmente, sendo alugada para empresas, o que comprova sua aplicabilidade prática e robustez.
                    Atualmente, o sistema encontra-se em manutenção e evolução, com previsão de retorno ao mercado em meados do ano.</p>
                </section>
            </section>

            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/Bot-Telegram")}>
                <section className="conteudo-titulo">Automatização do telegram</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/Telegram.png" alt="" />
                </section>
                <hr />
                <section className="conteudo-autor">
                    Autor: Ariel Araújo dos Santos
                </section>
                <hr />
                <section className="conteudo-linguagens">
                    <span>Linguagens: </span>
                    <span>Python</span>
                    <i className="devicon-python-plain"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                    <p>Este projeto é um bot de automação para Telegram, desenvolvido em Python com a biblioteca Telebot. 
                    O software foi criado para enviar mensagens automáticas em intervalos de tempo definidos, 
                    permitindo uma comunicação contínua sem intervenção manual.
                    A aplicação demonstra conceitos importantes como integração com APIs, automação de tarefas e controle de tempo,
                    sendo útil para canais de avisos, sinais, marketing digital ou gerenciamento de comunidades. 
                    Mesmo sendo um projeto inicial, ele evidencia a capacidade de criar soluções funcionais e escaláveis.</p>
                </section>
            </section>

            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/Youtube-Download")}>
                <section className="conteudo-titulo">Download vídeos youtube</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/Youtube.png" alt="" />
                </section>
                <hr />
                <section className="conteudo-autor">
                    Autor: Ariel Araújo dos Santos
                </section>
                <hr />
                <section className="conteudo-linguagens">
                    <span>Linguagens: </span>
                    <span>Python</span>
                    <i className="devicon-python-plain"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                    <p>Este projeto é uma aplicação desktop para download de vídeos e músicas do YouTube,
                    desenvolvida inteiramente em Python, com interface gráfica em PyQt5 e utilização da biblioteca yt-dlp
                    para o processamento dos downloads.
                    O sistema permite ao usuário baixar conteúdos nos formatos MP3 ou MP4, de forma simples e intuitiva, contando com execução em thread separada para garantir fluidez da interface durante o processo. O projeto demonstra conhecimentos em interfaces gráficas, multithreading, manipulação de arquivos e integração com bibliotecas externas, resultando em uma aplicação prática, funcional e focada na experiência do usuário.</p>
                </section>
            </section>
          
        </main>
    );
}