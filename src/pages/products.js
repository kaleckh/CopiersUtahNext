import React, { useRef } from "react";
import Header from "./Header";
import Head from 'next/head';
import Image from "next/image";
import Footer from "./Footer";
import { useRouter } from "next/router";
// import Logo from "../Photos/logo.png";
import styles from "../styles/product.module.css";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
const Products = () => {
	const router = useRouter();

	const tawkMessengerRef = useRef();

	const handleMinimize = () => {
		tawkMessengerRef.current.minimize();
	};
	const onLoad = () => {
		console.log("onLoad works!");
	};
	return (
		<div className={styles.main}>
			<Head>
	<title>Top Copiers for Sale | Konica Minolta, Epson, and Lexmark | Copiers Utah</title>
	<meta name="description" content="Copiers Utah offers a range of high-quality copiers for sale, including Konica Minolta, Epson, and Lexmark models. Explore our selection and find the perfect copier for your office."/>
	<meta name="keywords" content="copiers for sale, office copiers, Konica Minolta copiers, Epson copiers, Lexmark copiers, copiers Utah"/>
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
				<Image src="/static/logo.jpg" alt="Our copiers utah logo" width={150} height={100} />
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
			<div
				style={{
					height: "78%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					justifyContent: "center"
				}}
			>
				<div className={styles.color}>Our Products</div>
				<div className={styles.centerLine}>
					<div className={styles.line} />
				</div>
				<div className={styles.row}>
					<div className={styles.title}>Lexmark</div>
					<div className={styles.title}>Konica Minolta</div>
					<div className={styles.title}>Epson</div>
				</div>
				<div className={styles.copierRow}>
					<div
						onClick={() => {
                            
							router.push("/lexmark")
						}}
						className={styles.copierContainer}
					>
						<div className={styles.lexmark} />
					</div>
					<div
						className={styles.copierContainer}
						onClick={() => {
							router.push("/konika")
						}}
					>
						<div className={styles.konika} />
					</div>
					<div
						className={styles.copierContainer}
						onClick={() => {
							router.push("/epson")
						}}
					>
						<div style={{ marginTop: "40px" }} className={styles.epson} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;
