import {useState} from "react";

function MainContent(props) {
    return (
        <div className="main_wrap">
            <Counter/>
        </div>
    );
}


function Counter(props) {
    const [counter, setCounter] = useState(0);
    function plus() {
        setCounter(counter + 1);
    }
    function minus() {
        if (counter>0)
        setCounter(counter - 1);
    }
    function reset() {
        setCounter(0);
    }

        return (
            <div>
                <div className="number">
                    {counter}
                </div>
                <div className="buttons">
                    <div className="btn_1" onClick={plus}>
                        <a href="#">Увеличить</a>
                    </div>
                    <div className="btn_2" onClick={minus}>
                        <a href="#">Уменьшить</a>
                    </div>
                    <div className="btn_3" onClick={reset}>
                        <a href="#">Сбросить</a>
                    </div>
                </div>
            </div>
        );
    }

export default MainContent;