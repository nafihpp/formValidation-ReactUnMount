import React, { Fragment, useRef, useState } from "react";

export const ThirdForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const genderRef = useRef(null);
    const dobRef = useRef(null);
    const countryRef = useRef(null);

    const [formDetails, setFormDetails] = useState({
        firstName: "",
        email: "",
        gender: "",
        dob: "",
        country: "",
    });

    const [error, setError] = useState({
        firstNameError: "",
        emailError: "",
        genderError: "",
        dobError: "",
        countryError: "",
    });

    const fetchApi = (e) => {
        e.preventDefault();
        console.log("submit happend for the Third Form");

        setFormDetails({
            firstName: nameRef.current.value,
            email: emailRef.current.value,
            gender: genderRef.current.value,
            dob: dobRef.current.value,
            country: countryRef.current.value,
        });
    };

    console.log(formDetails, "==thirdForm+onSubmit");

    return (
        <Fragment>
            <div className="firstForm">
                <div>
                    <h1 style={{ fontWeight: "600", fontSize: "40px" }}>
                        Third- onSubmit
                    </h1>
                </div>
                <form onSubmit={fetchApi}>
                    <div className="formSingleContainer">
                        <label htmlFor="">Firstname</label>
                        <input
                            placeholder="Firstname"
                            type="text"
                            name="firstName"
                            className="inputSize"
                            ref={nameRef}
                        />
                        <span style={{ color: "red" }}>
                            <p>Error</p>
                        </span>
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Email</label>
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            className="inputSize"
                            ref={emailRef}
                        />
                        <span style={{ color: "red" }}>
                            <p>Error</p>
                        </span>
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Gender:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            ref={genderRef}
                        />

                        <label htmlFor="">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            ref={genderRef}
                            checked
                        />
                        <label htmlFor="">Female</label>
                        <span style={{ color: "red" }}>
                            <p>Error</p>
                        </span>
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Country</label>
                        <select
                            className="inputSize"
                            name="country"
                            ref={countryRef}
                        >
                            <option value="">Select</option>
                            <option value="UAE">UAE</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Oman">Oman</option>
                        </select>
                        <span style={{ color: "red" }}>
                            <p>Error</p>
                        </span>
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="inputSize"
                            ref={dobRef}
                        />
                        <span style={{ color: "red" }}>
                            <p>Error</p>
                        </span>
                    </div>
                    <div className="button-Container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
