import React, { Fragment, useState } from "react";

export const SecondForm = () => {
    const [formDetails, setFormDetails] = useState({
        firstName: "",
        email: "",
        gender: "",
        dob: "",
        country: "",
    });

    const updateForm = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };

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
                        Second- onBlur
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
                        />
                        <label htmlFor="">Female</label>
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
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            onChange={updateForm}
                            className="inputSize"
                        />
                    </div>
                    <div className="button-Container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
