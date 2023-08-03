import { useParams } from "react-router-dom";
import { coachs } from '../../assets/data';
import "./styles.css";

function CoachDetails() {
      const { id } = useParams();
      const person = coachs[id];

      return (
            <div className="coach__container">
                  <section className="coach__infos">
                        <img src={ person.photo } alt={ `Photo de ${person.name}` } className="coach__image"/>

                        <div className="coach__presentation">
                              <h3 className="coach__title">{ person.name }</h3>
                              {
                                    person.presentation.map((text) => (
                                          <p key={text} className="person__info person__presentation">
                                                {text}
                                          </p>
                                    ))
                              }
                        </div>
                  </section>

                  <section className="coach__schedule">
                        <h4 className="schedule__title">Planning des cours</h4>
                        <div className="schedule__content">
                              {
                                    person.cours.map((cour) => (
                                          <div key={cour.name} className="schedule__infos">
                                                <div className="schedule__class">
                                                      <h4 className="schedule__name">{cour.name}</h4>
                                                </div>

                                                <div className="schedule__detail">
                                                      {
                                                      cour.horaire.map((elt) => (
                                                            <div key={elt[1]}className="schedule__time">
                                                                  <span>{elt[0]}</span>
                                                                  <span>{elt[1]}</span>
                                                            </div>
                                                      ))
                                                      }
                                                </div>
                                          </div>

                                    ))
                              }
                        </div>
                  </section>
            </div>
      );
};

export default CoachDetails;