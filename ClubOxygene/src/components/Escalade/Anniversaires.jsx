import "./styles.css";

function Anniversaires() {
      return (
            <div className="anniversaires__container">
                  <h1 className="anniversaires__title">
                  Anniversaires Escalade
                  </h1>

                  <section className="anniversaires__section">
                        <img
                              src="https://www.club-oxygene.com/wp-content/uploads/2020/09/escalade_le_port_marly.jpg"
                              alt="activitée d'annicersaire"
                              className="anniversaires__img"
                        />
                        <div className="anniversaires__infos">
                              <h2>
                              Gouter d'anniversaire d'escalade
                              </h2>
                              <p>
                              Viens fêter ton anniversaire sur le thème de l'escalade au Club Oxygène Saint Germain en Laye (à partir de 7 ans).
                              </p>
                              <p>
                              1h30 de grimpe encadrée par un professeur 30 minutes de gouter d'anniversaire (mise à disposition dans l'espace restauration)
                              </p>
                              <p>
                              Chaussons, vaisselle, bougies et 3 boissons inclus. Tarif: 25€/enfant (minimum facturation 200€ - 12 enfants maximum)
                              </p>
                              <p>
                              Option gâteau au chocolat possible (+20€).
                              </p>
                              <p>
                              Renseignements au 01 34 51 10 19.
                              </p>
                              <p>
                              Télécharge et imprime ton carton d'anniversaire <a href="../../assets/doc/Carton_Invitation.pdf" className="anniversaires__invit" download>
                                     ici.
                              </a>
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default Anniversaires;