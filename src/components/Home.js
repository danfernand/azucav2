// @flow

import * as React from 'react'

const Home = () => {
  const dayStyles = { marginTop: '20px', marginBottom: '5px' }
  return (
    <div className="content-home">
      <p>
        {'It would be a great pleasure to welcome you to Azuca, the first Nuevo Latino Restaurant in San Antonio. The idea of our Restaurant was inspired by a desire to unite the cuisine, service and atmosphere of the Caribbean, Central and Latin America with all of its glamour and vitality in one place - Azuca. It is our absolute goal to consistently provide our guests with an enjoyable and unique dining experience. We do this by providing exceptional service, a unique Nuevo Latino Cuisine, and a diverse palette of entertainment.'}
      </p>
      <p>
        {'And of course, don\'t forget to subscribe to our mailing list'}
      </p>
      <p>
        {'Passionately yours. Rene Fernandez'}
      </p>
      <div className="full">
      	{'Opening Hours'}
      </div>
      <div className="full" style={dayStyles}>
        {'Monday to Thursday'}
      </div>
      <div className="full">
        {'11:00 AM to 9:30 PM'}
      </div>
      <div className="full" style={dayStyles}>
	       {'Friday & Saturday'}
      </div>
      <div className="half">
      	{'Restaurant'}
      </div>
      <div className="half">
      	{'11:00 AM to 10:00 PM'}
      </div>
      <div className="half">
      	{'Music ($5 cover)'}
      </div>
      <div className="half">
      	{'10:00 PM to 2:00 AM'}
      </div>
      <div className="full" style={dayStyles}>
      	{'Sunday'}
      </div>
      <div className="half">
      	{'Brunch'}
      </div>
      <div className="half">
      	{'11:00 AM to 2:30 PM'}
      </div>
      <div className="half">
      	{'Dinner'}
      </div>
      <div className="half">
      	{'5:00 PM  to  9:30 PM'}
      </div>
    </div>
  )
}

export default Home
