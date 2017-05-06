import { distanceInWordsToNow } from 'date-fns';
const baseImagePath = 'https://www.nytimes.com/';

export default function Article({ image, url, snippet, headline, pub_date }) {
  return (
    <a href={url} target="_blank" className="container">
      <h3>{headline}</h3>
      {image && (
        <img src={baseImagePath + image.url} className="image" style={{ height: image.height, width: image.width }} />
      )}
      <p className="snippet">{snippet}</p>
      <div className="dateContainer">
        <p className="date">{distanceInWordsToNow(pub_date, { addSuffix: true })}</p>
      </div>
      <style jsx>{`
          h3, p {
            font-family: 'Open Sans';
          }
          @media (min-width: 500px) {
            a:hover {
              transform: scale(1.05);
            }
          }
          .container {
            color: black;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #000;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 0 5px;
            display: block;
            position: relative;
            width: 30%;
            text-align: center;
          }
          .dateContainer {
            position: absolute;
            bottom: -10px;
            text-align: center;
            width: 100%;
          }
          .date {
            font-variant: small-caps;
            color: gray;
          }
          .snippet {
            padding-bottom: 15px;
          }
          @media (max-width: 500px) {
            .container {
              width: 100%;
            }
          }
        `}
      </style>
    </a>
  )
}
