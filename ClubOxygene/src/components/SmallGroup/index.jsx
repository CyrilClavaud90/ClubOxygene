import "./styles.css";

function SmallGroup() {
      return (
            <div className="small-group__container">
                  <h1 className="small-group__title">
                  Small Group Training
                  </h1>

                  <section className="entrainement__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2017/05/small-group-club-oxygene.jpg" 
                              alt="entrainement" 
                              className="entrainement__img" 
                        />

                        <div className="entrainement__infos">
                              <h2>
                              Boostez vos résultats, décuplez votre motivation
                              </h2>
                              <p>
                              Bénéficiez de 5 entrainements en petit groupe de 1 à 4 personnes maximum avec un coach dès votre inscription à la salle. Au delà, vous pouvez recharger votre forfait par pack de 10 séances au tarif de 50€.
                              </p>
                        </div>
                  </section>

                  <section className="circuit__section">
                        <img 
                              src="https://www.club-oxygene.com/wp-content/uploads/2017/05/small-group-circuit.jpg" 
                              alt="entrainement" 
                              className="circuit__img" 
                        />

                        <div className="circuit__infos">
                              <h2>
                              Circuit training
                              </h2>
                              <p>
                              Séance d'entraînement encadrée par un coach sur machine ou petit matériel. L'entraînement consiste à effectuer un plusieurs exercices les uns après les autres avec pas ou très peu de temps de récupération.
                              </p>
                              <p>
                              Apprenez le fonctionnement des machines vous permet de refaire le circuit de manière autonome lorsque vous revenez à la salle.
                              </p>
                        </div>
                  </section>
            </div>
      );
};

export default SmallGroup;