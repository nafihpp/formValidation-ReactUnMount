import React, { Fragment, useState } from "react";

export const SecondForm = () => {
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
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const updateForm = (e) => {
        if (e.target.value == "") {
            setError({
                ...error,
                [e.target.name + "Error"]: `Fill the ${e.target.name}`,
            });
        }
        if (e.target.name == "email") {
            if (isValidEmail(e.target.value)) {
                setError({
                    ...error,
                    [e.target.name + "Error"]: "",
                });
            } else {
                setError({
                    ...error,
                    [e.target.name + "Error"]: `${e.target.name} not valid`,
                });
            }
        }

        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };

    console.log(error);

    const fetchApi = (e) => {
        e.preventDefault();
        console.log("submit happend for the second Form");
    };

    console.log(formDetails, "==secondForm+OnChange");
    return (
        <Fragment>
            <div className="firstForm">
                <div>
                    <h1 style={{ fontWeight: "600", fontSize: "40px" }}>
                        Second- onChange
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
                            onChange={updateForm}
                        />
                        {error.firstNameError && (
                            <span style={{ color: "red" }}>
                                <p>{error.firstNameError}</p>
                            </span>
                        )}
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Email</label>
                        <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            className="inputSize"
                            onChange={updateForm}
                        />
                        {error.emailError && (
                            <span style={{ color: "red" }}>
                                <p>{error.emailError}</p>
                            </span>
                        )}
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Gender:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={updateForm}
                        />
                        <label htmlFor="">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="femail"
                            onChange={updateForm}
                            checked
                        />
                        <label htmlFor="">Female</label>
                        {error.genderError && (
                            <span style={{ color: "red" }}>
                                <p>{error.genderError}</p>
                            </span>
                        )}
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Country</label>
                        <select
                            className="inputSize"
                            name="country"
                            onChange={updateForm}
                        >
                            <option value="">Select</option>
                            <option value="UAE">UAE</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Oman">Oman</option>
                        </select>
                        {error.countryError && (
                            <span style={{ color: "red" }}>
                                <p>{error.countryError}</p>
                            </span>
                        )}
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            onChange={updateForm}
                            className="inputSize"
                        />
                        {error.dobError && (
                            <span style={{ color: "red" }}>
                                <p>{error.dobError}</p>
                            </span>
                        )}
                    </div>
                    <div className="button-Container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
