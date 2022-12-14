import React, { useState } from "react";
import { JsonToTable } from "react-json-to-table";

function FormPage4() {
  const [inputList, setInputList] = useState([{ addressLineOne: "", addressLineTwo: "", addressLineThree: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { addressLineOne: "", addressLineTwo: "", addressLineThree: "" }]);
  };
  console.log(inputList, 'address')
  return (
    <div className="FormPage4" style={{ marginLeft: '45%', marginTop: '5%' }}>

      {inputList.map((x, i) => {
        return (
          <div className="box">
            <br />

            <input
              name="addressLineOne"
              placeholder="Address Line One"
              value={x.addressLineOne}
              onChange={e => handleInputChange(e, i)}
            /> <br /><br />
            <input
              className="ml10"
              name="addressLineTwo"
              placeholder="Address Line Two"
              value={x.addressLineTwo}
              onChange={e => handleInputChange(e, i)}
            /> <br /><br />
            <input
              className="ml10"
              name="addressLineThree"
              placeholder="Address Line Three"
              value={x.addressLineThree}
              onChange={e => handleInputChange(e, i)}
            /> <br /><br />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove Address</button>} &nbsp;&nbsp;
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add Another Address</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>
        <table style={{ border: '1px solid black' }}>
          <thead >
            <tr style={{ border: '1px solid black' }}>
              <th style={{ border: '1px solid black' }}>Address one</th>
              <th style={{ border: '1px solid black' }}>Address two </th>
              <th style={{ border: '1px solid black' }}>Address three</th>
            </tr>
          </thead>
          <tbody>
            {inputList.map((x, i) => {
              // { JSON.stringify(inputList) }
              return (<tr>
                <td style={{ border: '1px solid black' }}>{x.addressLineOne}</td>
                <td style={{ border: '1px solid black' }}>{x.addressLineTwo}</td>
                <td style={{ border: '1px solid black' }}>{x.addressLineThree}</td>
              </tr>)
            })}
          </tbody>
        </table>


      </div>

    </div>
  );
}

export default FormPage4;

