import { Layout } from '../layouts';
import { Article, Ad } from '../components';
import makeNewsPage from '../utilities/makeNewsPage';

function Sports({ articles, url }) {
  return (
    <Layout url={url}>
      <h2>Sports</h2>
      <div className="container">
        {articles.map((article, i) => {
          if (article.pixel) {
            return (
              <Ad
                key={`article-${i}`}
                pixel={article.pixel}
                headline={article.headline}
                image={article.image}
                snippet={article.snippet}
                url={article.url}
                price={article.price}
              />
            )
          }
          const image = article.multimedia && article.multimedia.filter(a => a.subtype === 'thumbnail')[0];
          return (
            <Article
              key={`article-${i}`}
              headline={article.headline.print_headline}
              image={image}
              snippet={article.snippet}
              url={article.web_url}
              pub_date={article.pub_date}
            />
          );
        })}
      </div>
      <style jsx>{`
          h2 {
            font-family: 'Open Sans';
            width: 60%;
            text-align: center;
            border-bottom: 1px solid #000;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 10px;
          }
        `}
      </style>
    </Layout>
  );
}

export default makeNewsPage(Sports, 'sports');
