import logo from "../assets/logo.svg"
import "../components/Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo AluraFlix" className="footer-logo" />
    </footer>
  );
};

export default Footer;
