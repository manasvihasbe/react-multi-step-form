import * as Yup from "yup";
//yup schema for form1 validation

// Indian Mobile Phone Regular Expression
const mobileNoRegEx =
  /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}?$/;
//valid mobile number formats
// 9775876662
// 0 9754845789
// 0-9778545896
// +91 9456211568
// 91 9857842356
// 919578965389

// land-line number validation
const landlineRegEx = /^[0-9]\d{2,4}-\d{6,8}$/;

//six digit postcode starting with non-zero character
const postcodeRegEx = /^[1-9][0-9]{5}$/;

//date/month/year
const dobRegEx = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[0-2])\1(?:19|20)\d\d$/;

export const schema1 = Yup.object().shape({
  name: Yup.string().required("Name  is required"),
  lastname: Yup.string().required("Last Name  is required"),
  dob: Yup.string().required("Date of birth  is required with pattern of DD/MM/YYYY")
  .matches(dobRegEx,"Invalid Date of birth, Please follow DD/MM/YYYY pattern"),
  
});
//yup schema for form2 validation

export const schema2 = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required")
    .email("Invalid email address"),
  mobileNo: Yup.string()
    .required("Mobile Number is required")
    .matches(mobileNoRegEx, "Invalid Mobile number format"),
});
