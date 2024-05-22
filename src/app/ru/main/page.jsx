

export default function RuMainPage(){

    return (
        <div>
            <div id="detailsBlock" className="sorting-block hidden">
                <div className="sorting-block__gpa">
                    <div className="sorting-block__text">Средний балл</div>
                    <div className="menu-section__row menu-section__row_sort">
                        <div className="menu-section__column menu-section__column_clear">
            <span className="menu-section__text menu-section__text_clear"
            >БЕЗ СОРТИРОВКИ</span
            >
                        </div>
                        <div className="menu-section__column">
                            <span className="menu-section__text">ПО ВОЗРАСТАНИЮ</span>
                        </div>
                        <div className="menu-section__column">
                            <span className="menu-section__text">ПО УБЫВАНИЮ</span>
                        </div>
                    </div>
                </div>
                <div className="sorting-block__dateofgraduation">
                    <div className="sorting-block__text">Дата Выпуска</div>
                    <div className="menu-section__row menu-section__row_sort">
                        <div className="menu-section__column menu-section__column_clear">
            <span className="menu-section__text menu-section__text_clear"
            >БЕЗ СОРТИРОВКИ</span
            >
                        </div>
                        <div className="menu-section__column">
                            <span className="menu-section__text">ПО ВОЗРАСТАНИЮ</span>
                        </div>
                        <div className="menu-section__column">
                            <span className="menu-section__text">ПО УБЫВАНИЮ</span>
                        </div>
                    </div>
                </div>
                <button className="sorting-block__btn">Применить</button>
            </div>

            <div className="wrapper">
                <main className="main">
                    <section className="image__section">
                        <div className="image__section__container _container">
                            <img src="./assets/main/ithub.png" alt=""/>
                        </div>
                    </section>
                    <section className="grid__section">
                        <div className="grid__section__container _container">
                            <div className="grid__filter__block filter__block">
                                <div className="filter__block__1">
                                    <h1 className="grid__section__header">Список выпускников</h1>
                                    <div className="filter__block__1__buttons__block">
                                        <button id="showDetailsBtn" className="filter__block__1__button">
                                            <img src="./assets/main/icons/arrows.svg" alt=""/>
                                            Сортировка
                                        </button>
                                        <button className="filter__btn">
                                            <img src="./assets/main/icons/tools.svg" alt=""/>
                                            Фильтры
                                        </button>
                                        <div className="modal-window-box">
                                            <div className="modal-window-box-container">
                                                <div className="modal_date_title">Год выпуска</div>
                                                <div className="modal_window_dates">
                                                    <div className="modal_window_dates_container">
                                                        <button className="dates_btn">Все</button>
                                                        <button className="dates_btn">2021г.</button>
                                                        <button className="dates_btn">2022г.</button>
                                                        <button className="dates_btn">2023г.</button>
                                                        <button className="dates_btn">2024г.</button>
                                                    </div>
                                                </div>
                                                <div className="modal_date_specialize">Специальность</div>
                                                <button className="modal_sort">Выбрать специальность</button>
                                            </div>
                                            <div className="modal_sort_window">
                                                <div className="modal_sort_window_container">
                                                    <div className="area">
                                                        06120200 – Системы информационной безопасности
                                                    </div>
                                                    <div className="area">
                                                        04130100 - Менеджмент (по отраслям и областям
                                                        применения)
                                                    </div>
                                                    <div className="area">
                                                        06130100 - Программное обеспечение (по видам)
                                                    </div>
                                                    <div className="area">
                                                        07130700 - Техническое обслуживание, ремонт и
                                                        эксплуатация электромеханического оборудования (по
                                                        видам и отраслям)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__section__menu menu-section">
                                <div className="menu-section__row">
                                    <div className="menu-section__column">
                                        <span className="menu-section__text">СОРТИРОВКА</span>
                                    </div>
                                    <div className="menu-section__column">
                                        <span className="menu-section__text">СПЕЦИАЛИЗАЦИЯ</span>
                                    </div>
                                    <div className="menu-section__column">
                                        <span className="menu-section__text">ГОД</span>
                                    </div>
                                    <div className="menu-section__column">
                                        <span className="menu-section__text">ГОРОД</span>
                                    </div>
                                    <div className="menu-section__column">
                                        <span className="menu-section__text">КОЛЛЕДЖ</span>
                                    </div>
                                    <div className="menu-section__column menu-section__column_clear">
                                        <img
                                            className="menu-section__icon"
                                            src="assets/main/icons/close.svg"
                                            alt=""
                                        />
                                        <span className="menu-section__text menu-section__text_clear"
                                        >ОЧИСТИТЬ</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div className="grid__section__cards cards">
                                <div className="cards__item">
                                    <div className="cards__item__container">
                                        <div className="cards__item__arrow">
                                            <img
                                                className="cards__item__arrow__img"
                                                src="/assets/images/arrow-up-right.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__image">
                                            <img
                                                className="cards__item__img"
                                                src="/assets/images/man.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>

                                <div className="cards__item">
                                    <div className="cards__item__container">
                                        <div className="cards__item__arrow">
                                            <img
                                                className="cards__item__arrow__img"
                                                src="/assets/images/arrow-up-right.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__image">
                                            <img
                                                className="cards__item__img"
                                                src="/assets/images/man.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>


                                <div className="cards__item">
                                    <div className="cards__item__container">
                                        <div className="cards__item__arrow">
                                            <img
                                                className="cards__item__arrow__img"
                                                src="/assets/images/arrow-up-right.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__image">
                                            <img
                                                className="cards__item__img"
                                                src="/assets/images/man.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>


                                <div className="cards__item">
                                    <div className="cards__item__container">
                                        <div className="cards__item__arrow">
                                            <img
                                                className="cards__item__arrow__img"
                                                src="/assets/images/arrow-up-right.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__image">
                                            <img
                                                className="cards__item__img"
                                                src="/assets/images/man.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="cards__item__text">Иванов Игорь Ильич</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>


            <script src={"/assets/scripts/mainpage.js"}></script>
        </div>
    )
}