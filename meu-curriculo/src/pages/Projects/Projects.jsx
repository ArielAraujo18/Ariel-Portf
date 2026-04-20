import "./Projects.css";

export function Projects(){
    return(
        <main className="projects">
            
            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/ProjetoAcude")}>
                <section className="conteudo-titulo">Segurança da barragem</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/acude.png" alt="" />
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
                    <span>JavaScript</span>
                   <i className="devicon-javascript-plain"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                   <p>
                        Sistema geoespacial desenvolvido como projeto de extensão universitária na UFERSA, aplicado ao contexto do Plano de Segurança de Barragens no município de Ouro Branco-RN.
                        A aplicação foi implementada com HTML, CSS, JavaScript, Python e MySQL, utilizando arquitetura baseada em APIs para comunicação entre frontend e backend.
                        O sistema integra a API do Google Maps para geocodificação e visualização de coordenadas, permitindo o cadastro de residências vinculadas a localização geográfica e o armazenamento estruturado dessas informações em banco de dados relacional.
                        A solução implementa funcionalidades de registro, consulta e organização de dados geoespaciais, com foco em suporte à gestão de áreas de risco e tomada de decisão baseada em localização.
                    </p>
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
                    <p>
                        Sistema ERP desenvolvido em Python com integração a banco de dados MySQL, voltado à gestão empresarial e automação de processos operacionais.
                        A aplicação foi estruturada com interface gráfica e arquitetura modular, centralizando funcionalidades críticas como cadastro de clientes, funcionários, produtos e fornecedores.
                        O sistema inclui módulos de ponto de venda (PDV), controle financeiro, gestão de dívidas, apuração de resultados e controle de estoque, integrando os principais fluxos operacionais em uma única plataforma.
                        A solução foi utilizada em ambiente comercial real, com aplicação prática em empresas, demonstrando sua funcionalidade e estabilidade em uso.
                        Atualmente o sistema passa por manutenção e evolução para novas versões.
                    </p>
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
                    <p>
                        Bot de automação desenvolvido em Python para execução de tarefas no Telegram, com foco em comunicação e envio automatizado de mensagens em grupos.
                        O sistema realiza integração com APIs externas para captura de dados em tempo real e processamento dessas informações para disparo automático de mensagens.
                        A aplicação foi projetada para operar de forma contínua, permitindo automação de notificações e envio de informações sem intervenção manual.
                        O bot utiliza estrutura orientada a eventos, garantindo resposta rápida a novas entradas de dados e execução automatizada das ações definidas.
                    </p>
                </section>
            </section>

            {/* CONTEÚDO */}
            <section className="conteudo" on onClick={() => window.open("https://github.com/ArielAraujo18/NodeAPI")}>
                <section className="conteudo-titulo">API REST com Node.js</section>
                <hr />
                <section className="conteudo-imagem">
                    <img src="/Node.png" alt="" />
                </section>
                <hr />
                <section className="conteudo-autor">
                    Autor: Ariel Araújo dos Santos
                </section>
                <hr />
                <section className="conteudo-linguagens">
                    <span>Linguagens: </span>
                    <span>Node.js</span>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                </section>
                <hr />
                <section className="conteudo-texto">
                    <p>
                        API REST desenvolvida com Node.js, estruturada para fornecer operações de CRUD e integração com banco de dados.
                        A aplicação segue arquitetura baseada em endpoints, permitindo criação, leitura, atualização e remoção de dados de forma padronizada.
                        O sistema foi testado utilizando Postman, validando requisições HTTP e respostas da API em diferentes cenários de uso.
                        A API foi construída com foco em organização de rotas, separação de responsabilidades e comunicação eficiente com o banco de dados.
                    </p>
                </section>
            </section>
        </main>
    );
}