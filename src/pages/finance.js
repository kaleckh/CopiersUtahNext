import React, { useState, useRef } from "react";
import Header from "./Header";
import Image from "next/image";
import Head from "next/head";
import Form from "./Form";

import styles from "../styles/Finance.module.css";
import Footer from "./Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ReCAPTCHA from "react-google-recaptcha";

const Finance = () => {
  const [toggle, setToggle] = useState(false);
  const [quoteToggle, setQuoteToggle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const tawkMessengerRef = useRef();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const captchaRef = useRef(null);

  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    
    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "api_key":"api-DC44EBDEE45411ED847EF23C91C88F4E",
        "to": [`<info@copiersutah.com>`],
        "sender": "<info@copiersutah.com>",
        "subject": `This is${name}'s quote form. Her number is ${number}`,
        "text_body": `${message}`,
        "html_body": `<h1>${message}</h1>`,
        "template_id": "5120871",
        "template_data": {
          "message": message,
          "number": number,
          "name": name
      }
      })
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

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };

  console.log(
    process.env.REACT_APP_RECAPTCHA_SITE_KEY,
    "this is the env without quotes"
  );
  return (
    <div className={styles.main}>
      <Head>
        <title>
          Financing and Buying Copiers | Get a Quote Today | Copiers Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah offers a range of financing options for buying copiers. Fill out our easy form to get a personalized quote and learn more about our financing options."
        />
        <meta
          name="keywords"
          content="copier financing, copier buying, office copiers, copier quote, copiers Utah"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Financing and Buying Copiers",
              description:
                "Copiers Utah offers a range of financing options for buying copiers.",
              brand: "Copiers Utah",
              url: "https://copiersutah.com/finance",
              image: "https://copiersutah.com/static/logo.png",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "LocalBusiness",
                  name: "Copiers Utah",
                  telephone: "(801) 261-0510",
                  email: "info@copiersutah.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "554 W 8360 S",
                    addressLocality: "Sandy",
                    addressRegion: "Utah",
                    postalCode: "84070",
                    addressCountry: "USA",
                  },
                },
              },
            }),
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
            src="/static/logo.png"
            alt="man using a copier"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div id="quote" className={styles.secondSection}>
        <div className={styles.eighty}>
          <h1 className={styles.title}>
            Copiers Utah offers short and long term copier rentals.
          </h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.woman} />
            </div>
            {toggle ? (
              <div>
                <div className={styles.container}>
                  <div className={styles.black}>Get Your free Quote!</div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      height: "80%",
                      alignItems: "center",
                    }}
                  >
                    <div className={styles.space}>
                      <div className={styles.number}>1</div>
                      <input
                        className={styles.inputSingle}
                        placeholder="Name"
                        type="text"
                        name=""
                        id=""
                        required={true}
                        onChange={() => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className={styles.space}>
                      <div className={styles.number}>2</div>
                      <input
                        className={styles.inputSingle}
                        type="tel"
                        name="telphone"
                        placeholder="Phone Number"
                        pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                        maxLength="12"
                        title="Ten digits code"
                        onChange={() => {
                          setNumber(event.target.value);
                        }}
                        required
                      />
                    </div>

                    <div className={styles.space}>
                      <div className={styles.number}>3</div>
                      <input
                        onChange={() => {
                          setMessage(event.target.value);
                        }}
                        className={styles.inputSingle}
                        placeholder="Comments"
                        type="text"
                      />
                    </div>
                  </div>
                      
                  <ReCAPTCHA
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="recaptcha"
                    sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
                    ref={captchaRef}
                    onChange={verifyCallback}
                  />
                </div>
                <button
                  onClick={(e) => {
                    setQuoteToggle(!quoteToggle);
                    handleSubmit(e);
                  }}
                  className={styles.button}
                  disabled={!recaptchaResponse}
                >
                  Get My Quote
                </button>
              </div>
            ) : (
              <div className={styles.center}>
                {quoteToggle ? (
                  <div style={{ display: "contents" }}>
                    <h2 className={styles.titleBig}>Financing Made Easy</h2>
                    <div className={styles.paragraph}>
                      We know how it can be stressful finding a printer. That"s
                      why we"ve made it easier than ever to find your next one
                      and get you all your information on it
                    </div>
                    <button
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                      className={styles.button}
                    >
                      Get Your Terms
                    </button>
                  </div>
                ) : (
                  <div
                    className={styles.title}
                    style={{
                      width: "140%",
                      fontWeight: "300",
                      fontSize: "37px",
                    }}
                  >
                    Awesome, we will be contacting you shortly!
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.centerLine}>
        <div className={styles.line} />
      </div>

      <div className={styles.thirdSection}>
        <h2 className={styles.title} style={{ fontWeight: "600" }}>
          Why Choose Copiers Utah?
        </h2>
        <div className={styles.optionContainer}>
          <div className={styles.optionsContainer}>
            <h3 className={styles.smallTitle}>Rent To Own</h3>
            <div className={styles.info}>
              As you make your rental payments, you"ll be one step closer to
              owning your copier outright.
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <h3 className={styles.smallTitle}>Easy Leases</h3>
            <div className={styles.info}>
              Our leases are designed to fit your budget and your business
              needs, with fliexible terms and no hidden fees!
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <h3 className={styles.smallTitle}>Hastle Free</h3>
            <div className={styles.info}>
              We handle everything! You can focus on your business while we
              handle the printer needs
            </div>
          </div>
        </div>
        <a href="#quote">
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className={styles.button}
          >
            Get your terms
          </button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Finance;
