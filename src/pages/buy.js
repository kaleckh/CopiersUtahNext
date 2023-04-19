import React, { useRef, useState } from "react";
import Header from "./Header";
import Image from "next/image";
import Form from "./Form";
// import Logo from "../Photos/logo.png";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from "../styles/buy.module.css";

import Footer from "./Footer";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Home = (props) => {
	const [ quoteToggle, setQuoteToggle ] = useState(true);
	
	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log("onLoad works!");
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
					<Image src="/static/logo.jpg" alt="lady using a copier" width={150} height={100} />
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
				<div className={styles.woman} />
				{quoteToggle ? <><Form quote={() => {setQuoteToggle(!quoteToggle)}} title={"Get A Quote"} /></> : <div className={styles.title} >Awesome, we will be contacting you shortly!</div>}
				
			</div>

			<Footer />
		</div>
	);
};

export default Home;
