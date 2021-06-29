import React from "react";

const Option = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="row">
          <h2>옵션</h2>
        </div>
        <div className="row">
          <h5>옵션 입력</h5>
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a>
              <a class="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
