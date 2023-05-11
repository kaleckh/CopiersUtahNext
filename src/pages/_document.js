import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      style={{
        fontFamily: "arial",
        scrollBehavior: " smooth!important",
        color: "black",
        backgroundColor: "white",
      }}
      lang="en"
    >
      <Head>
        <link rel="shortcut icon" href="/logo.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
