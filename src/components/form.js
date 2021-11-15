import React from "react";
import axios from 'axios';
import BACKEND_URL from "../config";

const ContactForm = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const onChangeName = (e) => {
    const value= e.target.value;
    setState({
      ...state,
      name: value
    });
  };
  const onChangeEmail = (e) => {
    const value= e.target.value;
    setState({
      ...state,
      email: value
    });
  };
  const onChangeSubject = (e) => {
    const value= e.target.value;
    setState({
      ...state,
      subject: value
    });
  };
  const onChangeMessage = (e) => {
    const value= e.target.value;
    setState({
      ...state,
      message: value
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
    .post(BACKEND_URL + "/Contact/add")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(state);
  };

  return (

      <div className="contact-form">
        <div className="form-box-2 solid">
          <form action="/" method="POST" onSubmit={onSubmit}>
            <h1 className="contact-text"> Contact me!</h1>
            <input
              type="text"
              name="name"
              className="name-box"
              onChange={onChangeName}
              required
              placeholder="Name"
              value={state.name}
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              className="email-box"
              onChange={onChangeEmail}
              required
              placeholder="Email"
              value={state.email}
            />
            <br />
            <br />
            <input
              type="text"
              name="subject"
              className="subject-box"
              onChange={onChangeSubject}
              required
              placeholder="Subject"
              value={state.subject}
            />
            <br />
            <br />
            <textarea
              type="text"
              name="message"
              className="message-box"
              onChange={onChangeMessage}
              required
              placeholder="Message"
              value={state.message}
            />
            <br />
            <br />
            <input
              type="submit"
              value="Send"
              className="contact-btn"
            />
          </form>
        </div>
      </div>

  );
};

export default ContactForm;