import { Slide } from "react-slideshow-image";
import { escaladeTarifs, sliderEscalade } from "../../assets/data";
import "./styles.css";
import { Link } from "react-router-dom";

const proprietes = {
      duration: 4000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true
    };

function Escalade() {
      return (
            <div className="escalade__container">
                  <h1 className="escalade__title">
                        Escalade de bloc
                  </h1>
                  
                  <section className="slide__container">
                        <Slide {...proprietes}>
                              {
                                    sliderEscalade.map((elt) => (
                                          <div key={elt.id}>
                                                <img 
                                                      src={elt.name} 
                                                      alt="photo d'escalade"
                                                      className="slider__img" 
                                                />
                                          </div>
                                    ))
                              }
                        </Slide>
                  </section>

                  <section className="escalade__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2020/09/escalade_de_bloc.jpg" 
                              alt="photo d'escalade" 
                              className="escalade__img"
                        />
                        <div className="escalade__infos">
                              <h2>
                              Escaladez entre amis ou en famille au Club Oxygène Saint Germain en Laye (Yvelines) 
                              </h2>
                              <p>
                              L'escalade de bloc est accessible à tous les âges et tous niveaux. Elle s'inspire de la traditionnelle escalade sur rochers et vous offrira les mêmes sensations: vous grimpez sans corde ni baudrier jusqu'à 4,5m sur des blocs de différents formes et difficultés. En cas de chute, pas d'inquiétude, nos tapis de 40cm sauront vous réceptionner. La pratique de l'escalade ne nécessite aucun matériel particulier si ce n'est des chaussons. Nous en proposons en location si besoin.
                              </p>
                        </div>
                  </section>

                  <section className="escalade__formule">
                        <div className="tarif__escalade">
                              <div className="tarif__head">
                                    <h2>
                                          Tarifs
                                    </h2>
                              </div>

                              <div className="tarif__include">
                                    {
                                          escaladeTarifs.map((elt) => (
                                                <div 
                                                      key={elt.id} 
                                                      className="tarif__infos"
                                                >
                                                      <p>{elt.name}</p>
                                                      <p>{elt.price}</p>
                                                </div>
                                          ))
                                    }
                              </div>

                              <div className="tarif__footer"></div>
                        </div>
                  </section>

                  <section className="escalade__section escalade__impair">
                                    <img 
                                          src="https://www.club-oxygene.com/wp-content/uploads/2020/09/escalade_bougival.jpg" 
                                          alt="classe d'escalade" 
                                          className="escalade__img"
                                    />

                                    <div className="escalade__infos">
                                          <h2>
                                          Ecole de grimpe enfants et adultes
                                          </h2>

                                          <div className="">
                                                <p>
                                                Cours d'escalade encadrés par notre professeur diplômé le mardi, mercredi, samedi et dimanche - Stages pendant les vacances scolaires.
                                                </p>
                                                <Link
                                                      to={"/coursescalade"}
                                                      className="escalade__link"
                                                >
                                                      En savoir plus
                                                </Link>
                                          </div>

                                          <div className="">
                                                <p>
                                                Située à Saint Germain en Laye dans les Yvelines 78, la salle d'escalade Oxygène est à deux pas de Poissy, Le Pecq, Marly le Roi, l'Etang la Ville, Saint Nom la Bretèche, Mareil Marly, Fourqueux, Louveciennes, Bougival, le Port Marly. La salle est facile d'accès et nous disposons d'un parking.
                                                </p>
                                                <Link to={"/blocpark"} className="escalade__link">
                                                      En savoir plus
                                                </Link>
                                          </div>

                                          <div className="">
                                                <p>
                                                Organisation de fêtes d'anniversaire sur demande.
                                                </p>
                                                <Link to={"/anniversaires"} className="escalade__link">
                                                      En savoir plus
                                                </Link>
                                          </div>
                                    </div>
                  </section>

                  <section className=""></section>
            </div>
      );
};

export default Escalade;