import "./styles.css";

function CoursEscalade() {
      return (
            <div className="cours-escalade__container">
                  <h1 className="cours-escalade__title">
                        Stages et cours d'escalade
                  </h1>

                  <section className="cours__container">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2020/10/cours-escalade-e1608019916432.jpg" 
                              alt="photo d'escalade" 
                              className="cours__img"
                        />

                        <div className="cours__infos">
                              <h2>
                              Ecole de grimpe dès 7 ans
                              </h2>

                              <p>
                              INSCRIPTIONS COURS D'ESCALADE SAISON 2023-2024 dès le 15/06.
                              </p>
                              <p>
                              Cours d'escalade à Saint Germain en Laye encadrés par nos profs diplômés.
                              </p>

                              <div>
                                    <p>- mardi 17h: 7-11 ans</p>
                                    <p>- mardi 18h: 11-16 ans</p>
                                    <p>- mardi 19h: adultes</p>
                              </div>

                              <div>
                                    <p>- mercredi 14h-15h: 7-10 ans</p>
                                    <p>- mercredi 15h-16h: 11-12 ans</p>
                                    <p>- mercredi 16h-17h: 13-14 ans</p>
                                    <p>- mercredi 17h-18h30: 15-18 ans COMPLET</p>
                              </div>

                              <div>
                                    <p>- jeudi 17h30-18h30: 11-15 ans</p>
                                    <p>- jeudi 18h30-20h: compétition</p>
                              </div>

                              <div>
                                    <p>- samedi 8h30-9h30: 7-8 ans</p>
                                    <p>- samedi 9h30-10h30: 9-10 ans</p>
                                    <p>- samedi 10h30-11h30: 11-12 ans</p>
                                    <p>- samedi 11h30-12h30: 13-14 ans COMPLET</p>
                              </div>

                              <div>
                                    <p>- dimanche 9h30-10h30: 7-9 ans</p>
                                    <p>- dimanche 10h30-11h30: 10-11 ans</p>
                                    <p>- dimanche 11h30-12h30: 12-14 ans COMPLET</p>
                              </div>

                              <p>Renseignements au 01 34 51 10 19.</p>
                              <p>
                              Ouverture des inscriptions saison 2023/24: <a href="../../assets/doc/feuille-Inscription-2023-2024.doc" download>Télécharger le document ici</a> et le l'assurance complémentaire facultative  <a href="../../assets/doc/ba_interactif.pdf" download>ici</a>.
                              </p>
                              <p>
                              Cours adultes: mardi 19h - 450€/ an, supplément optionnel de 149€ pour un accès illimité à la grimpe en dehors des cours.
                              </p>
                              <p>
                              Chèques vacances, coupons sport, pass+ pour TOUS les collégiens et lycéens sans condition de ressources acceptés (<a href="https://www.passplus.fr/Beneficiaire/" target="_blank">https://www.passplus.fr/Beneficiaire</a>).
                              </p>
                        </div>
                  </section>

                  <section className="stages__container">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2020/09/escalade_le_port_marly.jpg" 
                              alt="photo d'un cour d'escalade"
                              className="stages__img" 
                        />

                        <div className="stages__infos">
                              <h2>
                              Stages pendant les vacances scolaires
                              </h2>
                              <div>
                                    <p>
                                    Nous proposons également des stages d'escalade pour les enfants et adolescents pendant les vacances scolaires à partir de 7 ans.
                                    </p>
                                    <p>
                                    Prochains stages: de 10h à 12h (7-10 ans) ou de 14h à 16h (10-15 ans).
                                    </p>
                                    <p>
                                    Vacances d'été à partir du 3 juillet 2023: 25€ la demi-journée - 100€ les 5 jours
                                    </p>
                              </div>
                              <p>Renseignements au 01 34 51 10 19.</p>
                              <p>
                              Parking gratuit, accès facile depuis le Pecq, Poissy, Marly le Roi, Bougival, Louveciennes, Port Marly, Achères, Conflans...
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default CoursEscalade;