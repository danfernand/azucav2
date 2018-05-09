// @flow

import * as React from 'react'

const Reservations = () => {
  return (
    <div className="content-reservations">
      <p>
        {'Please use our online reservation system below'}
      </p>
      <div style={{maxWidth: '350px', margin: '0px auto'}}>
        <iframe title="order now" id="widget" height="410" src="http://www.reservationgenie.com/restaurants/298-azuca-nuevo-latino-san-antonio/widget/vertical_full" style={{border: 'none', background: 'none', width: '100%'}}></iframe>
      </div>
      <p>
        {'Or'}
      </p>
      <p>
        {'Call '}
        <a href="tel:+12102255550">
          {'210-225-5550'}
        </a>
        {' and our friendly staff can assist you.'}
      </p>
      <p>
        {'Our reservation line is open Monday to Friday from 9am to 10pm and on Saturday from 10am to 10pm.'}
      </p>
      <p>
        {'Reservations are not accepted in the Bar Area.'}
      </p>
      <p className="margin-on-top">
        {'For reservations of parties larger than 10, please contact Rene Fernandez at:'}
        <br />
        <a href="tel:+12102255550">
          {'210-225-5550'}
        </a>
        {' or '}
        <a href="mailto:chef@azuca.net">
          {'chef@azuca.net'}
        </a>
      </p>
      <p>{'Dining Hours For The Restaurant'}</p>
      <p>
        {'Monday – Thursday, 11:30am – 9:30pm'}
      </p>
      <p>
        {'Friday – Saturday, 11:30pm – 10:30pm'}
      </p>
      <p>
        {'Sunday, 5pm– 9:30pm'}
      </p>
    </div>
  )
}

export default Reservations
