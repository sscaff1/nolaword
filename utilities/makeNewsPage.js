import React, { Component } from 'react';
import { Layout } from '../layouts';
import { Article, Ad } from '../components';
import makeRequest from './makeRequest';

export default function makeNewsPage(newsDesk, title) {
  class Page extends Component {
    state = {
      articles: [],
      page: 1,
      fetching: false,
    }

    static async getInitialProps ({ req }) {
      const origin = req ? `${req.protocol}://${req.get('Host')}` : window.location.origin
      const articles = await makeRequest(origin, newsDesk, 0)
      return {
        articles,
        origin,
      };
    }

    componentDidMount() {
      window.addEventListener('scroll', this.scrollListener);
      window.addEventListener('resize', this.scrollListener);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('resize', this.scrollListener);
    }

    scrollListener = () => {
      const height = window.innerHeight;
      const pageYOffset = window.pageYOffset;
      const docHeight = this.layout.offsetHeight;
      if ((docHeight - height - pageYOffset < 50) && !this.state.fetching) {
        this.setState({ fetching: true }, this.getArticles);
      }
    }

    getArticles = async () => {
      const { page, articles: currentArticles } = this.state;
      const articles = await makeRequest(this.props.origin, newsDesk, page);
      this.setState({
        articles: [
          ...currentArticles,
          ...articles,
        ],
        fetching: false,
        page: this.state.page + 1,
      });
    }

    render() {
      const { articles: initialArticles, url } = this.props;
      const articles = [
        ...initialArticles,
        ...this.state.articles,
      ];
      return (
        <div ref={ref => this.layout = ref}>
          <Layout url={url}>
            <h2>{title}</h2>
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
                    headline={article.headline.print_headline || article.headline.main}
                    image={image}
                    snippet={article.snippet}
                    url={article.web_url}
                    pub_date={article.pub_date}
                    source={article.byline.organization}
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
        </div>
      )
    }
  }
  return Page;
}
