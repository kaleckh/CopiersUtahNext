import React, { useRef, useState } from 'react'
import Header from './Header'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './Footer'
import { useRouter } from 'next/router'

import styles from '../styles/Refurbished.module.css'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react'
const Refurbished = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('this is the test message')
  const router = useRouter()

  const tawkMessengerRef = useRef()

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize()
  }
  const onLoad = () => {
    console.log('onLoad works!')
  }
  const sendEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message,
      number,
    }
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        // setSubmitted(true);
        // setName("");
        // setEmail("");
        // setBody("");
      }
    })
  }
  return (
    <div className={styles.main}>
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
      <div className={styles.section}>
        <div className={styles.center}>
          <div className={styles.title}>Our Top Refurbished Machines</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.grid}>
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
          <div className={styles.box}>
            <div className={styles.titleBlackSmall}>Konika Minolta C368</div>
            <Image src="/static/logo.webp" width={200} height={200}></Image>
            <div className={styles.somethingContainer}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '30px' }}>$</div>
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Refurbished
