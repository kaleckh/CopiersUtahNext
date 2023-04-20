import { useRef, useState } from 'react';
import Header from './Header';
import Form from './Form';
import Image from 'next/image';
// import Logo from "../Photos/logo.png";
// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from '../styles/shortTerm.module.css';

import Footer from './Footer';
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const Home = () => {
	const tawkMessengerRef = useRef();
	const [ quote, setQuote ] = useState(false);

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	// const navigate = useNavigate();
	return (
		<div className={styles.main}>
			<Head>
				<title>Short-Term Copier Rentals | Copiers Utah</title>
				<meta
					name="description"
					content="Need a copier for a short-term project or event? Copiers Utah offers flexible short-term copier rentals with advanced features and affordable prices. Contact us today to learn more."
				/>
				<meta
					name="keywords"
					content="short-term copier rentals, copier rental, short-term rental, copiers Utah"
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
					<Image src="/static/logo.jpg" alt="our copiers utah logo" width={150} height={100} />
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
				<div className={styles.title}>Copiers Utah offers short and long term copier rentals.</div>
				<div className={styles.row}>
					<div className={styles.column}>
						<div className={styles.woman} />
					</div>
					{quote ? (
						<div style={{ fontSize: '30px', fontWeight: '300' }} className={styles.title}>
							Awesome, you"re next in line for a call!
						</div>
					) : (
						<Form
							quote={() => {
								setQuote(!quote);
							}}
							title={'Get A Quote'}
						/>
					)}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
