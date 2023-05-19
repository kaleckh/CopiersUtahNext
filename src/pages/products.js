import React, { useRef, useState } from "react";
import Header from "./Header";
import Head from "next/head";
import Sliver from './Sliver'
import Image from "next/image";
import Footer from "./Footer";
import { useRouter } from "next/router";

import styles from "../styles/product.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const Products = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("this is the test message");
  const router = useRouter();

  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  const onLoad = () => {
    console.log("onLoad works!");
  };
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
      <Sliver/>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://copiersutah.com/products/" />
        <title>
          Top Copiers for Sale | Konica Minolta, Epson, and Lexmark | Copiers
          Utah
        </title>
        <meta
          name="description"
          content="Copiers Utah offers a range of high-quality copiers for sale, including Konica Minolta, Epson, and Lexmark models. Explore our selection and find the perfect copier for your office."
        />
        <meta
          name="keywords"
          content="copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah"
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
            src="/static/logo.webp	"
            alt="Our copiers utah logo"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div></div>
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
              <div className={styles.infoMedium}>Ph: (801) 261 - 0510</div>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <div
        style={{
          height: "74%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className={styles.color}>Our Top Products</h1>
        <div className={styles.centerLine}>
          <div className={styles.line} />
        </div>
        <div className={styles.row}>
          <h2 className={styles.title}>Lexmark</h2>
          <h2 className={styles.title}>Konica Minolta</h2>
          <h2 className={styles.title}>Epson</h2>
        </div>
        <div className={styles.copierRow}>
          <div
            onClick={() => {
              router.push("/lexmark");
            }}
            className={styles.copierContainer}
          >
            <div className={styles.lexmark} />
          </div>
          <div
            className={styles.copierContainer}
            onClick={() => {
              router.push("/konika");
            }}
          >
            <div className={styles.konika} />
          </div>
          <div
            className={styles.copierContainer}
            onClick={() => {
              router.push("/epson");
            }}
          >
            <div style={{ marginTop: "40px" }} className={styles.epson} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
