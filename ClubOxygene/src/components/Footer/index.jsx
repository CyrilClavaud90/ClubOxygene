import "./styles.css";

function Footer() {
      return (
            <footer className="footer">
                  <div className="footer__container">
                        <div className="footer__top">
                              <div className="footer__social">
                                    <a href="#" className="footer__social__link">
                                          <i className="uil uil-facebook footer__social__logo"></i>
                                          <span className="footer__social__alt"> Facebook</span>
                                    </a>

                                    <a href="#" className="footer__social__link">
                                          <i className="uil uil-instagram footer__social__logo"></i>
                                          <span className="footer__social__alt"> Instagram</span>
                                    </a>
                              </div>

                              <div className="footer__scroll-to-top">
                                    <span className="footer__scroll-to-top__link">
                                          To the top 
                                    </span>
                                    <span>
                                          <i className="uil uil-arrow-up footer__scroll-to-top__logo"></i>
                                    </span>
                              </div>
                        </div>

                        <div className="footer__main">
                              <div className="footer__info">
                                    <section className="footer__address">
                                          <h2 className="footer__title">Notre adresse</h2>
                                          <p className="footer__text">8 rue de Témara</p>
                                          <p className="footer__text">78100 Saint Germain en Laye</p>
                                    </section>

                                    <section className="footer__contact">
                                          <h2 className="footer__title">Nous joindre</h2>
                                          <p className="footer__text">Téléphone:</p>
                                          <p className="footer__text">01 34 51 10 19</p>
                                          <p className="footer__text">
                                                <a href="#">par mail cliquez ici</a>
                                          </p>
                                    </section>

                                    <section className="footer__schedule">
                                          <h2 className="footer__title">Nos horaires</h2>
                                          <p className="footer__text">Lundi-Vendredi: 8h30-22h</p>
                                          <p className="footer__text">Week-end et fériés: 9h-19h</p>
                                    </section>
                              </div>
                        </div>

                        <div className="footer__bottom">
                              <div className="footer__copyright">
                                    <a href="#">Mentions Légales</a>
                                    <a href="#">Règlement Intérieur</a>
                              </div>
                        </div>
                  </div>
            </footer>
      )
};

export default Footer;