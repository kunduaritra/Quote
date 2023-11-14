import React from "react";
import { useParams } from "react-router-dom";

const QuotesDetails = (props) => {
  const params = useParams();
  let quote;
  try {
    quote = props.quoteList.find((q) => q.id === params.quotesId);
  } catch (err) {
    return <p>Errorrrrrrrrrr</p>;
  }

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
        </div>
      </div>
    </div>
  );
};

export default QuotesDetails;
