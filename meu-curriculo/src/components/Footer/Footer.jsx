import "./Footer.css"

export function Footer(){
    return(
        <footer className="footer">
            <section>
                <p>Me acompanhe nas redes sociais!</p>
            </section>
            
            <section className="footer-redes">
                <section className="footer-redes-icons">
                    <img src="./github.png" alt="" />
                    <a href="https://github.com/ArielAraujo18" target="_blank" rel="noopener noreferrer">GitHub</a>
                </section>
                <section className="footer-redes-icons">
                    <img src="./linkedin.png" alt="" />
                    <a href="https://www.linkedin.com/in/ariel-ara%C3%BAjo-935217228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </section>
                <section className="footer-redes-icons">
                    <img src="./youtube.png" alt="" />
                    <a href="https://www.youtube.com/@ArielSantos-dev" target="_blank" rel="noopener noreferrer">Youtube</a>
                </section>
                <section className="footer-redes-icons">
                    <img src="./gmail.png" alt="" />
                    <span>arielaraujo120@gmail.com</span>
                </section>
            </section>
        </footer>
    );
}