import React, { useState } from "react";
import axios from "axios";

const PostQuery = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [destination, setDestination] = useState('')
  const [noOfTraveller, setNoOfTraveller] = useState(1)
  const [budget, setBudget] = useState(0)

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = { name, email, destination, noOfTraveller, budget };
    if (name && email && destination && noOfTraveller && budget) {
      await axios.post("http://localhost:8080/query", payload);
    }
  };

  return (
    <div>
      <h1>Query Form </h1>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group mb-3">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label className="form-label">Destination</label>
              <select id="inputState" className="form-select"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}>
                <option >Choose...</option>
                <option>India</option>
                <option>Africa</option>
                <option>Europe</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group mb-3">
              <label className="form-label">No of Traveller</label>
              <input
                value={noOfTraveller}
                onChange={(e) => setNoOfTraveller(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-3">
              <label className="form-label">Budget</label>
              <input
                value={budget}
                type="number"
                onChange={(e) => setBudget(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostQuery;
