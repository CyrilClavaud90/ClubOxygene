import "./styles.css";

function Tarif({ name, price, type }) {
      return (
            <div className="tarif__container">
                  <div className="tarif__head">
                        <h2 className="">
                              { name }
                        </h2>
                  </div>

                  <div className="tarif__main">
                        <div className="tarif__main__month">
                              <p>
                                    par mois
                              </p>
                        </div>
                        <div className="tarif__main__price">
                              <p>
                                    {price}&#8364;
                              </p>
                        </div>
                        <div className="tarif__main__inscription">
                              <p>
                              Frais d'inscription: offerts
                              </p>
                        </div>
                        <div className="tarif__main__tag">
                              <p>
                              Création de badge: 3,50€
                              </p>
                        </div>
                  </div>

                  <div className="tarif__include">
                        <div className="">
                              <p>
                              Accès illimité 7j/7
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Sans engagement*
                              </p>
                        </div>
                        <div className="">
                              <p>
                              {type}
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Machines cardio et musculation
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Escalade de Bloc
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Espace Cross Training
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Sauna
                              </p>
                        </div>
                        <div className="">
                              <p>
                              1 invité à chaque séance pendant 15 premiers jours puis 2 invit/an
                              </p>
                        </div>
                        <div className="">
                              <p>
                              Parrainage: 1 mois offert par filleul **
                              </p>
                        </div>
                  </div>

                  <div className="tarif__footer"></div>
            </div>
      );
};

export default Tarif;