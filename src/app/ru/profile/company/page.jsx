

export default function RuCompanyPage() {
    return (
        <div>
            <main className="main">
                <div className="_container main__container ">
                    <div className="main__student">
                        <div className="main__student-info">
                            <div className="main__cover">
                                <img src="./img/logo_company.png" alt=""/>
                            </div>
                            <div className="main_student_subtitle">
                                <div className="rows">
                                    <div className="row row__speciality ">
                                        <span className="">Название компании</span>
                                        <p>ИП “TROYA”</p>
                                    </div>
                                    <div className="row row__qualification">
                                        <span>БИН компании</span>
                                        <p>110524581947</p>
                                    </div>
                                    <div className="row row__phone">
                                        <span>Номер телефона </span>
                                        <p>+7 (707) 777 77 77</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button__redc">
                            <button className="redc">
                                <a href="#">Редактировать </a>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}