import "./Footer.css"

export function Footer() {
    return (
        <footer className="footer">
            <div>
                <p>Me acompanhe nas redes sociais!</p>
            </div>

            <div className="footer-redes">
                <div className="footer-redes-icons">
                    <img src="./github.png" alt="" />
                    <a href="https://github.com/ArielAraujo18" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="footer-redes-icons">
                    <img src="./linkedin.png" alt="" />
                    <a href="https://www.linkedin.com/in/ariel-ara%C3%BAjo-935217228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="footer-redes-icons">
                    <img src="./youtube.png" alt="" />
                    <a href="https://www.youtube.com/@ArielSantos-dev" target="_blank" rel="noopener noreferrer">Youtube</a>
                </div>
                <div className="footer-redes-icons">
                    <img src="./gmail.png" alt="" />
                    <span>arielaraujo120@gmail.com</span>
                </div>
            </div>
        </footer>
    );
}