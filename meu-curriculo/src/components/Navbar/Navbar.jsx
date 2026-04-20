import "./Navbar.css";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

export function Navbar(){
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname){
            case "/":
                return "Ariel Araújo dos Santos | Desenvolvedor";
            case "/projetos":
                return "Home";
            default:
                return "Ariel Araújo dos Santos";
        }
    };
    
    return(
        <nav className="navbar">
            <section className="navbar-center">
                <Link to="/">
                    {getTitle()}
                </Link>
            </section>
            <section className="navbar-right">
                <a href="/ArielSantos.pdf" target="_blank" rel="noopener noreferrer">Currículo </a> <span>|</span>
                <Link to="/projetos">Projetos</Link> <span>|</span>
                <a href="https://www.linkedin.com/in/ariel-ara%C3%BAjo-935217228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </section>
            
        </nav>
    );
}