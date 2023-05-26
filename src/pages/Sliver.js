import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from 'react'
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import Axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from '../styles/buy.module.css'

const Sliver = () => {
  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <div className={styles.sliver}>
        Dont Know Where To Start?{' '}
        <a style={{ paddingLeft: '15px' }} href="tel:8012610510">
          {' '}
          Call Us At (801)-261 0510
        </a>
      </div>
    </div>
  )
}
export default Sliver
