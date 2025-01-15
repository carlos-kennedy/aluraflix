import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.svg";
import './Navbar.css';
const Navbar = () => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const handleNavigation = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 100);
    };
    return (_jsxs("nav", { children: [_jsx("img", { src: logo, alt: 'logo' }), _jsxs("ul", { className: `navbar ${isTransitioning ? 'transitioning' : ''}`, children: [_jsx("li", { className: location.pathname === '/' ? 'active' : '', children: _jsxs(Link, { to: "/", onClick: handleNavigation, children: [_jsx("svg", { width: "40", height: "43", viewBox: "0 0 40 43", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M5.59453 37.9879L12.8442 37.9231L12.7363 25.8402C12.7302 25.1555 12.9566 24.5795 13.4157 24.1122C13.8747 23.6449 14.4466 23.4082 15.1313 23.4021L24.7975 23.3157C25.4822 23.3096 26.0582 23.536 26.5255 23.9951C26.9929 24.4541 27.2296 25.026 27.2357 25.7107L27.3437 37.7935L34.5934 37.7287L34.399 15.9796L19.8024 5.23461L5.40019 16.2387L5.59453 37.9879ZM0.761391 38.0311L0.567052 16.2819C0.560215 15.5167 0.72491 14.7902 1.06114 14.1024C1.39737 13.4147 1.86558 12.8466 2.46576 12.3981L16.868 1.39401C17.7081 0.742037 18.6718 0.41119 19.7593 0.401473C20.8467 0.391756 21.8162 0.705328 22.6678 1.34219L37.2644 12.0872C37.8725 12.5248 38.3508 13.0845 38.6992 13.7661C39.0477 14.4477 39.2253 15.1712 39.2322 15.9364L39.4265 37.6856C39.4384 39.0147 38.9753 40.1567 38.0373 41.1117C37.0992 42.0666 35.9657 42.55 34.6366 42.5619L24.9703 42.6483C24.2856 42.6544 23.7096 42.4279 23.2423 41.9689C22.7749 41.5098 22.5382 40.938 22.5321 40.2533L22.4241 28.1704L17.591 28.2136L17.699 40.2965C17.7051 40.9812 17.4786 41.5572 17.0196 42.0245C16.5606 42.4918 15.9887 42.7285 15.304 42.7346L5.63772 42.821C4.3086 42.8329 3.16657 42.3698 2.21163 41.4318C1.25668 40.4937 0.773267 39.3602 0.761391 38.0311Z", fill: "white" }) }), _jsx("span", { children: "Home" })] }) }), _jsx("li", { className: location.pathname === '/novo-video' ? 'active' : '', children: _jsxs(Link, { to: "/novo-video", onClick: handleNavigation, children: [_jsx("svg", { width: "31", height: "31", viewBox: "0 0 31 31", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M14.2139 16.6448L14.2541 21.1447C14.2579 21.5696 14.4048 21.9246 14.6949 22.2095C14.985 22.4944 15.3425 22.635 15.7675 22.6312C16.1924 22.6274 16.5474 22.4805 16.8323 22.1904C17.1172 21.9003 17.2578 21.5428 17.254 21.1178L17.2138 16.618L21.7136 16.5778C22.1386 16.574 22.4935 16.4271 22.7785 16.137C23.0634 15.847 23.2039 15.4895 23.2001 15.0645C23.1963 14.6395 23.0494 14.2845 22.7594 13.9996C22.4693 13.7147 22.1118 13.5741 21.6868 13.5779L17.187 13.6181L17.1468 9.11832C17.143 8.69334 16.996 8.33839 16.706 8.05347C16.4159 7.76855 16.0584 7.62799 15.6334 7.63179C15.2084 7.63558 14.8535 7.78251 14.5686 8.07257C14.2837 8.36263 14.1431 8.72015 14.1469 9.14513L14.1871 13.645L9.68728 13.6852C9.2623 13.689 8.90735 13.8359 8.62243 14.1259C8.33751 14.416 8.19695 14.7735 8.20074 15.1985C8.20454 15.6235 8.35147 15.9784 8.64153 16.2634C8.93158 16.5483 9.2891 16.6888 9.71409 16.685L14.2139 16.6448ZM15.8345 30.1309C13.7596 30.1494 11.8061 29.7731 9.97415 29.002C8.14219 28.2308 6.5452 27.1763 5.18319 25.8384C3.82118 24.5005 2.73829 22.9226 1.93452 21.1047C1.13074 19.2868 0.719584 17.3404 0.701043 15.2655C0.682503 13.1906 1.05881 11.2372 1.82998 9.40519C2.60114 7.57323 3.65566 5.97624 4.99354 4.61424C6.33143 3.25223 7.90932 2.16934 9.72721 1.36556C11.5451 0.561785 13.4915 0.150627 15.5664 0.132087C17.6413 0.113546 19.5948 0.489857 21.4267 1.26102C23.2587 2.03218 24.8557 3.0867 26.2177 4.42459C27.5797 5.76247 28.6626 7.34036 29.4664 9.15825C30.2701 10.9761 30.6813 12.9225 30.6998 14.9975C30.7184 17.0724 30.3421 19.0258 29.5709 20.8578C28.7998 22.6897 27.7452 24.2867 26.4073 25.6487C25.0695 27.0107 23.4916 28.0936 21.6737 28.8974C19.8558 29.7012 17.9094 30.1124 15.8345 30.1309ZM15.8077 27.131C19.1575 27.1011 21.9845 25.9133 24.2887 23.5676C26.5928 21.2219 27.7299 18.3741 27.7 15.0243C27.67 11.6744 26.4822 8.8474 24.1365 6.54327C21.7909 4.23913 18.9431 3.10203 15.5932 3.13197C12.2434 3.1619 9.41636 4.34971 7.11222 6.69539C4.80809 9.04107 3.67099 11.8888 3.70092 15.2387C3.73086 18.5886 4.91866 21.4156 7.26434 23.7197C9.61003 26.0238 12.4578 27.1609 15.8077 27.131Z", fill: "#2271D1" }) }), _jsx("span", { children: "Novo V\u00EDdeo" })] }) })] })] }));
};
export default Navbar;
