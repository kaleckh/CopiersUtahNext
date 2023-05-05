import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      style={{
        fontFamily: "arial",
        scrollBehavior: " smooth!important",
        color: "black",
      }}
      lang="en"
    >
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
