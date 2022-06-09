import React, { useState, useEffect } from "react";
import axios from "axios";

const ListQuery = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:8080/query");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((item) => {
    return (
      <div className="col-4 mb-4">
        <div
          className="card "
          key={item.id}
        >
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Name:</strong> {item.name}</li>
              <li className="list-group-item"><strong>Email:</strong> {item.email}</li>
              <li className="list-group-item"><strong>Destination:</strong> {item.destination}</li>
              <li className="list-group-item"><strong>No of Traveller:</strong> {item.noOfTraveller}</li>
              <li className="list-group-item"><strong>Budget:</strong> {item.budget}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>List Submission</h1>
      <div className="row">
        {renderedPosts}
      </div>
    </>

  );
};

export default ListQuery;
