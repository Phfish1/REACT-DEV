import { Fragment } from "react/jsx-runtime";
import React, { useState } from "react";

interface Props {
  onFormSubmit: (e: React.FormEvent, form: Form) => void;
}

function DisplayMessages({ onFormSubmit }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    zipCode: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Fragment>
      <form
        className="py-4 d-flex justify-content-center"
        onSubmit={(e) => {
          onFormSubmit(e, form);
        }}
      >
        <div className="form-group row">
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="form-control py-2 px-4"
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="form-control py-2 px-4"
          />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="email"
            className="form-control py-2 px-4"
          />
          <input
            onChange={handleChange}
            type="text"
            name="age"
            placeholder="age"
            className="form-control py-2 px-4"
          />
          <input
            onChange={handleChange}
            type="text"
            name="zipCode"
            placeholder="zip-code"
            className="form-control py-2 px-4"
          />
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-lg">Submit</button>
          </div>
        </div>
      </form>
      <div>
        {Object.values(form).map((value, index) => (
          <p key={index}>{`${value}`}</p>
        ))}
      </div>
    </Fragment>
  );
}

export interface Form {
  firstName: string;
  lastName: string;
  age: string;
  zipCode: string;
}

export default DisplayMessages;
