import React from "react";

import styles from "./Footer.module.css"

// ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="footer__content">
        <p>Desenvolvido por: Geisson Chagas</p>
        <a href="https://www.linkedin.com/in/geissonchagas/"><FontAwesomeIcon icon={faLinkedin}  className="icons"/></a>
        <a href="https://github.com/GeissonChagas"><FontAwesomeIcon icon={faGithub}  className="icons"/></a>
        <p>© 2023 To Do. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
