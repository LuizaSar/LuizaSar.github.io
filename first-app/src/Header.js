import image_1 from "./images/logo-top.svg"

function Header(props) {
    return (
        <div>
        <div className="header_wrap">
            <Logo/>
            <Menu/>
        </div>
         <div className="border"/>
        </div>
    );
}

function Logo(props) {
    return (
        <div className="logo">
            <img src={image_1} alt=""/>
        </div>
    );
}


function Menu(props) {
    return (
        <div className="menu">
            <ul className="menu_list">
                <li>Главная</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
        </div>
    );
}



export default Header;