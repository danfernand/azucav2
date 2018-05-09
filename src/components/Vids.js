// @flow

import * as React from 'react'

const Vids = () => {
  return (
    <div className="content-vids">
      <div className="videoWrapper">
    	 <iframe title="vid1" width="100%" src="https://www.youtube.com/embed/HlZtdrz3xts" frameBorder="0" allowFullScreen="" />
      </div>
      <div className="videoWrapper" style={{marginTop: '10px'}}>
    	 <iframe title="vid2" width="100%" src="https://www.youtube.com/embed/ndx3Vzf6FSg" frameBorder="0" allowFullScreen="" />
      </div>
    </div>
  )
}

export default Vids
