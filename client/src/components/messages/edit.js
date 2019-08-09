import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/messages/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      "/api/messages/update",
      {
        id: props.match.params.id,
        message: {
         
        }
      })
      .then(() => setRedirect(true))
      .catch(err => console.err(err));

  }

  function handleInputChange(event) {
    event.persist();
    const {name, value} = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) {
    return <Redirect to="/messages" />;
  }

  return (
    <div className="container">
      <header>
        <h1>Edit</h1>
      </header>
      <form onSubmit={handleSubmit}>
           {/* {if message} */}
          <div className="form-group text">
            <textarea id="message-box" className="form-control.message" name="messageContent" onChange={handleInputChange} />
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>  
        </form>
    </div>
  );
}

export default Edit;