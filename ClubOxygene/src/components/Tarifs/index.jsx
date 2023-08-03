import Tarif from "./Tarif";
import { priceTags } from "../../assets/data";
import "./styles.css";

function Tarifs() {
      return (
            <div className="tarifs__container">
                  <h1 className="tarifs__title">Tarifs</h1>

                  <section className="tarifs__main">

                        {
                              priceTags.map((tag) => (
                                    <Tarif 
                                          key={tag.id} 
                                          name={tag.name} 
                                          price={tag.price}
                                          type={tag.type}
                                    /> 
                              ))
                        }

                        <div className="tarifs__main__condition">
                              <p className="">
                              (*) abonnement par prélèvement automatique (prévoir un RIB), résiliation et suspension du 1er au 30 par lettre recommandée avec A/R moyennant un préavis de 30 jours fin de mois, 2 mois minimum.
                              </p>
                              <p className="">
                              (**) valable à partir du 01/04/22, uniquement pour les abonnements en prélèvement automatique parrain et filleul, non rétroactif.
                              </p>
                              <p className="">
                              (***) étudiants, licenciés FFME, pompiers et pour tous du lundi au vendredi avant 17h.
                              </p>
                        </div>

                        <div className="tarifs__main__other">
                              <div className="tarifs__main__card">
                                    <div className="tarif__head">
                                          <h2 className="">
                                                ... ou à la carte
                                          </h2>
                                    </div>
                                    <div className="tarif__include">
                                          <div>
                                                <div className="">
                                                      <p>
                                                            Entrée à la séance: 14€
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      Séance réduit: 12€ ***
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      Séance escalade enfant -10 ans: 9€
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      Carte 10 séances: 125€
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      Carte 10 séances réduit: 105€ ***
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      Carte 10 séances enfant: 70€
                                                      </p>
                                                </div>
                                                <div className="">
                                                      <p>
                                                      1 mois illimité comptant: 70€
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="tarif__footer"></div>
                              </div>

                              <div className="tarifs__main__add">
                                    <div className="tarif__head">
                                          <h2 className="">services additionnels</h2>
                                    </div>
                                    <div className="tarif__include">
                                          <div className="">
                                                <p>
                                                Location de serviette: 2€
                                                </p>
                                          </div>
                                          <div className="">
                                                <p>
                                                Location de chaussons: 4€
                                                </p>
                                          </div>
                                          <div className="">
                                                <p>Location de chaussons enfant: 3€</p>
                                          </div>
                                    </div>
                                    <div className="tarif__footer"></div>
                              </div>
                        </div>
                  </section>

                  <section className="tarifs__other">
                        <h2 className="tarifs__other__title">
                        Quelles sont les aides existantes à la pratique sportive acceptées au Club Oxygène?
                        </h2>

                        <div>
                              <h3>
                              Le coupon sport :
                              </h3>
                              <p>
                              C’est une aide d’une valeur de 10 €, 15 € ou 20 € pour aider à financer une adhésion, une licence, un abonnement, des cours & des stages sportifs au sein d’un club. L’obtention peut se faire auprès du comité d’entreprise ou de l’association du personnel. Enfin, ces coupons sont valables 2 ans à partir de leur date d’émission.
                              </p>
                        </div>

                        <div>
                              <h3>
                              Le passplus :
                              </h3>
                              <p>
                              Le département des Yvelines et Hauts de Seine propose une aide pour tous les collégiens et lycéens sans conditions de ressources (<a href="https://www.passplus.fr/">https://www.passplus.fr/</a>).
                              
                              </p>
                        </div>

                        <div>
                              <h3>
                              Les chèques vacances et chèques sports et bien-être (actobi)
                              </h3>
                              <p>
                              Nous acceptons ces modes de paiements délivrés par votre entreprise ou comité d’entreprise.
                              </p>
                        </div>

                        <div>
                              <h3>
                              Le pass’ Loisirs :
                              </h3>
                              <p>
                              Depuis plusieurs années, la CAF (Caisse d’Allocations Familiales) propose une aide d’une cinquantaine d’euros pour aider à financer une activité sportive ou culturelle. Chaque centre régional de la CAF peut fixer les conditions relatives au Pass’Loisirs, mais en général il s’agit d’un chéquier de 50 € (5×10 €).
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default Tarifs;