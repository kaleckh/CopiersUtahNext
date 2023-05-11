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
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://copiersutah.com/fix/" />
        <title>
          Copier Machine Repair Services | Get a Quote Today | Copiers Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah provides reliable and affordable copier machine repair services. Fill out our easy form to get a personalized quote and get your copier back up and running in no time."
        />
        <meta
          name="keywords"
          content="copier repair, copier service, copier maintenance, copier technician, get a quote, copiers Utah, copiers for sale, copier rentals, office copy machines, affordable copiers, copiers shop, copiers near me, copier sales, rent a copier machine, used copiers, used copiers near me, used copiers for sale, used copiers for rent, used copiers utah"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Copiers Utah",
      "image": "https://www.example.com/static/logo.webp",
      "telephone": "(801) 261 - 0510",
      "email": "info@copiersutah.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1234 Main St.",
        "addressLocality": "Salt Lake City",
        "addressRegion": "UT",
        "postalCode": "84101",
        "addressCountry": "US"
      },
      "url": "https://www.copiersutah.com/",
      "sameAs": [
        "https://www.facebook.com/copiersutah",
        "https://twitter.com/copiersutah",
        "https://www.linkedin.com/company/copiers-utah"
      ]
    }
  `,
          }}
        />
      </Head>
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
      <div style={{ display: "flex" }} className={styles.row}>
        <div className={styles.mainSpace}>
          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              className={styles.black}
            >
              Choose your toner brand that you need!
            </div>
          </div>
          <div className={styles.line}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div
              onClick={() => {
                router.push("/toner");
              }}
              className={styles.epson}
            ></div>
            <div className={styles.Konika}></div>
            <div className={styles.lexmark}></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div className={styles.kycotera}></div>
            <div className={styles.xerox}></div>
            <div className={styles.hp}></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <div className={styles.ricoh}></div>
            <div className={styles.sharp}></div>
            <div className={styles.canon}></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fix;
