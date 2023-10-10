// function based component below
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  //we can set state using useState and constructor and using props also.
  //state is used when we change it again and again without reloading the page.
  //props cannot be changed...we can set the state by passing the props....props are read only
  const capitalFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }
  //componentDidMount is a lifecycle method...it will run after the render function
  //render function will run after the constructor
  
  //useEffect has an empty array.. so it will run for only once.... will do same work which componentDidMount was doing
  useEffect(() => {
    document.title = `${capitalFirst(props.category)}- News Adda`
    update();
    //eslint-disable-next-line
  }, [])

  // const handleNext = async () => {
    // if(!(state.page + 1 > Math.ceil(state.totalResults/props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //   setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   setState({
    //     page: state.page+1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
  //   setPage(page + 1)
  //   update();
  // }
  // const handlePrevious = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${state.page - 1}&pageSize=${props.pageSize}`;
    // setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // setState({
    //   page: state.page-1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
  //   setPage(page - 1)
  //   update();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${page + 1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  return (
    <>
      <h1 className='text-center' style={{marginTop: '70px'}}>Read Today's Top Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >

        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
            {/* <div className="col-md-4">
            <NewsItem title='myTitle' description='myDesc' />
            </div>
            <div className="col-md-4">
            <NewsItem title='myTitle' description='myDesc' />
          </div> */}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={state.page <= 1} type="button" className="btn btn-dark my-3" onClick={handlePrevious}>&larr; Previous</button>
          <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark my-3" onClick={handleNext}>Next &rarr;</button>
        </div> */}
    </>
  )
}

export default News
News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


// class based component below

// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component"


// export class News extends Component {
//   static defaultProps = {
//     country: 'us',
//     pageSize: 6,
//     category: 'general'
//   }
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }
//   //we can set state using useState and constructor and using props also.
//   //state is used when we change it again and again without reloading the page.
//   //props cannot be changed...we can set the state by passing the props....props are read only
//   capitalFirst = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }
//   constructor(props) {
//     super(props);
//     console.log('i am constructor from news.js');
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//     document.title = `${this.capitalFirst(this.props.category)}- News Adda`
//   }

//   async update() {
//     this.props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     this.setState({ loading: true })
//     let data = await fetch(url);
//     this.props.setProgress(30)
//     let parsedData = await data.json();
//     this.props.setProgress(70)
//     console.log(parsedData);
//     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
//     this.props.setProgress(100)
//   }
//   //componentDidMount is a lifecycle method...it will run after the render function
//   //render function will run after the constructor
//   async componentDidMount() {
//     this.update();
//   }

//   handleNext = async () => {
//     // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     //   this.setState({loading: true});
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();

//     //   this.setState({
//     //     page: this.state.page+1,
//     //     articles: parsedData.articles,
//     //     loading: false
//     //   })
//     // }
//     this.setState({ page: this.state.page + 1 })
//     this.update();
//   }
//   handlePrevious = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();

//     // this.setState({
//     //   page: this.state.page-1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // })
//     this.setState({ page: this.state.page - 1 })
//     this.update();
//   }

//   fetchMoreData = async () => {
//     this.setState({ page: this.state.page + 1 })
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=551a161f31fd46f79c0dbeae2ad127d4&page=${this.state.page}&pageSize=${this.props.pageSize}`
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);
//     this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults})
//   };

//   render() {
//     return (
//       <>
//         <h1 className='text-center'>Read Today's Top Headlines</h1>
//         {this.state.loading && <Spinner />}
//         <InfiniteScroll
//           dataLength = {this.state.articles.length}
//           next = {this.fetchMoreData}
//           hasMore = {this.state.articles.length !== this.state.totalResults}
//           loader = {<Spinner />}
//           >

//           <div className="container">
//             <div className="row">
//               {this.state.articles.map((element) => {
//                 return <div className="col-md-4" key={element.url}>
//                   <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                 </div>
//               })}
//               {/* <div className="col-md-4">
//             <NewsItem title='myTitle' description='myDesc' />
//             </div>
//             <div className="col-md-4">
//             <NewsItem title='myTitle' description='myDesc' />
//           </div> */}
//             </div>
//           </div>
//         </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//           <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePrevious}>&larr; Previous</button>
//           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark my-3" onClick={this.handleNext}>Next &rarr;</button>
//         </div> */}
//       </>
//     )
//   }
// }

// export default News
