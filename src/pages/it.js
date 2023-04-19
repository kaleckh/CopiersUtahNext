import { useState, useRef } from "react"
import Header from './Header';
import Image from 'next/image';
import Form from './Form';
// import Logo from '../Photos/logo.png';


import styles from '../styles/it.module.css';

import Footer from './Footer';
// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Home = (props) => {
	const [ quoteToggle, setQuoteToggle ] = useState(true);
	const [ buttonToggle, setButtonToggle ] = useState(true);
	
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
console.log(process.env.RECAPTCHA_SITE_KEY)
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
						<div></div>
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
				<div className={styles.titleBig}>
					What we do, <div className={styles.bold}>For You</div>
				</div>
				<div className={styles.row}>
					<div className={styles.sideRowLeft}>
						<div>
							<div className={styles.title}>Ransomware Protection</div>
							<div className={styles.paragraph}>
								Ransomware evolves, anti-ransomware utilities will evolve as well.
							</div>
						</div>
						<div>
							<div className={styles.title}>Backup And Restore</div>
							<div className={styles.paragraph}>
								Allowing users to create backups & restore from backups created earlier.
							</div>
						</div>
						<div>
							<div className={styles.title}>Full Printer Support</div>
							<div className={styles.paragraph}>
								Download drivers, run diagnostic tools & troubleshoot your printer
							</div>
						</div>
						<div>
							<div className={styles.title}>Network Efficiency</div>
							<div className={styles.paragraph}>
								Concept of efficiency can be applied to both local & global scales in a network
							</div>
						</div>
					</div>
					{quoteToggle ? (
						<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
							<div className={styles.itSupport} />
							<button onClick={() => {setQuoteToggle(!quoteToggle)}} className={styles.button}>Request a Quote!</button>
						</div>
					) : (
            <div>
              {buttonToggle? <><Form quote={() => {setButtonToggle(!buttonToggle)}}/></> : <div className={styles.title}>Awesome, you're next in line!</div>}
            </div>

					)}
					<div className={styles.sideRowRight}>
						<div>
							<div className={styles.title}>Secure Collabration and cloud support </div>
							<div className={styles.paragraph}>
								Secure Collaboration can provide secure, fully managed cloud services
							</div>
						</div>
						<div>
							<div className={styles.title}>Fix Broken Hardware </div>
							<div className={styles.paragraph}>
								Replacing hardware that is out of service & installing new hardware
							</div>
						</div>
						<div>
							<div className={styles.title}>Secure And Fast Setup</div>
							<div className={styles.paragraph}>Stay secure with optional verification setup</div>
						</div>
						<div>
							<div className={styles.title}>Software And App Support</div>
							<div className={styles.paragraph}>
								Application support specialist can provide technical support to clients
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
