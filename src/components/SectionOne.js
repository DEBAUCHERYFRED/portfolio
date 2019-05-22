import React from "react";

function SectionOne(props) {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img
                className="img-fluid rounded-circle"
                src={props.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">News App</h2>
              <p>
                In this project I used
                <a href="https://newsapi.org/" target="_blank">
                  {" "}
                  News API
                </a>
                , React JS, JSX, HTML5, CSS3, Javascript, ES6 and Heroku to
                create and application that allows the user to see the top ten
                News headlines in the United States. Click
                <a
                  href="https://still-dusk-36964.herokuapp.com/"
                  target="_blank"
                >
                  {" "}
                  here
                </a>{" "}
                to check it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionOne;
