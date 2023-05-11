import React, { useRef } from "react";
import Header from "./Header";
import Head from "next/head";
import Form from "./Form";
import Footer from "./Footer";
import Image from "next/image";
import { PatternFormat } from "react-number-format";
import styles from "../styles/epson.module.css";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useState } from "react";
const Epson = () => {
  const router = useRouter();
  const [recaptchaResponse, setRecaptchaResponse] = useState(false);
  const tawkMessengerRef = useRef();
  const [gray, setGray] = useState(true);
  const [grayBottom, setGrayBottom] = useState(true);
  const [quote, setQuote] = useState(false);
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
  var verifyCallback = function (response) {
    setRecaptchaResponse(response);
  };
  const captchaRef = useRef(null);
  return (
    <div className={styles.main}>
      <Head>
        <title>
          New and Used Lexmark Copiers | High-Quality and Affordable | Copiers
          Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah offers high-quality and affordable Lexmark copiers, both new and used. Learn more about Lexmark copiers and how they can benefit your office. Fill out our quote form to receive a customized quote."
        />
        <meta
          name="keywords"
          content="Lexmark copiers, used Lexmark copiers, new Lexmark copiers, office copiers, copiers Utah, affordable copiers"
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
            alt="Lexmark printer"
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

      <div
        style={{
          height: "150vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div className={styles.backContainer}>
          <div
            onClick={() => {
              router.push("/products");
            }}
            style={{
              padding: "5px",
              fontSize: "25px",
              fontWeight: "400",
              cursor: "pointer",
              borderRadius: "100%",
            }}
          >
            {" "}
            {`X`}
          </div>
        </div>
        <div className={styles.lineColumn}>
          <div className={styles.color}>Epson</div>
          <div style={{ width: "150%" }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <div className={styles.epson} />
            <button
              onClick={() => {
                router.push("/buy");
              }}
              className={styles.button}
            >
              Request a quote
            </button>
          </div>
          {quote ? (
            <Form />
          ) : (
              <div className={styles.column}>
                <div className={styles.aboutRow}>
                  <div
                    onClick={() => {
                      setGray(true);
                    }}
                    className={
                      gray ? `${styles.focusTitleGray}` : `${styles.focusTitle}`
                    }
                  >
                    About
                </div>

                  <div
                    onClick={() => {
                      setGray(false);
                    }}
                    className={
                      gray ? `${styles.focusTitle}` : `${styles.focusTitleGray}`
                    }
                  >
                    Other Features
                </div>
                </div>
                <div style={{ width: "100%" }} className={styles.line}></div>
                <div>
                  {gray ? (
                    <div
                      className={styles.Overview}
                      style={{ textAlign: "center" }}
                    >
                      Epson copiers are versatile and high-quality multifunction
                      devices that offer printing, scanning, copying, and faxing
                      capabilities. They are designed for both home and office
                      use, providing excellent print speeds, exceptional image
                      quality, and easy-to-use interfaces. With a range of models
                      to choose from, Epson copiers are a reliable and affordable
                    option for all document processing needs.{" "}
                    </div>
                  ) : (
                      <div>
                        <div className={styles.bulletContainer}>
                          <div className={styles.bullet}>1s</div>
                          <div className={styles.paragraphSmall}>
                            Epson copiers are multifunction devices.
                      </div>
                        </div>
                        <div className={styles.bulletContainer}>
                          <div className={styles.bullet}>1s</div>
                          <div className={styles.paragraphSmall}>
                            They produce high-quality output.
                      </div>
                        </div>
                        <div className={styles.bulletContainer}>
                          <div className={styles.bullet}>1s</div>
                          <div className={styles.paragraphSmall}>
                            They have an easy-to-use interface.
                      </div>
                        </div>
                        <div className={styles.bulletContainer}>
                          <div className={styles.bullet}>1s</div>
                          <div className={styles.paragraphSmall}>
                            They are cost-effective.
                      </div>
                        </div>
                        <div className={styles.bulletContainer}>
                          <div className={styles.bullet}>1s</div>
                          <div className={styles.paragraphSmall}>
                            Epson copiers utilize advanced printing technologies.
                      </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            )}
        </div>
        <div className={styles.section}>
          <div>
            <div
              onClick={() => {
                setGrayBottom(true);
              }}
              className={
                grayBottom ? styles.specsContainerDark : styles.specsContainer
              }
            >
              General Specs
            </div>
            <div
              onClick={() => {
                setGrayBottom(false);
              }}
              className={
                grayBottom ? styles.specsContainer : styles.specsContainerDark
              }
            >
              {" "}
              Pricing
            </div>
          </div>
          <div className={styles.bottomContainer}>
            {grayBottom ? (
              <>
                <div
                  style={{
                    textAlign: "center",
                    margin: "30px",
                    fontSize: "25px",
                  }}
                  className={styles.black}
                >
                  Additional Information
                </div>
                <div className={styles.spaceEven}>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>SPEED B/W</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>45 Pages Per Minute</div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>SPEED COLOR</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>45 Pages Per Minute</div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>RESOLUTION</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>600/600 - 2400/1200</div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>PAPER CAPACITY</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>500 - 2000 Sheets</div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>VOLUME</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>
                        {" "}
                        200,000 impressions Copies Per Month
                      </div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>COLOR CAPABILITY</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>Black and White Copier</div>
                    </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.rowBottom}>
                    <div className={styles.thirty}>
                      <div className={styles.black}>PROPERTIES</div>
                    </div>
                    <div className={styles.thirty}>
                      <div className={styles.black}>
                        Copier-Printer-Fax-Scan
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className={styles.container}>
                    <div className={styles.titleSmall}>
                      Call us at (801) 261 - 0510
                  </div>
                    <div className={styles.infoSmall}>or</div>
                    <div className={styles.titleMed}>Get Your free Quote!</div>
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
                        <PatternFormat
                          format="+1 (###) ### ####"
                          allowEmptyFormatting
                          mask="_"
                          className={styles.phoneNumber}
                          onChange={(event) => {
                            setNumber(event.target.value);
                          }}
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
              )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Epson;
