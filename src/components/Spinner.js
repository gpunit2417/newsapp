// function based component
import React from 'react'
import loading from './loading.gif.gif'

const Spinner = () => {
    return (
        <div className="text-center">
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Spinner


// class based component

// import React, { Component } from 'react'
// import loading from './loading.gif.gif'

// export default class Spinner extends Component {
//   render() {
//     return (
//         <div className="text-center">
//             <img src={loading} alt="loading" />
//         </div>
//     )
//   }
// }
