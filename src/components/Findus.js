// @flow

import * as React from 'react'

const Findus = () => {
  return (
    <div className="content-findus">
      <h2>{'709 South Alamo, San Antonio, TX 78205'}</h2>
      <div>
      	<div>{'Distances From Azúca To:'}</div>
      	<div>{'Convention Center - 1/2 mile'}</div>
      	<div>{'Airport - 9.6 miles'}</div>
      	<div>{'Downtown Hotel - 1/2 mile'}</div>
      	<div>{'Alamo Dome - 1/2 mile'}</div>
      	<div>{'AT&amp;T Center - 4 miles'}</div>
      </div>
      <div className="top-ten">
      	<iframe title="googleMaps" width="80%" height="450" frameBorder="0" align="middle" style={{border: 0}} src="https://www.google.com/maps/embed/v1/search?q=Azuca%20Nuevo%20Latino%2C%20South%20Alamo%20Street%2C%20San%20Antonio%2C%20TX%2C%20United%20States&amp;key=AIzaSyB4Uz0InzDxteefTQv0O_rt0WRwnuacyOk" />
      </div>
    </div>
  )
}

export default Findus
