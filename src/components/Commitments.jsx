import React from 'react'
import {data} from '../myData.json'

const Commitments = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <div className="text_banner">
            {
              data[0].who_we_are.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
          <div className="image_banner">
            <img className='gradient_bg' src="" alt="gradientBg" style={{height:"450px",width:"350px",borderRadius:"20px"}} />
            <img src="./OIP.jpg" alt="food" style= {{borderRadius:"20px",opacity:"0.8",height:"800px",width:"800px"}} />
          </div>
          <div className="text_banner">
            {
              data[0].who_we_are.slice(2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </div>
        </div>
        </section> 
    </>
  )
}

export default Commitments
