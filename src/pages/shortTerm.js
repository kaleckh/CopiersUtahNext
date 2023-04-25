import { useRef, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Image from "next/image";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
// import Logo from "../Photos/logo.png";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/shortTerm.module.css";

import Footer from "./Footer";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Home = () => {
  const tawkMessengerRef = useRef();
  const [quote, setQuote] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("this is the test message");
  const captchaRef = useRef(null);

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      number,
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
  }
  // const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
      number,
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
  return (
    <div className={styles.main}>
      <Head>
        <title>Short-Term Copier Rentals | Copiers Utah</title>
        <meta
          name="description"
          content="Need a copier for a short-term project or event? Copiers Utah offers flexible short-term copier rentals with advanced features and affordable prices. Contact us today to learn more."
        />
        <meta
          name="keywords"
          content="short-term copier rentals, copier rental, short-term rental, copiers Utah"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Short-Term Copier Rentals",
              description:
                "Flexible short-term copier rentals with advanced features and affordable prices.",
              provider: {
                "@type": "Corporation",
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
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Utah",
              },
              serviceType: "Copier Rental",
              url: "https://copiersutah.com/short-term-rental",
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
            alt="our copiers utah logo"
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
      <div className={styles.secondSection}>
        <div className={styles.title}>
          Copiers Utah offers short and long term copier rentals.
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.woman} />
          </div>
          {quote ? (
            <div
              style={{ fontSize: "30px", fontWeight: "300" }}
              className={styles.title}
            >
              Awesome, you"re next in line for a call!
            </div>
          ) : (
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
                <div
                  style={{ height: "25%", display: "flex" }}
                  className={styles.padding}
                >
                      
                  <ReCAPTCHA
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="recaptcha"
                    sitekey={"6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi"}
                    ref={captchaRef}
                  />
                </div>
                <button
                  onClick={(e) => {
                    setQuote(!quote);
                    handleSubmit(e);
                  }}
                  className={styles.button}
                >
                  Get My Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
