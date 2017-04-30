import Link from 'next/link';

const links = [
  { label: 'News', link: '/' },
  { label: 'Sports', link: '/sports' },
  { label: 'Weather', link: '/weather' },
];

export default function Menu({ url }) {
  return (
    <div className="wrap">
      <h2 className="header">All articles below mention New Orleans</h2>
      <h4 className="header">Help support this site by visiting our ads!</h4>
      <div className="linkContainer">
        {links.map((link, i) => {
          return (
            <Link key={`menulink-${i}`} href={link.link}>
              <a className={url.pathname === link.link && 'active'}>
                {link.label}
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
          h3, a {
            font-family: 'Open Sans';
          }
          a {
            color: black;
            text-decoration: none;
            transition: all 0.2s;
          }
          @media (min-width: 500px) {
            a:hover {
              transform: scale(1.2);
            }
          }
          .wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .linkContainer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
            padding: 10px 30px;
            border-radius: 10px;
            border: 1px solid #000;
            margin-top: 20px;
          }
          .active {
            color: #D2B887;
          }
          .header {
            margin: 0;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
