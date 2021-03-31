import image_2 from "./images/logo-bottom.svg"

function Footer(props) {
    return(
    <div className="footer_wrap">
        <FooterLogo/>
        <FooterMenu/>
        <Copyright/>
    </div>
    )
}


function FooterLogo(props) {
    return (
        <div className="logo_bottom">
            <img src={image_2} alt=""/>
        </div>
    );
}


function FooterMenu(props) {
    return (
        <div>
        <ul className="menu_bottom">
            <li>Партнерам</li>
            <li>Разработчикам</li>
            <li>Вакансии</li>
        </ul>
        </div>
    );
}


function Copyright(props) {
    return (
        <div className="copyright">
            ООО “интукод”, 2020г.
        </div>
    );
}



export default Footer;