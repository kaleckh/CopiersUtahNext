
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import styles from '../styles/buy.module.css'

const Sliver = () => {
    return (
        <div className={styles.sliver}>Just Want Information?  Call Us At (801) - 261 - 0510</div>
    )
}
export default Sliver