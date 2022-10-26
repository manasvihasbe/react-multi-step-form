//Importing dependencies
import React from "react";
import RenderHeader from "../components/RenderHeader";
import RenderStepNavigation from "../components/RenderStepNavigation";
import FormPage1 from "../forms/FormPage1";
import LazyLoad from "react-lazyload";

const Page1Container = () => {
  return (
    <React.Fragment>
      <RenderHeader headerTitle={"Enter Your Personal Details"} />

      <main>

        <RenderStepNavigation />

        <section>
          <div className="page-wrapper">
            <div className="form-container">
              <LazyLoad once>
                <FormPage1
                  submitButtonText={"Next"} // submit next button display text
                  previousButton={false} // show/hide previous button
                />
              </LazyLoad>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};
export default Page1Container;
