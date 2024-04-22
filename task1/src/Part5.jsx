import React from 'react'
import './Part5.css'
import weimage from './assets/weimage.png'
const Part5 = () => {
  return (
	<div>
	   <div className="container"> 
           <div className="box">
		   <div className="first-box">
                <div className="first-box-div">
                  <div>
                      <h2 className="first-box-text">My Work Experience</h2>
                  </div>
				  <div style={{"color": "transparent"}}>
					  kkjdjkkllkwkwkk
				  </div>
			 </div>
			 </div>
			 <div className="we-div">
				<div>
				   <h4>I HAVE BEEN IN PRATICE FOR 7+ YEARS</h4>
				</div>
				<div style={{"color": "transparent"}}>
					  kkjdjkkllkwkwkk
				  </div>
			 </div>
			 <hr className="horizontal"/>
			 <div className="we-item-div">
				<div className="we-item">
					<div>
                       <img src={weimage}/>
					</div>
					<div className="we-item-p">
						<p className="we-item-p1">Mid town Medical Clinic</p>
						<p className="we-item-p2">Senior doctor</p>
					</div>
				</div>
				<div>
					<p className="we-item-p2">2016-PRESENT</p>
				</div>
			 </div>
			 <div className="we-item-div">
				<div className="we-item">
					<div>
                       <img src={weimage}/>
					</div>
					<div className="we-item-p">
						<p className="we-item-p1">Mid town Medical Clinic</p>
						<p className="we-item-p2">Senior doctor</p>
					</div>
				</div>
				<div>
					<p className="we-item-p2">2010-PRESENT</p>
				</div>
			 </div>
			 </div>
			 </div>
	</div>
  )
}
export default Part5