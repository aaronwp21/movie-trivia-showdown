import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className='min-w-[400px] bg-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
