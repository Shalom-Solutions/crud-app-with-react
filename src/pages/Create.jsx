import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(setName(),
    setEmail());
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="shadow w-50 bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Add new user</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onchange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="mt-3">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 my-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
