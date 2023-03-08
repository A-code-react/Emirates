import React from 'react'
import './Mp.css'

function MainProject() {
  return (
    <form action="">
      <div>
        <div className='wrapper'>
       <div className='ggg'>
       <header>
            <span style={{ float: 'left' }}><h4 ><a href="Log in to earn and spend Skywards Miles"style={{color:'red'}} >Log in to earn and spend Skywards Miles</a></h4></span> <span style={{ float: 'right' }}><h4><a href="Advanced search"style={{color:'red'}} >Advanced search</a></h4></span>
          </header>

          <section className='columns'>
            <div className='column'>
              <h6>Departure airport</h6>
              <p>
                <select name="state" id="" style={{ fontSize: '30px' }}>
                  <option value="ab">Abu dhabi (ABD)</option>
                  <option value="ab">China(CH)</option>
                  <option value="ab"> Russia(RS)</option>
                  <option value="ab">France(FR)</option>
                  <option value="ab">Turkey(TR)</option>
                  <option value="ab">Netherland(NTR)</option>
                  <option value="ab">Australia(AUS)</option>
                  <option value="ab">Africa(AFR)</option>
                  <option value="ab">New zealand(NZ)</option>
                  <option value="ab">Mumbai (BOM)</option>

                </select>



              </p>
            </div>

            <div className='column'>
              <h4>Arrival airport</h4>
              <select name="state" id="" style={{ fontSize: '30px' }}>
                <option value="ab"></option>
                <option value="ab">Abu dhabi (ABD)</option>
                <option value="ab">China(CH)</option>
                <option value="ab"> Russia(RS)</option>
                <option value="ab">France(FR)</option>
                <option value="ab">Turkey(TR)</option>
                <option value="ab">Netherland(NTR)</option>
                <option value="ab">Australia(AUS)</option>
                <option value="ab">Africa(AFR)</option>
                <option value="ab">New zealand(NZ)</option>
                <option value="ab">Mumbai (BOM)</option>

              </select>

            </div>

            <div className='column'>
              <h4 style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>Continue</h4>
            </div>

          </section>
       </div>
          <br />

          <section>

            
            <div className='sg'>

              <div>
                <h1 style={{ color: 'red' }}>Emirates flights from India</h1>
              </div>
              <hr />
              <div className='abc'>

                Find all flights departing from India on emirates.com. Searching for flights from India to any destination is easy. Browse the list of cities we fly to from India and select your chosen destination city to see our flight schedules and destination guides.

                Book flights from India to your destination quickly and securely on emirates.com. Our Best Price Guarantee means you can rest assured that you’ll get the best fare for your flights when you see the symbol.

                Our destination guides offer expert tips from our cabin crew on what to do and the best places to visit – as well as recommendations for the best hotels, activities and eateries in town.

                Book your flights from India today and look forward to gourmet dining, award-winning inflight entertainment and exceptional service – no matter which cabin class you’re travelling in.

                We look forward to welcoming you on board.


              </div>
            </div>


          </section>

        </div>

      </div>
    </form>
  )
}

export default MainProject

