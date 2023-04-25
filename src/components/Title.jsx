import React, { useEffect } from "react";

function Title({ userName }) {
    useEffect(() => {
        let time = setInterval(() => {
            console.log(userName, "userName is Rendering");
        }, 1000);
        return () => {
            clearInterval(time);
        };
    }, []);
    return <h1>Title with {userName}</h1>;
}

export default Title;
