import { Container } from "react-bootstrap";

export function Footer(){
    return <>
    <footer className="footer px-0 px-lg-3">
        <Container fluid>
            <nav>
                <ul className="footer-menu">
                    <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Company
                        </a>
                    </li>
                    <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Blog
                        </a>
                    </li>
                </ul>
                <p className="copyright text-center">
                    © {new Date().getFullYear()}{" "}
                    <a href="http://www.creative-tim.com">Creative Tim</a>, 
                </p>
            </nav>
        </Container>
    </footer>
    </>
}