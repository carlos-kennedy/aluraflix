import { jsx as _jsx } from "react/jsx-runtime";
import logo from "../assets/logo.svg";
import "../components/Footer.css";
const Footer = () => {
    return (_jsx("footer", { className: "footer", children: _jsx("img", { src: logo, alt: "Logo AluraFlix", className: "footer-logo" }) }));
};
export default Footer;
