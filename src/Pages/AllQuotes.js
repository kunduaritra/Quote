import React from "react";
import { Link } from "react-router-dom";

const AllQuotes = (props) => {
  return (
    <div className="container mx-auto mt-3">
      <h1 className="text-center">All Quotes</h1>
      <ul>
        {props.quoteList.map((q) => (
          <li key={q.id} style={{ listStyle: "none" }}>
            <div className="card mb-3">
              <div className="card-header">
                <i>{q.author}</i>
              </div>
              <div className="card-body">
                <h5 className="card-title">{q.quote}</h5>
                <Link to={`/quotes/${q.id}`} className="btn btn-outline-dark">
                  View Full
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllQuotes;
