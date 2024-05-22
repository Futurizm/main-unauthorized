

export default function GraduateIdPage(){

    return (
        <div className="wrapper">
            <main className="main">
                <div className="_container main__container ">
                    <div className="main__student">
                        <div className="main__cover">
                            <img src="/assets/images/main-img.png" alt=""/>
                        </div>
                        <div className="main__student-info">
                            <h1 className="main__student_title">Иванов Иван Иванович</h1>
                            <div className="main_student_subtitle">
                                <div className="rows">
                                    <div className="row row__speciality ">
                                        <span className="no-select">Специальность</span>
                                        <p>1305000 Программное обеспечение</p>
                                    </div>
                                    <div className="row row__qualification">
                                        <span className="no-select">Квалификация</span>
                                        <p>130502 3 “Техник-программист”</p>
                                    </div>
                                    <div className="row row__phone">
                                        <span className="no-select">Номер телефона </span>
                                        <p>+7 (707) 777 77 77</p>
                                    </div>
                                    <div className="row row__mail">
                                        <span className="no-select">Почта </span>
                                        <p>ivanivanov@mail.ru</p>
                                    </div>
                                    <div className="row row__dateofbirth">
                                        <span className="no-select">Дата рождения </span>
                                        <p>1 сентября 2000 г.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="_container info-wrapper">
                    <div className="info college">
                        <div className="info__img">
                            <img src="/assets/images/college-img.png" alt=""/>
                        </div>

                        <div className="info__field__section">
                            <div className="info__field">
                                <p className="no-select">Место обучения</p>
                                <p>Колледж Информационных технологий</p>
                            </div>

                            <div className="info__field">
                                <p className="no-select">Адрес</p>
                                <p>г.Павлодар, ул. Лермонтова 93</p>
                            </div>
                        </div>
                    </div>

                    <div className="info more">
                        <div className="info__field">
                            <p className="no-select">Дата поступления</p>
                            <p>1 сентября 2019г.</p>
                        </div>

                        <div className="info__field">
                            <p className="no-select">Дата выпуска</p>
                            <p>9 июня 2023г.</p>
                        </div>

                        <div className="info__field">
                            <p className="no-select">Язык обучения</p>
                            <p>Русский</p>
                        </div>

                        <div className="info__field">
                            <p className="no-select">Средний балл</p>
                            <p>4.5</p>
                        </div>

                        <div className="info__field">
                            <p className="no-select">Место практики</p>
                            <p>ИП “TROYA”</p>
                        </div>
                    </div>
                </div>

                <section className="section">
                    <div className="_container section__container">
                        <div className="section__documents">
                            <h1 className="section__title">Документы</h1>
                        </div>
                        <div className="section__accardion">
                            <div className="accordion">
                                <input type="checkbox" id="accordion-toggle" className="accordion__input"/>
                                <label htmlFor="accordion-toggle" className="label">
                                    <h1 className="accordion__title">Диплом</h1>
                                    <img className="accordion__icon" src="/assets/images/arrow.svg" alt="arrow"/>
                                </label>
                                <div className="content">
                                    <img src="/assets/images/skills-img.png" alt="skills"/>
                                </div>
                            </div>
                            <div className="accordion">
                                <input type="checkbox" id="accordion-toggle-2" className="accordion__input"/>
                                <label htmlFor="accordion-toggle-2" className="label">
                                    <h1 className="accordion__title">Диплом</h1>
                                    <img className="accordion__icon" src="/assets/images/arrow.svg" alt="arrow"/>
                                </label>
                                <div className="content">
                                    <img src="/assets/images/skills-img.png" alt="skills"/>
                                </div>
                            </div>
                            <div className="accordion">
                                <input type="checkbox" id="accordion-toggle-3" className="accordion__input"/>
                                <label htmlFor="accordion-toggle-3" className="label">
                                    <h1 className="accordion__title">Диплом</h1>
                                    <img className="accordion__icon" src="/assets/images/arrow.svg" alt="arrow"/>
                                </label>
                                <div className="content">
                                    <img src="/assets/images/skills-img.png" alt="skills"/>
                                </div>
                            </div>
                            <div className="accordion">
                                <input type="checkbox" id="accordion-toggle-4" className="accordion__input"/>
                                <label htmlFor="accordion-toggle-4" className="label">
                                    <h1 className="accordion__title">Диплом</h1>
                                    <img className="accordion__icon" src="/assets/images/arrow.svg" alt="arrow"/>
                                </label>
                                <div className="content">
                                    <img src="/assets/images/skills-img.png" alt="skills"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <section className="characteristic__section">
                <div className="characteristic__section__container _container">
                    <h2 className="characteristic__title">Характеристика</h2>
                    <div className="characteristic">
                        <p className="characteristic__subtitle no-select">Студент-практикант Ф.И.О. в период с
                            29.06.2015 г. по 12.07.2015
                            г.
                            проходил учебно-ознакомительную практику в магазине ООО «Центральное», расположенном по
                            адресу: г.
                            Южно-Сахалинск, ул. Ленина 218 в качестве помощника руководителя.
                            В течение всего периода практики, Ф.И.О. внимательно и ответственно относился к выполняемой
                            работе. Изучал
                            методы управления и основные методы мотивации персонала, должностные обязанности персонала,
                            пробовал
                            проводить анализ хозяйственной деятельности организации за последние три года, ознакомился с
                            порядком
                            ведения различных распорядительных документов, учетной документации, изучал организационную
                            структуру
                            предприятия, участвовал в различной повседневной работе.
                            Всю порученную работу выполнял добросовестно и в срок. Стремился приобретать новые знания,
                            чтобы быть ещё
                            более полезным на месте практики. Неоднократно оказывал помощь сотрудникам организации.
                            Руководство
                            организации оценивают работу Ф.И.О. на «отлично».</p>
                    </div>
                </div>
            </section>
            <footer className="footer"></footer>
        </div>
    )
}