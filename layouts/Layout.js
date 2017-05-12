import Link from 'next/link';
import Head from 'next/head';
import Menu from './Menu';
import { BACKGROUND_IMAGE } from '../constants';

function properCase(str) {
  const prepend = 'New Orleans News Fast';
  if (str === '/') {
    return prepend;
  }
  const firstLetter = str.substr(1, 1).toUpperCase();
  return prepend + ' | ' + firstLetter + str.substr(2);
}

export default function Layout({ url, children }) {
  return (
    <div className="container">
      <Head>
        <title>{properCase(url.pathname)}</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans|Rubik+Mono+One" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-98353644-1', 'auto');
            ga('send', 'pageview');
          `
        }} />
      </Head>
      <Link href="/">
        <h1 className="header">Nola<span>Word</span></h1>
      </Link>
      <Menu url={url} />
      {children}
      <style jsx global>{`
        body {
          background-color: #fafafa;
          background-image: ${BACKGROUND_IMAGE}
        }
      `}</style>
      <style jsx>{`
          .header {
            font-family: 'Rubik Mono One';
            cursor: pointer;
            transition: all 0.2s;
          }
          @media (min-width: 500px) {
            .header:hover {
              transform: scale(1.2);
            }
          }
          .header span {
            color: #D2B887;
          }
          .container {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
