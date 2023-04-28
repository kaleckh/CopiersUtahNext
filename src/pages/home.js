import React, { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import { Inter } from "next/font/google";
import styles from "../styles/HomePage.module.css";
import { Quote } from "../SVG/Quote";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "./Footer";
import { useRouter } from "next/router";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function Home() {
  const [name, setName] = useState("");
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("this is the test message");
  const tawkMessengerRef = useRef();
  const captchaRef = useRef(null);
  const onLoad = () => {
    console.log("onLoad works!");
  };
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const router = useRouter();
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending");

    fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "api_key": "api-DC44EBDEE45411ED847EF23C91C88F4E",
        "to": [`<info@copiersutah.com>`],
        "sender": "<info@copiersutah.com>",
        "subject": `This is${name}'s quote form. Their number is ${number}`,
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

  return (
    <div className={styles.main}>
      <TawkMessengerReact
        onLoad={onLoad}
        propertyId="5abd4931d7591465c7090c65"
        widgetId="default"
        useRef={tawkMessengerRef}
      />
      <Head>
        <title>
          Copiers for Sale and Rent | Office Copy Machines | Copiers Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! "
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Copiers Utah",
              description:
                "Copiers Utah offers high-quality copiers for sale and rent.",
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
              image: "https://copiersutah.com/static/logo.png",
              url: "https://copiersutah.com",
              areaServed: "Utah",
              priceRange: "$$",
              founder: {
                "@type": "Person",
                name: "Paul Mooney",
              },
              sameAs: [
                "https://www.facebook.com/your-facebook-page",
                "https://www.linkedin.com/company/your-linkedin-page",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "50",
              },
            }),
          }}
        />
      </Head>
      <div className={styles.logoSpaceContainer}>
        <div className={styles.logoSpace}>
          <Image
            src="/static/logo.png"
            alt="the copiers utah logo"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <h1 className={styles.infoBig}>Copiers Utah</h1>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className={styles.secondSection}>
        <div className={styles.flex}>
          <div
            onClick={() => {
              router.push("/buy");
            }}
            className={styles.shadeBig}
            style={{ height: "75%", marginTop: "24px" }}
          >
            <div className={styles.parent}>
              <div className={styles.woman} />

              <div className={styles.overlay}>
                <div className={styles.centerLarge}>Buy Or Lease A Copier</div>
              </div>
            </div>
          </div>
          <div className={styles.somethingContainer}>
            <div className={styles.row}>
              <div
                onClick={() => {
                  router.push("/fix");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.repair} />

                  <div className={styles.center}>Copier Repair</div>
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/home");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.toner} />
                  <div className={styles.overlay} />
                  <div className={styles.center}>Buy Toner</div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div
                onClick={() => {
                  router.push("/it");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.itWork} />
                  <div className={styles.overlay} />
                  <div className={styles.center}>IT Work</div>
                </div>
              </div>
              <div
                onClick={() => {
                  router.push("/shortTerm");
                }}
                className={styles.shade}
              >
                <div className={styles.parent}>
                  <div className={styles.construction} />
                  <div className={styles.overlay} />
                  <div className={styles.center}>Short Term Rental</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div style={{ marginTop: "30px" }} className={styles.line}></div>
        </div>
        <div className={styles.needSpace}>
          <div className={styles.middle}>
            <h3 className={styles.reviewBig}>Recent Google Reviews...</h3>
          </div>
          <div className={styles.reviewRow}>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  People there are always fantastic to work with. I recommend
                  them to everyone
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Tara Bennets</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  Great company to work with. They have friendly staff and were
                  able to get me up and running within a few days.
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Kyle Francis</div>
            </div>
            <div className={styles.paragraphContainer}>
              <div className={styles.smallRow}>
                <Quote />
                <div className={styles.titleSmall}>
                  This company is the best to do work with. They are very
                  friendly and very helpful.
                </div>
              </div>
              <div className={styles.smallParagraph}>2 Months Ago</div>
              <div className={styles.title}>Carley Ward</div>
            </div>
          </div>
          <div className={styles.centerReview}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/Copiers+for+Less/@40.599545,-111.9827469,13z/data=!4m12!1m2!2m1!1scopiers+utah!3m8!1s0x87528bb3da9348f5:0x52af9011e571a1bf!8m2!3d40.599545!4d-111.9065292!9m1!1b1!15sCgxjb3BpZXJzIHV0YWhaDiIMY29waWVycyB1dGFokgEVY29waWVyX3JlcGFpcl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4xTjJaeE0xTjNFQUXgAQA!16s%2Fg%2F1hc90lr04"
            >
              <button className={styles.button}>See All Google Reviews</button>
            </a>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line}></div>
        </div>
        <div id="quote" className={styles.section}>
          <div className={styles.thirdSectionRow}>
            <div className={styles.front}>
              <h2 style={{ fontSize: "30px" }} className={styles.title}>We Sell New And Refurbished Copiers</h2>
              <h3 style={{ fontSize: "20px" }} className={styles.h3}>Lets Get You A Quote!</h3>
              <div className={styles.cartoon}></div>
            </div>
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
                  onChange={verifyCallback}
                />
              </div>
              <button
                onClick={(e) => {
                  setQuoteToggle(!quoteToggle);
                  sendEmail(e);
                }}
                className={styles.button}
                disabled={!recaptchaResponse}
              >
                Get My Quote
              </button>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
}
