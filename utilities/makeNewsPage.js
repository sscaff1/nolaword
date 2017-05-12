import React, { Component, createElement } from 'react';
import makeRequest from './makeRequest';

export default function makeNewsPage(WrappedComponent, newsDesk) {
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
          {createElement(WrappedComponent, { url, articles })}
        </div>
      )
    }
  }
  return Page;
}
