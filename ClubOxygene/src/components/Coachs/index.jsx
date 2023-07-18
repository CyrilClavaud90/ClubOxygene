import { Link } from 'react-router-dom';
import { coachs } from '../../assets/data';
import './styles.css';

function Coachs() {
      return (
            <div className="coachs__container">
                  <h1 className="coachs__title">Coachs</h1>

                  <ul className="coachs__list">
                        {
                              coachs.map((person) => (
                                    <li key={ person.id } className="person__card">
                                          <Link to={`/coach/${person.id}`} >
                                                <img src={ person.photo } alt={ `Photo de ${person.name}` } className="person__image" />
                                                <div className="person__info">
                                                      <h2 className="person__title" >{ person.name }</h2>
                                                      <p className="person__presentation" >{ person.presentation[0] }</p>
                                                </div>
                                          </Link>
                                    </li>
                              ))
                        }
                  </ul>
            </div>
      );
};

export default Coachs;