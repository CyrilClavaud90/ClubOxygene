import "./styles.css";

function CoursCollectifs() {
      return (
            <div className="collectifs__container">
                  <h1 className="collectifs__title">
                        Cours collectifs
                  </h1>

                  <section className="collectifs__section">
                        <div>
                              <a 
                                    href="" 
                                    className="collectifs__link first__link"
                              >
                              Réserver et consulter le planning
                              </a>
                        </div>

                        <div>
                              <a 
                                    href="https://apps.apple.com/fr/app/deciplus/id1519197587" 
                                    target="_blank"
                                    className="collectifs__link"
                              >
                              Télécharger App Store
                              </a>

                              <a 
                                    href="https://play.google.com/store/apps/details?id=com.lodecom.apps.deciplusmember&pli=1" 
                                    target="_blank"
                                    className="collectifs__link"
                              >
                              Télécharger Google Store
                              </a>
                        </div>
                  </section>
            </div>
      );
};

export default CoursCollectifs;