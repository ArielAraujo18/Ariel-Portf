import "./Footer.css"

export function Footer(){
    return(
        <footer className="footer">
            <section>
                <p>✉️ arielaraujo120@gmail.com</p>
                <p>Me acompanhe nas redes sociais!</p>
            </section>
            
            <section className="footer-redes">
                <a href="https://github.com/ArielAraujo18" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/ariel-ara%C3%BAjo-935217228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/arielsantos074/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.youtube.com/@ArielSantos-dev" target="_blank" rel="noopener noreferrer">Youtube</a>
            </section>
        </footer>
    );
}