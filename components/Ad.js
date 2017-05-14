export default function Article({ image, url, snippet, headline, pixel, price }) {
  return (
    <a href={url} target="_blank" className="container">
      <h3>{headline}</h3>
      {image && (
        <img src={image} />
      )}
      <p className="snippet">{snippet}</p>
      <p className="price">{price}</p>
      {pixel && (
        <img src={pixel} width="1" height="1" alt="" className="pixel" />
      )}
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
            padding: 0 5px;
            background: #D2B887;
          }
          a:hover {
            transform: scale(1.05);
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .pixel {
            border:none !important;
            margin:0px !important;
            width: 1px;
            height: 1px;
          }
          .snippet {
            font-size: 12px;
            margin: 5px 0 0 0;
          }
          .price {
            margin: 5px 0 0 0;
          }
        `}
      </style>
    </a>
  )
}
