import React, { useRef, useState } from 'react';
import Header from './Header';
import Axios from 'axios';
import Image from 'next/image';
// import Logo from '../Photos/logo.png';
import styles from '../styles/Fix.module.css';
import Footer from './Footer';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Fix = () => {
	const tawkMessengerRef = useRef();
	const [ toggle, setToggle ] = useState(false);
	const [ SuccessMsg, setSuccessMsg ] = useState('');
	const [ ErrorMsg, setErrorMsg ] = useState('');
	const [ valid_token, setValidToken ] = useState([]);
	const [ token, setToken ] = useState();
	const captchaRef = useRef(null);

	const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
	const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

	const handleSubmit = async (e) => {
		e.preventDefault();
		let token = captchaRef.current.getValue();
		setToken(token);
		captchaRef.current.reset();

		if (token) {
			let valid_token = await verifyToken(token);
			setValidToken(valid_token);

			if (valid_token[0].success === true) {
				console.log('verified');
				setSuccessMsg('Hurray!! you have submitted the form');
			} else {
				console.log('not verified');
				setErrorMsg(' Sorry!! Verify you are not a bot');
			}
		}
	};
	const verifyToken = async (token) => {
		let APIResponse = [];

		try {
			let response = await Axios.post(`http://localhost:8000/verify-token`, {
				reCAPTCHA_TOKEN: token,
				Secret_Key: SECRET_KEY
			});

			APIResponse.push(response['data']);
			return APIResponse;
		} catch (error) {
			console.log(error);
		}
	};

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};

	return (
		<div className={styles.main}>
			<div>
				{/* <TawkMessengerReact
					onLoad={onLoad}
					propertyId="5abd4931d7591465c7090c65"
					widgetId="default"
					useRef={tawkMessengerRef}
				/> */}
			</div>
			<div className={styles.logoSpaceContainer}>
				<div className={styles.logoSpace}>
					<Image src="/static/logo.jpg" width={150} height={100} />
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
			{toggle ? (
				<div>Awesome, your next in line</div>
			) : (
				<div className={styles.secondSection}>
					<div className={styles.container}>
						<div className={styles.black}>Schedule A Maintanance Call!</div>
						<div style={{ width: '97%', display: 'flex' }}>
							<div className={styles.number}>1</div>
							<input
								style={{ width: '82%', color: 'black' }}
								className={styles.inputSingle}
								placeholder="First Name"
								type="text"
								name=""
								id=""
								required={true}
							/>
						</div>
						<input
							className={styles.inputSingle}
							type="tel"
							name="telphone"
							placeholder="Phone Number"
							pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
							maxlength="12"
							title="Ten digits code"
							required
						/>
						<input className={styles.inputSingle} type="text" placeholder="Zip Code" />

						<div className={styles.numberContainer}>
							<div className={styles.number}>2</div>
							<div className={styles.light}>Extra Information</div>
						</div>
						<select className={styles.selected} id="year">
							<option value="hide">Best time to call</option>
							<option value="2010">Morning</option>
							<option value="2010">Afternoon</option>
							<option value="2010">Evening</option>
						</select>
						<input
							style={{ color: 'black' }}
							className={styles.inputSingle}
							type="text"
							name=""
							id=""
							placeholder="What type of service?"
						/>
						<ReCAPTCHA
							style={{ display: 'flex', justifyContent: 'center' }}
							className="recaptcha"
							sitekey={'6LdNLYElAAAAAIMv324AxwjVLAnHHIdnIWPEYeQi'}
							ref={captchaRef}
						/>
						<button
							onclick={() => {
								debugger
								setToggle(!toggle);
							}}
							className={styles.button}
						>
							Get quote!
						</button>
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default Fix;
