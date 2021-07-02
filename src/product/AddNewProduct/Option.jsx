import "./Option.css";
import React, { useState } from "react";
import OptionList from "./OptionList";
import { useEffect } from "react";

const Option = (props) => {
  const [optionName, setOptionName] = useState();
  const [optionValue, setOptionValue] = useState();
  const [singleOptionValue, setSingleOptionValue] = useState([]);
  const [optionList, setOptionList] = useState([]);

  const handleChangeName = (e) => {
    setOptionName(e.target.value);
  };

  const handleChangeValue = (e) => {
    setOptionValue(e.target.value);
  };

  const clickAddToList = () => {
    // console.log(
    //   `optionName: ${props.product2.optionName} & optionValue: ${props.product2.optionValue}`
    // );
    // const valueSplit = props.product2.optionValue.split(",");
    // setSingleOptionValue(Object.keys(valueSplit).map((key) => valueSplit[key]));
    if (optionList.length === 0) {
      setOptionList({
        optionName: optionName,
        optionValue: optionValue,
      });
      setOptionName("");
      setOptionValue("");
    } else if (optionList.length > 0) {
      optionList.push({
        optionName: optionName,
        optionValue: optionValue,
      });
    }

    console.log(optionList);
  };

  const clickDeleteOption = () => {
    setSingleOptionValue([]);
    setOptionValue("");
    setOptionName("");
  };

  useEffect(() => {
    //console.log(singleOptionValue);
  }, [singleOptionValue]);

  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row" style={{ marginBottom: "30px" }}>
          <h2>옵션</h2>
        </div>
        <div className="row">
          <div className="col-2">
            <h5>옵션 입력</h5>
          </div>
          <div className="col-4">
            <h5>옵션명</h5>
          </div>
          <div className="col-5">
            <h5>옵션값</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              name="optionName"
              id="optionName"
              value={optionName}
              onChange={(e) => {
                handleChangeName(e);
                props.handleChange2(e);
              }}
            ></input>
          </div>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              name="optionValue"
              id="optionValue"
              value={optionValue}
              onChange={(e) => {
                handleChangeValue(e);
                props.handleChange2(e);
              }}
            ></input>
          </div>
        </div>

        <div className="row ">
          <div className="col-2"></div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-primary btn-block"
              id="btnAddToList"
              onClick={clickAddToList}
            >
              ▼ &nbsp; 옵션목록으로 적용
            </button>
          </div>
          <div className="col-5"></div>
        </div>

        <div className="row optionListHeader">
          <div className="col-5">
            <h5>옵션 목록 (총 {singleOptionValue.length} 개)</h5>
            <button
              type="button"
              className="btn btn-secondary"
              id="deleteOption"
              onClick={clickDeleteOption}
            >
              삭제
            </button>
          </div>
          <OptionList
            optionName={optionName}
            optionValue={optionValue}
            optionList={optionList}
            handleChange2={props.handleChange2}
            price={props.product2.price}
            stockQuantity={props.product2.stockQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default Option;
