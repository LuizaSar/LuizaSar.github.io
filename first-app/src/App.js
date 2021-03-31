import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App (props) {
    return (
        <div className="container">
        <header className="header">
            <Header />
        </header>
            <section className="main">
            <MainContent/>
            </section>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
}

export  default App

