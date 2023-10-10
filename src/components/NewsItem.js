// function based component below
import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card" >
        <div style={{ display: 'grid', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
          <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>
        <img height="200px" src={!imageUrl ? 'https://media.cnn.com/api/v1/images/stellar/prod/230723074350-01-spain-elections-2023.jpg?c=16x9&q=w_800,c_fill' : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body"> 
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More Details</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem



// class based component below
// import React, { Component } from 'react'

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//     return (
//       <div>
//         <div className="card" style={{ width: "27rem" }}>
//           <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>
//             <span className="badge rounded-pill bg-danger" >{source}</span>
//           </div>
//           <img src={!imageUrl ? 'https://media.cnn.com/api/v1/images/stellar/prod/230723074350-01-spain-elections-2023.jpg?c=16x9&q=w_800,c_fill' : imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text"><small className="text-body-secondary">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
//             <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More Details</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default NewsItem
