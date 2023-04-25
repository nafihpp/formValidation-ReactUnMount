import React, { Fragment, useState } from "react";

export const FirstForm = () => {
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
        console.log("submit happend for the First Form");
    };

    const updateForm = (e) => {
        if (e.target.value == "") {
            setError({
                ...error,
                [e.target.name + "Error"]: `Fill the ${e.target.name}`,
            });
        } else {
            setError({
                ...error,
                [e.target.name + "Error"]: "",
            });
        }
        if (e.target.name == "email" && e.target.value !== "") {
            if (e.target.value.includes("@") && e.target.value.includes(".")) {
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
    return (
        <Fragment>
            <div className="firstForm">
                <div>
                    <h1 style={{ fontWeight: "600", fontSize: "40px" }}>
                        OnBlur-form
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
                            onBlur={updateForm}
                        />
                        {error.firstNameError &&
                            error.firstNameError !== "" && (
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
                            onBlur={updateForm}
                        />
                        {error.emailError && error.emailError !== "" && (
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
                            defaultChecked
                            onBlur={updateForm}
                        />
                        <label htmlFor="">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="femail"
                            onBlur={updateForm}
                        />
                        <label htmlFor="">Female</label>
                        {error.genderError && error.genderError !== "" && (
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
                            onBlur={updateForm}
                        >
                            <option value="">Select</option>
                            <option value="UAE">UAE</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Oman">Oman</option>
                        </select>
                        {error.countryError && error.countryError !== "" && (
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
                            onBlur={updateForm}
                            className="inputSize"
                        />
                        {error.dobError && error.dobError !== "" && (
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
