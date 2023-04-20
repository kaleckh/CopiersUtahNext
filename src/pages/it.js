import { useState, useRef } from 'react';
import Header from './Header';
import Head from 'next/head';
import Image from 'next/image';
import Form from './Form';
// import Logo from "../Photos/logo.png";

import styles from '../styles/it.module.css';

import Footer from './Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const It = (props) => {
	const [ quoteToggle, setQuoteToggle ] = useState(true);
	const [ buttonToggle, setButtonToggle ] = useState(true);

	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	console.log(process.env.RECAPTCHA_SITE_KEY);
	return (
		<div className={styles.main}>
			<Head>
				<title>IT Services and Support | Get a Quote Today | Copiers Utah</title>
				<meta
					name="description"
					content="Copiers Utah provides comprehensive IT services and support. Fill out our easy form to get a personalized quote and get the IT help you need."
				/>
				<meta name="keywords" content="IT services, IT support, IT help, IT quote, copiers Utah" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'ProfessionalService',
							name: 'Copiers Utah',
							description: 'Copiers Utah provides comprehensive IT services and support.',
							telephone: '(801) 261-0510',
							email: 'info@copiersutah.com',
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'Your Street Address',
								addressLocality: 'Your City',
								addressRegion: 'Your State',
								postalCode: 'Your Postal Code',
								addressCountry: 'USA'
							},
							image: 'https://your-domain.com/static/logo.jpg',
							url: 'https://your-domain.com',
							areaServed: 'Utah',
							priceRange: '$$',
							founder: {
								'@type': 'Person',
								name: "Founder's Name"
							},
							sameAs: [
								'https://www.facebook.com/your-facebook-page',
								'https://www.linkedin.com/company/your-linkedin-page'
							]
						})
					}}
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
					<Image src="/static/logo.jpg" alt="IT services provided by Copiers Utah" width={150} height={100} />
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
				<h1 className={styles.titleBig}>
					What we do, <div className={styles.bold}>For You</div>
				</h1>
				<div className={styles.row}>
					<div className={styles.sideRowLeft}>
						<div>
							<h2 className={styles.title}>Ransomware Protection</h2>
							<div className={styles.paragraph}>
								Ransomware evolves, anti-ransomware utilities will evolve as well.
							</div>
						</div>
						<div>
							<h2 className={styles.title}>Backup And Restore</h2>
							<div className={styles.paragraph}>
								Allowing users to create backups & restore from backups created earlier.
							</div>
						</div>
						<div>
							<h2 className={styles.title}>Full Printer Support</h2>
							<div className={styles.paragraph}>
								Download drivers, run diagnostic tools & troubleshoot your printer
							</div>
						</div>
						<div>
							<h2 className={styles.title}>Network Efficiency</h2>
							<div className={styles.paragraph}>
								Concept of efficiency can be applied to both local & global scales in a network
							</div>
						</div>
					</div>
					{quoteToggle ? (
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<div className={styles.itSupport} />
							<button
								onClick={() => {
									setQuoteToggle(!quoteToggle);
								}}
								className={styles.button}
							>
								Request a Quote!
							</button>
						</div>
					) : (
						<div>
							{buttonToggle ? (
								<div>
									<Form
										quote={() => {
											setButtonToggle(!buttonToggle);
										}}
									/>
								</div>
							) : (
								<div className={styles.title}>Awesome, you're next in line!</div>
							)}
						</div>
					)}
					<div className={styles.sideRowRight}>
						<div>
							<h2 className={styles.title}>Secure Collabration and cloud support </h2>
							<div className={styles.paragraph}>
								Secure Collaboration can provide secure, fully managed cloud services
							</div>
						</div>
						<div>
							<h2 className={styles.title}>Fix Broken Hardware </h2>
							<div className={styles.paragraph}>
								Replacing hardware that is out of service & installing new hardware
							</div>
						</div>
						<div>
							<h2 className={styles.title}>Secure And Fast Setup</h2>
							<div className={styles.paragraph}>Stay secure with optional verification setup</div>
						</div>
						<div>
							<h2 className={styles.title}>Software And App Support</h2>
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

export default It;
