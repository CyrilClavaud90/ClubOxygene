import { Slide } from "react-slideshow-image";
import { sliderEscalade } from "../../assets/data";
import "./styles.css";

const proprietes = {
      duration: 4000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true
    };

function BlocPark() {
      return (
            <div className="bloc-park__container">
                  <h1 className="bloc-park__title">
                        Le Bloc Park
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

                  <section className="carte__section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1229794527117!2d2.0718191768063376!3d48.893993398199974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68848fe4b0f0f%3A0xf29af2f772a86691!2sClub%20Oxyg%C3%A8ne!5e0!3m2!1sfr!2sfr!4v1689944615050!5m2!1sfr!2sfr" className="carte__maps" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <div className="carte__infos">
                              <p>
                              Découvrez la plus grande salle d'escalade de Saint Germain en Laye. 88 blocs du plus facile ou plus expert renouvelés toutes les semaines par nos ouvreurs vous attendent. Tous les profils, verticaux, devers ou positifs sont proposés.
                              </p>
                              
                              <a 
                                    href="https://goo.gl/maps/kWJeo1e83Sq8adL46" 
                                    target="_blank"
                                    className="carte__link"
                              >
                                    Visite 360°
                              </a>
                        </div>
                  </section>

                  <section className="pan-gullich__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2022/04/A9B0DF67-A87A-4DB8-9520-377D7CD9511A-e1649617081441.jpeg" 
                              alt="Pan Gullich et Pegboard" 
                              className="pan-gullich__img" 
                              />

                        <div className="pan-gullich__infos">
                              <h2>
                              Pan Gullich et Pegboard
                              </h2>
                              <p>
                              Rien de tel pour se perfectionner que de travailler la technique sur notre Pan Gullich.
                              </p>
                              <p>
                              Allez plus loin dans votre entrainement en utilisant notre nouveau pegboard.
                              </p>
                              <p>
                              Améliorez votre force et votre dextérité.
                              </p>
                        </div>
                  </section>

                  <section className="machine__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2022/04/389A8669-3C2E-44AD-9C10-201AE0B82615-e1649615412402.jpeg" 
                              alt="machine de sport" 
                              className="machine__img" 
                        />

                        <div className="machine__infos">
                              <h2>
                              Complétez votre entrainement sur nos machines
                              </h2>
                              <p>
                              Pont de singe, cages, anneaux mais aussi machine à traction avec ou sans contrepoids, rameurs, presse à épaule ou encore abdos crunch sont les compléments indispensables à votre perfectionnement en escalade.
                              </p>
                        </div>
                  </section>

                  <section className="casier__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2022/04/vestiaires-e1649104130597.jpg" 
                              alt="salle des casiers" 
                              className="casier__img"
                        />

                        <div className="casier__infos">
                              <h2>Après l'effort</h2>
                              <p>
                              Casiers, douches individuelles, sauna, espace bar et restauration.
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default BlocPark;