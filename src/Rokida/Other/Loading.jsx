import React from 'react'
import '../css/Loading.less'
const Loading = () => {
    return(
        <div className="Loading">
            <div className="spiner"></div>
            <h1>Loading...</h1>
        </div>
    )
}
export default React.memo(Loading)