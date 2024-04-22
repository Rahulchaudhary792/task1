import React from 'react'
import './Part3.css'
import simage1 from './assets/sImage.png'
import simage2 from './assets/sImage1.png'
import simage3 from './assets/sImage2.png'
import simage4 from './assets/sImage3.png'
const Part3 = () => {
  return (
	<div>
	   <div className="container"> 
           <div className="box">
		   <div className="first-box">
                <div className="first-box-div">
                  <div>
                      <h2 className="first-box-text">Iam specialized in</h2>
                  </div>
				  <div style={{"color": "transparent"}}>
					  kkjdjkkllkwkwkk
				  </div>
			 </div>
			 </div>
			 <div className="s-div">
				<div>
                   <img src={simage1}/>
				</div>
				<div>
				   <img src={simage2}/>
				</div>
				<div>
				   <img src={simage3}/>
				</div>
				<div>
				   <img src={simage4}/>
				</div>
			 </div>
		   </div>
	   </div>
	</div>
  )
}
export default Part3