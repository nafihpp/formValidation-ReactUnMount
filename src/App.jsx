import { Fragment, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import { FirstForm } from "./components/FirstForm";
import { SecondForm } from "./components/SecondForm";
import { ThirdForm } from "./components/ThirdForm";

function App() {
    const userName = "Nafih Puthen";
    const [toggle, setToggle] = useState(false);
    return (
        <Fragment>
            {toggle && <Title userName={userName} />}
            <div className="button-Container">
                <button
                    onClick={() => setToggle(!toggle)}
                    className="toggle-button"
                >
                    Show Title
                </button>
            </div>
            <div className="formsContainer">
                <FirstForm />
                <SecondForm />
                <ThirdForm />
            </div>
        </Fragment>
    );
}

export default App;
