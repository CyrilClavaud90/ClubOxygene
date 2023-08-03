import { Link, NavLink } from 'react-router-dom';
import './styles.css';

function Header() {

      const openMenu = () => {
            const menu = document.querySelector('.nav__menu');
            menu.classList.add('menu__open');
      };

      const closeMenu = () => {
            const menu = document.querySelector('.nav__menu');
            menu.classList.remove('menu__open');
      };

      return (
            <header className="header">
                  <nav className="nav__container">
                        <div className="nav__logo">
                              <Link to={ '/' }>
                                    <img src="https://www.club-oxygene.com/wp-content/uploads/2017/03/Logo-good-size.png" alt="club oxygène logo" />
                              </Link>
                        </div>
                        
                        <div className="nav__menu">
                              <div className="nav__logo menu__logo">
                                    <NavLink to={ '/' } onClick={closeMenu}>
                                          <img src="https://www.club-oxygene.com/wp-content/uploads/2017/03/Logo-good-size.png" alt="club oxygène logo" />
                                    </NavLink>
                              </div>

                              <ul className="nav__list">
                                    <li className="nav__item">
                                          <NavLink to={'/escalade'} className="nav__link link__escalade" onClick={closeMenu}>
                                                Escalade de bloc
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <NavLink to={ '/cardiomuscu' } className="nav__link link_cardio" onClick={closeMenu}>
                                                Cardio / Muscu
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <NavLink to={"/courscollectifs"} className="nav__link link__cours-collectifs" onClick={closeMenu}>
                                                Cours collectifs
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <NavLink to={"/smallgroup"} className="nav__link link__small" onClick={closeMenu}>
                                                Small group
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <NavLink to={ '/coachs' } className="nav__link link__coachs" onClick={closeMenu}>
                                                Coachs
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <NavLink to={'/tarifs'} className="nav__link link__tarifs" onClick={closeMenu}>
                                                Tarifs
                                          </NavLink>
                                    </li>

                                    <li className="nav__item">
                                          <Link to={"/contact"} className="nav__link link__cours-essai" onClick={closeMenu}>
                                                Contact
                                          </Link>
                                    </li>
                              </ul>
                              <i className="uil uil-times nav__close" onClick={closeMenu}></i>
                        </div>

                        <div className="nav__toggle" onClick={openMenu}>
                              <i className="uil uil-bars nav__open"></i>
                        </div>
                  </nav>
            </header>
      )
};

export default Header;