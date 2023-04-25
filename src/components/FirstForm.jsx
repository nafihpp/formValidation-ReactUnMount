import React, { Fragment, useState } from "react";

export const FirstForm = () => {
    const [formDetails, setFormDetails] = useState({
        firstName: "",
        email: "",
        gender: "",
        dob: "",
        country: "",
    });
    const fetchApi = (e) => {
        e.preventDefault();
        console.log("submit happend for the First Form");
    };

    const updateForm = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    };
    console.log(formDetails, "firstForm+onBlur");
    return (
        <Fragment>
            <div className="firstForm">
                <div>
                    <h1 style={{ fontWeight: "600", fontSize: "40px" }}>
                        OnBlur-form
                    </h1>
                </div>
                <form onSubmit={(e) => fetchApi(e)}>
                    <div className="formSingleContainer">
                        <label htmlFor="">Firstname</label>
                        <input
                            placeholder="firstname"
                            type="text"
                            name="firstName"
                            className="inputSize"
                            onBlur={updateForm}
                        />
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Email</label>
                        <input
                            placeholder="email"
                            type="email"
                            name="email"
                            className="inputSize"
                            onBlur={updateForm}
                        />
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Gender:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
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
                    </div>
                    <div className="formSingleContainer">
                        <label htmlFor="">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="inputSize"
                            onBlur={updateForm}
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
