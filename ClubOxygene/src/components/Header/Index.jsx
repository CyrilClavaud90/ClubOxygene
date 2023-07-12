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
                              <a href="#">
                                    <img src="https://www.club-oxygene.com/wp-content/uploads/2017/03/Logo-good-size.png" alt="club oxygène logo" />
                              </a>
                        </div>
                        
                        <div className="nav__menu">
                              <div className="nav__logo menu__logo">
                                    <a href="#">
                                          <img src="https://www.club-oxygene.com/wp-content/uploads/2017/03/Logo-good-size.png" alt="club oxygène logo" />
                                    </a>
                              </div>

                              <ul className="nav__list">
                                    <li className="nav__item">
                                          <a href="" className="nav__link link__escalade">Escalade de bloc</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link_cardio">Cardio / Muscu</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link__cours-collectifs">Cours collectifs</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link__small">Small group</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link__coachs">Coachs</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link__tarifs">Tarifs</a>
                                    </li>

                                    <li className="nav__item">
                                          <a href="" className="nav__link link__cours-essai">Cours d'essai</a>
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