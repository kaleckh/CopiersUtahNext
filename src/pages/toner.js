import React, { useRef, useState } from "react";
import Header from "./Header";
import Head from "next/head";
import Axios from "axios";
import Image from "next/image";
import styles from "../styles/toner.module.css";
import Footer from "./Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRouter } from "next/router";

const Fix = () => {
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");
  const [valid_token, setValidToken] = useState([]);
  const [token, setToken] = useState();
  const captchaRef = useRef(null);
  const router = useRouter();
  const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key: "api-DC44EBDEE45411ED847EF23C91C88F4E",
        to: [`<info@copiersutah.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is${name}'s quote form. Her number is ${number}`,
        text_body: `${message}`,
        html_body: `<h1>${message}</h1>`,
        template_id: "5120871",
        template_data: {
          message: message,
          number: number,
          zip: zipCode,
          from: "Fix a machine page",
          name: name,
        },
      }),
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log("Response succeeded!");
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    });
  };
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = captchaRef.current.getValue();
    setToken(token);
    captchaRef.current.reset();

    if (token) {
      let valid_token = await verifyToken(token);
      setValidToken(valid_token);

      if (valid_token[0].success === true) {
        console.log("verified");
        setSuccessMsg("Hurray!! you have submitted the form");
      } else {
        console.log("not verified");
        setErrorMsg(" Sorry!! Verify you are not a bot");
      }
    }
  };
  const verifyToken = async (token) => {
    let APIResponse = [];

    try {
      let response = await Axios.post(`http://localhost:8000/verify-token`, {
        reCAPTCHA_TOKEN: token,
        Secret_Key: SECRET_KEY,
      });

      APIResponse.push(response["data"]);
      return APIResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div className={styles.main}>
      <div>
        <TawkMessengerReact
          onLoad={onLoad}
          propertyId="5abd4931d7591465c7090c65"
          widgetId="default"
          useRef={tawkMessengerRef}
        />
      </div>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <Image
            src="/static/logo.webp"
            alt="copier maintenance"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className={styles.mainBottom}>
        <div className={styles.leftSide}>
          <div className={styles.title}>Toner Brand</div>
          <div className={styles.row}>
            <input type="checkbox" />
            <div>Epson</div>
          </div>
          <div className={styles.row}>
            <input type="checkbox" />
            <div>Konika Minolta</div>
          </div>
          <div className={styles.row}>
            <input type="checkbox" />
            <div>HP</div>
          </div>
          <div className={styles.row}>
            <input type="checkbox" />
            <div>Lexmark</div>
          </div>
          <div className={styles.row}>
            <input type="checkbox" />
            <div>Xerox</div>
          </div>
          <div className={styles.title}>Toner Model</div>
          <input type="text" />
          <div style={{ padding: "10px" }}>or</div>
          <div className={styles.title}>Part Number</div>
          <input type="text" />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>
              Lexmark 234567 black Toner
            </div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "30px" }}>$</div>
                <div className={styles.price}>30.99</div>
              </div>
              <div className={styles.fifty}>
                <div className={styles.rowNumber}>
                  <div className={styles.numberContainer}>Model Number:</div>
                  <div>123456</div>
                </div>
                <div className={styles.rowNumber}>
                  <div className={styles.numberContainer}>Part Number:</div>
                  <div>123456</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </div>
    </div>
  );
};

export default Fix;
