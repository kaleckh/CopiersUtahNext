import React, { useRef, useState } from 'react';
import Header from './Header';
import Image from 'next/image';
import Form from './Form';
import Head from 'next/head';

// import Menu from "../Photos/menu.png";
// import Repair from "../Photos/repair.jpg";
import styles from '../styles/buy.module.css';

import Footer from './Footer';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Home = (props) => {
	const [ quoteToggle, setQuoteToggle ] = useState(true);

	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	return (
		<div className={styles.main}>
			<Head>
				<title>Get a Quote for High-Quality New and Refurbished Copiers | Copiers Utah</title>
				<meta
					name="description"
					content="Looking for a high-quality copier for your office? Copiers Utah offers a range of advanced copy machines for sale, including new and refurbished options. Fill out our easy form to get a personalized quote today."
				/>
				<meta
					name="keywords"
					content="office copiers, copiers for sale, refurbished copiers, get a quote, copiers Utah"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Product',
							name: 'New and Refurbished Copiers',
							description: 'High-quality copiers for your office, including new and refurbished options.',
							brand: 'Copiers Utah',
							url: 'https://copiersutah.com/home',
							image: 'https://copiersutah.com/static/logo.png',
							offers: {
								'@type': 'AggregateOffer',
								priceCurrency: 'USD',
								availability: 'https://schema.org/InStock',
								lowPrice: 'Your Lowest Price',
								highPrice: 'Your Highest Price',
								offerCount: 'Number of Copiers Available',
								seller: {
									'@type': 'LocalBusiness',
									name: 'Copiers Utah',
									telephone: '(801) 261-0510',
									email: 'info@copiersutah.com',
									address: {
										'@type': 'PostalAddress',
										streetAddress: '554 W 8360 S',
										addressLocality: 'Sandy',
										addressRegion: 'Utah',
										postalCode: '84070',
										addressCountry: 'USA'
									}
								}
							}
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
					<Image src="/static/logo.png" alt="lady using a copier" width={150} height={100} />
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
				{quoteToggle ? (
					<div>
						<Form
							quote={() => {
								setQuoteToggle(!quoteToggle);
							}}
							title={'Get A Quote'}
						/>
					</div>
				) : (
					<h1 className={styles.title}>Awesome, we will be contacting you shortly!</h1>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default Home;
