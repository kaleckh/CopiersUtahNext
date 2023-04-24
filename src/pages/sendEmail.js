import { useState } from "react";

const sendEmail = () => {
  const [name, setName] = useState("this is the etst name");
  const [email, setEmail] = useState("this is the test email");
  const [from, setFrom] = useState("kaleckh@gmail.com");
  const [message, setMessage] = useState("this is the test message");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      from
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    });
  };
  console.log(process.env.PASSWORD  )
  return <div>
    <button onClick={(e) => {handleSubmit(e)}}>send it</button>
  </div>;
};
export default sendEmail;
