import React, { Fragment } from "react";

const Comments = () => {
  return (
    <Fragment>
      <div className="text-center mt-5">
        <h2>
          <strong>User Comments</strong>
        </h2>
        <button className="btn btn-success">Add a Comment</button>
        <p>Comments...</p>
      </div>
    </Fragment>
  );
};

export default Comments;
