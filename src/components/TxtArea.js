import React, { useState } from "react";

export default function TxtArea() {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();

  const handleChange = (event) => {
    console.log("changed");
    setText1(event.target.value);
  };
  const handleClick = () => {
    let newtext = text1.toUpperCase();
    setText1(newtext);
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };
  const handleClick2 = () => {
    let newtext = text2.toLowerCase();
    setText2(newtext);
  };

  const handleClick3 = () => {
    setText1("");
    setText2("");
  };

  return (
    <>
      <div class="d-md-flex justify-content-md-end">
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={handleClick3}
        >
          Reset
        </button>
      </div>
      <div class="container">
        <div className="form-floating my-4 p-3">
          <textarea
            className="form-control"
            value={text1}
            onChange={handleChange}
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">
            Enter text to convert in Upper case:{" "}
          </label>
        </div>
        <div class="d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-secondary" onClick={handleClick}>
            Convert
          </button>
        </div>
      </div>
      <div class="container">
        <div className="form-floating my-4 p-3">
          <textarea
            className="form-control"
            value={text2}
            onChange={handleChange2}
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">
            Enter text to convert in Lower case:{" "}
          </label>
        </div>
        <div class="d-md-flex justify-content-md-center">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handleClick2}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}
