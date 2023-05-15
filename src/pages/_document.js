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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKD6REH5QG"></script>
        <link rel="shortcut icon" href="/logo.webp" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${"BKD6REH5QG"}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
