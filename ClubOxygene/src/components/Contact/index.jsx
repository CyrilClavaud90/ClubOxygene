import "./styles.css";

function Contact() {
      return (
            <div className="contact__container">
                  <h1 className="contact__title">
                  Nous joindre
                  </h1>

                  <section className="contact__section">
                        <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1229794527117!2d2.0718191768063376!3d48.893993398199974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e68848fe4b0f0f%3A0xf29af2f772a86691!2sClub%20Oxyg%C3%A8ne!5e0!3m2!1sfr!2sfr!4v1689944615050!5m2!1sfr!2sfr"
                              className="contact__maps" 
                              allowFullScreen="" 
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>

                        <div className="contact__infos">
                              <div className="contact__form">
                                    <form action="" method="post">
                                          <div>
                                                <label
                                                      htmlFor="nom"
                                                >
                                                      Nom*
                                                </label>
                                                <input type="text" id="nom" name="nom" className="contact__input" />
                                          </div>

                                          <div>
                                                <label
                                                      htmlFor="prenom"
                                                >
                                                      Prénom*
                                                </label>
                                                <input type="text" id="prenom" name="prenom" className="contact__input" />
                                          </div>

                                          <div>
                                                <label
                                                      htmlFor="mail"
                                                >
                                                      Adresse e-mail*
                                                </label>
                                                <input type="email" id="mail" name="mail" className="contact__input" />
                                          </div>

                                          <div>
                                                <label
                                                      htmlFor="tel"
                                                >
                                                      Téléphone*
                                                </label>
                                                <input type="tel" id="tel" name="tel" className="contact__input" />
                                          </div>

                                          <div>
                                                <p className="contact__checkbox-info">
                                                Votre message concerne*
                                                </p>
                                                <div className="contact__checkbox">
                                                      <input type="checkbox" id="escalade" name="escalade" />
                                                      <label
                                                            htmlFor="escalade"
                                                      >
                                                      Escalade
                                                      </label>
                                                      <input type="checkbox" id="fitness" name="fitness" />
                                                      <label
                                                            htmlFor="fitness"
                                                      >
                                                      Fitness
                                                      </label>
                                                      <input type="checkbox" id="autre" name="autre" />
                                                      <label
                                                            htmlFor="autre"
                                                      >
                                                      Autre
                                                      </label>
                                                </div>
                                          </div>

                                          <div>
                                                <label htmlFor="messsage">
                                                Pour nous laisser un message :
                                                </label>
                                                <textarea name="messsage" id="messsage" className="contact__textarea" ></textarea>
                                          </div>

                                          <div className="contact__submit">
                                                <input type="submit" value="Envoyer" className="contact__submit-button" disabled/>
                                          </div>
                                    </form>
                              </div>

                              <div className="contact__detail">
                                    <div>
                                          <h2>
                                          Notre adresse
                                          </h2>
                                          <p>
                                          8 rue de Témara
                                          </p>
                                          <p>
                                          78100 Saint-Germain-en-Laye
                                          </p>
                                    </div>

                                    <div>
                                          <h2>
                                          Téléphone
                                          </h2>
                                          <p>
                                          01 34 51 10 19
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default Contact;