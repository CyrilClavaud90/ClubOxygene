import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { sliderCardio } from '../../assets/data';
import 'react-slideshow-image/dist/styles.css'
import "./styles.css";

const proprietes = {
      duration: 4000,
      transitionDuration: 1000,
      infinite: true,
      indicators: true,
      arrows: true
    };

function CardioMuscu() {

      return (
            <div className="cardio__container">
                  <h1 className="cardio__title">Cardio et Musculation</h1>
                  <section className="slide__container">
                        <Slide {...proprietes}>
                              {
                                    sliderCardio.map((element) => (
                                          <div key={element}>
                                                <img src={element} alt="photo de la salle" className="slider__img"/>
                                          </div>
                                    ))
                              }
                        </Slide>
                  </section>
                  
                  <section className="cardio__section">
                        <img src="https://www.club-oxygene.com/wp-content/uploads/2020/09/escalade_poissy.jpg" alt="photo de la salle" className="cardio__image"/>

                        <div className="cardio__infos">
                              <h2 className="cardio__infos__title">S'entraîner dans les meilleures conditions</h2>
                              <p className="cardio__info">Disponibilités des machines, espaces variés et aérés: un pré-requis pour un entrainement efficace et agréable.</p>
                              <a href="https://goo.gl/maps/kWJeo1e83Sq8adL46" target="_blank" className="cardio__link"> Visite 360°</a>
                        </div>
                  </section>

                  <section className="cardio__section cardio__impair">
                        <img src="https://www.club-oxygene.com/wp-content/uploads/2017/05/musculation_guidee_club_oxygene.jpg" alt="photo d'une machine de muscu" className="cardio__image"/>

                        <div className="cardio__infos">
                              <h2 className="cardio__infos__title">Se sentir bien</h2>
                              <p>Un cadre soigné, une ambiance conviviale et détendue sont autant d'atouts pour faire du Club Oxygène un bel endroit pour se faire du bien.</p>
                        </div>
                  </section>

                  <section className="cardio__section">
                        <img src="https://www.club-oxygene.com/wp-content/uploads/2020/09/salle-de-sport-saint-germain-en-laye-e1649001612970.jpg" alt="photo du bar de la salle" className="cardio__image" />

                        <div className="cardio__infos">
                              <h2 className="cardio__infos__title">Plus qu'une salle de sport, un lieu de vie</h2>
                              <p>Partagez vos émotions en Escalade, RPM, en Hiit ou en Boxing, retrouvez-vous après l'effort à l'Oxygène Café.</p>
                              <p>Rejoignez la communauté du Club Oxygène.</p>
                        </div>
                  </section>

                  <section className="cardio__section cardio__impair">
                        <img src="https://www.club-oxygene.com/wp-content/uploads/2022/04/musculation-club-oxygene.jpg" alt="photo d'entrainement" className="cardio__image" />

                        <div className="cardio__infos">
                              <h2 className="cardio__infos__title">
                                    Un accompagnement unique
                              </h2>
                              <p className="cardio__info">
                                    Nos coachs vous accompagnent lors de votre bilan individuel (inclus), en coaching privé (50€/heure) ou en small group training.
                              </p>
                              <Link to={"/smallgroup"} className="cardio__link">
                                    Small group training
                              </Link>
                        </div>
                  </section>
            </div>
      );
};

export default CardioMuscu;