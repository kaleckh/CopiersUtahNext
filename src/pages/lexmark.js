import React, { useRef } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import Image from 'next/image';
// import Logo from "../Photos/logo.png";
import styles from '../styles/lexmark.module.css';
import { useRouter } from 'next/router';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useState } from 'react';
const Lexmark = () => {
	const router = useRouter();
	const tawkMessengerRef = useRef();
	const [ gray, setGray ] = useState(true);
	const [ quote, setQuote ] = useState(false);
	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log('onLoad works!');
	};
	return (
		<div className={styles.main}>
			<Head>
				<title>New and Used Lexmark Copiers | High-Quality and Affordable | Copiers Utah</title>
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
					<Image src="/static/logo.jpg" alt="Lexmark printer" width={150} height={100} />
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

			<div
				style={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center'
				}}
			>
				<div className={styles.backContainer}>
					<div
						onClick={() => {
							router.push('/products');
						}}
						style={{
							padding: '5px',
							fontSize: '25px',
							fontWeight: '400',
							cursor: 'pointer',
							borderRadius: '100%'
						}}
					>
						{' '}
						{`X`}
					</div>
				</div>
				<div className={styles.lineColumn}>
					<div className={styles.color}>Lexmark</div>
					<div className={styles.line} />
				</div>
				<div className={styles.row}>
					<div className={styles.copierContainer}>
						<div className={styles.lexmark} />
						<button
							onClick={() => {
								setQuote(!quote);
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
							<div className={styles.keyTitle}>Key Features</div>
							<div className={styles.keyLine} />
							<div className={styles.keyRow}>
								<div>
									<div className={styles.keyPointTitle}>B&W Speed: up to 22 ppm</div>
									<div className={styles.keyPointTitle}>Color Scanning: up to 45 opm</div>
								</div>
								<div>
									<div className={styles.keyPointTitle}>Max Paper Capacity: 3,600 Sheets</div>
									<div className={styles.keyPointTitle}>EPEAT Certified Product</div>
								</div>
							</div>
							<div className={styles.aboutRow}>
								<div
									onClick={() => {
										setGray(!gray);
									}}
									className={gray ? `${styles.focusTitleGray}` : `${styles.focusTitle}`}
								>
									About
								</div>
								<div
									onClick={() => {
										setGray(!gray);
									}}
									className={gray ? `${styles.focusTitle}` : `${styles.focusTitleGray}`}
								>
									Other Features
								</div>
							</div>
							<div className={styles.line} style={{ backgroundColor: 'black', width: '100%' }} />
							<div>
								{gray ? (
									<div className={styles.paragraph} style={{ textAlign: 'center' }}>
										The bizhub 227 provides productivity features to speed your output economically,
										including 22 ppm printing, color scanning, powerful finishing options for
										right-size scalability and enhanced control panel which now features a new
										mobile connectivity area.
									</div>
								) : (
									<div>
										<div className={styles.bulletContainer}>
											<div className={styles.bullet}>1s</div>
											<div className={styles.paragraphSmall}>
												The bizhub 227 multifunction printers from Konica Minolta have a
												print/copy output of up to 22 ppm to help keep pace with growing
												workloads
											</div>
										</div>
										<div className={styles.bulletContainer}>
											<div className={styles.bullet}>1s</div>
											<div className={styles.paragraphSmall}>
												The bizhub 227 multifunction printers from Konica Minolta have a
												print/copy output of up to 22 ppm to help keep pace with growing
												workloads
											</div>
										</div>
										<div className={styles.bulletContainer}>
											<div className={styles.bullet}>1s</div>
											<div className={styles.paragraphSmall}>
												The bizhub 227 multifunction printers from Konica Minolta have a
												print/copy output of up to 22 ppm to help keep pace with growing
												workloads
											</div>
										</div>
										<div className={styles.bulletContainer}>
											<div className={styles.bullet}>1s</div>
											<div className={styles.paragraphSmall}>
												The bizhub 227 multifunction printers from Konica Minolta have a
												print/copy output of up to 22 ppm to help keep pace with growing
												workloads
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Lexmark;
