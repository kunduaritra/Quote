import React from "react";
import { useParams, Link, Route } from "react-router-dom";
import Comments from "./Comments";

const QuotesDetails = (props) => {
  const params = useParams();
  let quote;
  quote = props.quoteList.find((q) => q.id === params.quotesId);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-white bg-dark mb-3 position-relative">
            <div className="card-body">
              <h3 className="card-title text-center mb-5">{quote.quote}</h3>
              <p className="position-absolute bottom-0 text-white">
                <i>{quote.author}</i>
              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <Route path={`/quotes/${params.quotesId}`} exact>
              <Link
                to={`/quotes/${params.quotesId}/comments`}
                style={{ textDecoration: "none" }}
              >
                Load Comments
              </Link>
            </Route>
          </div>
          <Route path={`/quotes/${params.quotesId}/comments`}>
            <Comments />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default QuotesDetails;
