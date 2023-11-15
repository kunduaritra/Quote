import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const AllQuotes = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isShortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quoteList, isShortingAscending);

  const changeSortingHandler = () => {
    history.push("/quotes?sort=" + (isShortingAscending ? "desc" : "asc"));
  };
  return (
    <div className="container mx-auto mt-3">
      <h1 className="text-center">All Quotes</h1>
      <ul>
        <button className="btn btn-info mb-3" onClick={changeSortingHandler}>
          Sort {isShortingAscending ? "Descending" : "Ascending"}
        </button>
        <hr />
        {sortedQuotes.map((q) => (
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
