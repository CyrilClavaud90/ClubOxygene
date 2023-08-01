import { Link } from 'react-router-dom';
import "./styles.css";

function Home() {
      return (
            <div className="home__container">
                  <div className="home__header">
                        <img
                              src="https://www.club-oxygene.com/wp-content/uploads/2017/05/club_de_sport_saint_germain_en_laye.jpg"
                              alt="home image"
                              className="home__header__image"
                        />
                        <div className="home__intro">
                              <h1>
                              La salle de sport sans engagement.
                              </h1>
                        </div>
                  </div>

                  <div className="home__main">
                        <article className="home__article">
                              <img 
                                    src="https://www.club-oxygene.com/wp-content/uploads/2020/09/28452d40-5a9c-4a2d-bb48-a2d011a08ddd.jpg" 
                                    alt="cours d'escalade" 
                                    className="home__image" 
                              />

                              <div className="home__infos">
                                    <h2>
                                    La Salle d'escalade est ouverte!
                                    </h2>
                                    <p>
                                    88 blocs du niveau débutant à avancé, sans corde ni baudrier.
                                    </p>
                                    <p>
                                    400m2 de grimpe répartis sur 3 espaces.
                                    </p>
                                    <p>
                                    Devers, Pan Gullich, dalle, tous les profils vous attendent pour une grimpe sportive ou cool, en solo, en famille ou entre amis.
                                    </p>
                                    <p>
                                    Escalade ludique à tous âges, espace enfant.
                                    </p>
                                    <Link to={"/escalade"} className="home__link" >
                                          Escalade de bloc
                                    </Link>
                              </div>
                        </article>

                        <article className="home__article home__impair">
                              <img 
                                    src="https://www.club-oxygene.com/wp-content/uploads/2022/04/eve-body-sculpt-oxygene.jpg" 
                                    alt="cours de fitness" 
                                    className="home__image" 
                              />

                              <div className="home__infos">
                                    <h2>
                                    Des cours motivants et efficaces animés par nos coachs
                                    </h2>
                                    <p>
                                    Gardez la motivation grâce à l'émulation du collectif et des encouragements de votre coach. Il vous emmènera plus loin pour atteindre vos objectifs et vous aider à les tenir dans la durée. Notre ambition est de vous faire aimer le sport. Attention, vous ne pourrez bientôt plus vous en passer!
                                    </p>
                                    <Link to={"/courscollectifs"} className="home__link" >
                                          Decouvrez nos cours
                                    </Link>
                              </div>
                        </article>


                        <article className="home__article">
                              <img 
                                    src="https://www.club-oxygene.com/wp-content/uploads/2017/02/max-musculation.jpg" 
                                    alt="muscu" 
                                    className="home__image" 
                              />

                              <div className="home__infos">
                                    <h2>
                                    Des machines et des espaces qui donnent envie de s'entraîner
                                    </h2>
                                    <p>
                                    En solo ou en small group training animés par nos coachs, découvrez ce dont vous êtes capable.
                                    </p>
                                    <Link to={"/cardiomuscu"} className="home__link" >
                                          Decouvrez notre club
                                    </Link>
                              </div>
                        </article>
                        <article className=""></article>
                  </div>
            </div>
      );
};

export default Home;