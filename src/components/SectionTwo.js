import React from "react";

function SectionTwo(props) {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img
                className="img-fluid rounded-circle"
                src={props.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">My Github</h2>
              <p>
                Here is a link to my Github check out my repos and code. Click{" "}
                <a href="https://github.com/DEBAUCHERYFRED" target="_blank">
                  Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SectionTwo;
