import React from "react";
import { useState } from "react";
import { useHistory, Prompt } from "react-router-dom";

const NewQuotes = (props) => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredQuote, setEnteredQuote] = useState("");
  const [isEntering, setIsEntering] = useState(false);

  const history = useHistory();

  const authorInputHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const quoteInpurHandler = (event) => {
    setEnteredQuote(event.target.value);
  };

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (enteredAuthor !== "" && enteredQuote !== "") {
      props.quoteList.push({
        id: Math.random().toString(36),
        author: enteredAuthor,
        quote: enteredQuote,
      });
    }
    history.push("/quotes");

    setEnteredAuthor("");
    setEnteredQuote("");
  };
  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave ? All data you entered will be lost!"
        }
      />
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <h1 className="text-center">Add New Quotes</h1>
            <form onFocus={formFocusHandler} onSubmit={submitFormHandler}>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  onChange={authorInputHandler}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quote" className="form-label">
                  Quote
                </label>
                <textarea
                  id="quote"
                  className="form-control"
                  onChange={quoteInpurHandler}
                  rows="3"
                ></textarea>
              </div>
              <button
                onClick={finishEnteringHandler}
                className="btn btn-info mt-2"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewQuotes;
