import React from "react";
import "../assets/scss/success.scss";
import RenderHeader from "../components/RenderHeader";
import { useSelector } from "react-redux";
import FormPage4 from '../forms/FormPage4'
import { Link } from "react-router-dom";

const Page4Container = () => {
  const state = useSelector((state) => state);

  console.log(state);
  return (
    <>
      <RenderHeader headerTitle={"Address"} />
      <div className="success-wrapper">
        <div className="success-box">
          {/* Success - GreenTick Image */}

          <h1 className="title">Do you have a Previous Address?</h1>
          <input
            className="final-submit"
            type="submit"
            // Reload App
            onClick={() => window.location.reload()}
            value="NO"
          />
          <button style={{ marginLeft: '48%', marginTop: '2%' }} >
            <Link to="/FormPage4" style={{ textDecoration: 'none' }} >YES</Link>
          </button>



        </div>
      </div>
    </>
  );
};
export default Page4Container;
