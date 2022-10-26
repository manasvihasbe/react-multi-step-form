//Importing Dependencies
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { finalForm, formStage, } from "../store/rootSlice"; // Actions
import Loader from "react-loader-spinner";
import { labels1, labels2 } from "../components/Labels";

const FormPage3 = ({ submitButtonText, previousButton }) => {
  // Page 1 and Page 2 Store Datas in JSON format
  // const stateOutput = `JSON Data Form-Completed: ${JSON.stringify(
  //   state,
  //   null,
  //   2
  // )}`;
  //console.log(stateOutput); // output to console.log

  //redux
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentStage = state.FormStage; // for previous button
  const state1 = [...Object.values(state.FormPage1)];
  const state2 = [...Object.values(state.FormPage2)];
  const imgState = state.Pics;
  console.log(state1, state2);
  // handling Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    validateSubmit(); // Validating Input function call - Take photo/File Upload & Signature Inputs
    console.log("Files uploaded");
  };

  // Validating Function
  // If all datas of step 1 and step 2 and step are submitted
  // Dispatch State to Redux store

  const validateSubmit = () => {
    !state1
      ? setErrorObject("Complete Step1")
      : !state2
      ? setErrorObject("Complete Step2")     
      : dispatch(formStage(4)) && dispatch(finalForm(!imgState));
  };

  // Loader Function
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!isActive);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Photo capturing and Photo Uploding

  //Error Objects state
  const [errorObject, setErrorObject] = useState("");
  return (
    <>
      <Loader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
        type="Circles"
        color="#00BBFF"
        height={100}
        width={100}
        timeout={1200}
      ></Loader>

      {/* Error Object */}

      <div className="error-object">{errorObject}</div>

      <div className={` ${!isActive ? "dull" : ""}`}>
        <table className="table-view" style={{ display: "inline-block" }}>
          <tbody style={{ display: "inline-block", width: "75%" }}>
            {[0, 1, 2, 3, 4, 5].map(function (ele) {
              return (
                <tr key={ele} className="table-row">
                  <th className="table-units">{labels1[ele]}</th>
                  <td className="table-units">{state1[ele]}</td>
                  <th className="table-units">{labels2[ele]}</th>
                  <td className="table-units">{state2[ele]}</td>
                </tr>
              );
            })}
            <tr>
              <td className="table-units"></td>
              <td className="table-units">
                {previousButton && (
                  <input
                    id="back-button"
                    type="submit"
                    value={`Back`}
                    onClick={() => dispatch(formStage(currentStage - 1))}
                  />
                )}
              </td>
              <td className="table-units"></td>
              <td className="table-units">
                <input
                  type="submit"
                  value={submitButtonText || "Submit"}
                  onClick={(e) => handleSubmit(e)}
                />
              </td>
            </tr>
          </tbody>

       
        </table>
      </div>
      
    </>
  );
};
export default FormPage3;
