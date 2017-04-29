const baseImagePath = 'https://www.nytimes.com/';

export default function Article({ image, url, snippet, headline }) {
  return (
    <a href={url} target="_blank" className="container">
      <h3>{headline}</h3>
      {image && (
        <img src={baseImagePath + image.url} className="image" style={{ height: image.height, width: image.width }} />
      )}
      <p>{snippet}</p>
      <style jsx>{`
          h3, p {
            font-family: 'Open Sans';
          }
          a {
            color: black;
            text-decoration: none;
            transition: all 0.2s;
            border: 1px solid #000;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 0 5px;
          }
          a:hover {
            transform: scale(1.05);
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
            text-align: center;
          }
           @media (max-width: 500px) {
             .container {
               width: 45%;
             }
           }
        `}
      </style>
    </a>
  )
}
