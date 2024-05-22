// import "/assets/style/style.css";
import '/public/assets/css/style.css';
import '/public/assets/css/header.css';
import '/public/assets/css/unauthorized.css';
import '/public/assets/css/filter_sorting_authorized.css';
import '/public/assets/css/company.css';
import '/public/assets/css/college.css';

export default function AuthLayout({ children }) {
    return (
        <div>


            <header className="header">
                <div className="header___container header__container">
                    <div className="header__img">
                        <a href="#">
                            <img className="header__signup__img" src={'/assets/images/logo.svg'} alt="logo"/>
                        </a>
                    </div>
                    <div className="header__nav">
                        <div className="header__select__language">
                            <a href="/ru/welcome" className={"active"} id="Ru">Ru</a>
                            <a href="/kz/welcome" className={""} id="Kz">Kz</a>
                        </div>
                        <div className="header__person">
                            <a href="#" className="header__person-link">
                                <img src="/assets/images/person.svg" alt=""/>
                                <p className="header__person-title">Профиль</p>
                            </a>
                        </div>
                        <div className="header__sign-button">
                            <a href="#">Выйти</a>
                        </div>
                    </div>

                </div>
            </header>

            {children}


            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

            <script src="/assets/scripts/unauthorized.js"></script>

        </div>
    );
}

