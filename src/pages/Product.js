import React, { useRef, useEffect } from 'react'
import Header from './Header'
import Head from 'next/head'
import Sliver from './Sliver'
import Form from './Form'
import Footer from './Footer'
import Image from 'next/image'
import { PatternFormat } from 'react-number-format'
import styles from '../styles/lexmark.module.css'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
import { useState } from 'react'
const Lexmark = () => {
  const router = useRouter()
  const [recaptchaResponse, setRecaptchaResponse] = useState(false)
  const tawkMessengerRef = useRef()
  const [gray, setGray] = useState(true)
  const [grayBottom, setGrayBottom] = useState(true)
  const [quote, setQuote] = useState(false)
  const [model, setModel] = useState()
  const [image, setImage] = useState()
  const [type, setType] = useState()
  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  var verifyCallback = function (response) {
    setRecaptchaResponse(response)
  }
  const captchaRef = useRef(null)
  useEffect(() => {
    const storedModel = localStorage.getItem("Model");
    const photo = localStorage.getItem("Image");
    const back = localStorage.getItem("type");
    setModel(storedModel);
    setImage(photo)
    setType(back)
  }, []);
  return (
    <div className={styles.main}>
      <Sliver />
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
            src={`/static/logo.webp`}
            alt="Lexmark used and new printer"
            width={150}
            height={100}
          />
          <div className={styles.columnContainer}>
            <div />
            <div className={styles.infoBig}>Copiers Utah</div>
            <div className={styles.mediumColumn}>
              <div className={styles.infoMedium}>Ph: (801) 261-0510</div>
              <div className={styles.infoSmall}>info@copiersutah.com</div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      <div
        style={{
          height: '150vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className={styles.backContainer}>
          <div
            onClick={() => {
              router.push(`/${type}`)
            }}
            style={{
              padding: '5px',
              fontSize: '25px',
              fontWeight: '400',
              cursor: 'pointer',
              borderRadius: '100%',
            }}
          >
            {' '}
            X
          </div>
        </div>
        <div className={styles.lineColumn}>
          <div className={styles.color}>{}</div>
          <div style={{ width: '150%' }} className={styles.line} />
        </div>
        <div className={styles.row}>
          <div className={styles.copierContainer}>
            <Image src={`/static/${image}`} width={300} height={250}/>
            <button
              style={{width:"100%"}}
              onClick={() => {
                router.push('/buy')
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
                <div className={styles.title}>{model}</div>
              <div className={styles.aboutRow}>
                <div
                  onClick={() => {
                    setGray(true)
                  }}
                  className={
                    gray ? `${styles.focusTitleGray}` : `${styles.focusTitle}`
                  }
                >
                  About
                </div>
              </div>
              <div className={styles.line}></div>
              <div>
                <div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      The most reliable copier in the world!
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      85% marketshare in HealthCare & Pharmacies because it
                      always works.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Simple to use color, icon driven touch screen.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Known for their fast print speeds and efficient
                      performance.
                    </div>
                  </div>
                  <div className={styles.bulletContainer}>
                    <div className={styles.bullet}>1s</div>
                    <div className={styles.paragraphSmall}>
                      Security is a top priority for Lexmark, and their copiers
                      come with advanced security features like user
                      authentication and data encryption
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={{height:"40%"}} className={styles.konikaBottom}>
          <div className={styles.bottomProductContainer}>
            <div className={styles.paragraph}>
              Konica Minolta copiers are renowned for their exceptional
              reliability, making them a trusted choice for businesses of all
              sizes. With a long-standing reputation in the industry, Konica
              Minolta has consistently delivered copiers that are built to last.
              Their machines are designed with durability in mind, ensuring they
              can handle high volumes of printing and copying without
              compromising on performance.
            </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lexmark
