import "./App.css";
import React, { useState } from "react";
import usePersist from "./persist";
import "bootstrap/dist/css/bootstrap.min.css";

function AlertMessage(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState(0);
  const [mydata, setMydata] = usePersist("mydata", null);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeMail = (e) => {
    setMail(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const onAction = (e) => {
    const data = {
      name: name,
      mail: mail,
      age: age,
    };
    setMydata(data);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
      <div className="form-group">
        <label htmlFor="" className="h6">
          Name
        </label>
        <input type="name" onChange={onChangeName} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="" className="h6">
          Mail
        </label>
        <input type="mail" onChange={onChangeMail} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="" className="h6">
          Age
        </label>
        <input type="number" onChange={onChangeAge} className="form-control" />
      </div>

      <button className="btn btn-primary" onClick={onAction}>
        Save it
      </button>
    </div>
  );
  // return (
  //   <div>
  //     <h1 className="bg-primary text-white display-4">React</h1>
  //     <div className="container">
  //       <h4 className="my-3">MEMO.</h4>
  //     </div>
  //   </div>
  // );
}

// base components

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  );
}

export default App;
