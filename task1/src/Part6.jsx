import React from 'react'
import './Part6.css'
import frimage from './assets/frimage.png'
import stars from './assets/stars.png'
const Part6 = () => {
  return (
	<div>
	   <div className="container"> 
           <div className="box">
		   <div className="first-box">
                <div className="first-box-div">
                  <div>
                      <h2 className="first-box-text">Featured Reviews (102)</h2>
                  </div>
				  <div style={{"color": "transparent"}}>
					  kkjdjkkllkwkwkk
				  </div>
			 </div>
			 </div>
			 <div className="fr-div">
			 <div className="we-item-div">
				<div className="we-item">
					<div>
                       <img src={frimage}/>
					</div>
					<div className="we-item-p">
						<p className="we-item-p1">Alice Hightower</p>
						<p className="we-item-p2">Consulted for Skin care</p>
					</div>
				</div>
				<div>
					<p className="we-item-p2">20 January 2023</p>
				</div>
			 </div>
			 <div className="stars">
				<div>
				   <img src={stars}/>
				</div>
				<div style={{"color": "transparent"}}>
					kkjdjkkllkwkwkk
				</div>
			 </div>
			 <div className="fr-text">
				<div className="fr-t">
				   <p>Might be bit early to confirm but yes I can notice the difference in my hairfall write again after using it for longer periods</p>
				</div>
			 </div>
			 </div>
			 <div className="fr-div">
			 <div className="we-item-div">
				<div className="we-item">
					<div>
                       <img src={frimage}/>
					</div>
					<div className="we-item-p">
						<p className="we-item-p1">Alice Hightower</p>
						<p className="we-item-p2">Consulted for Pregnancy</p>
					</div>
				</div>
				<div>
					<p className="we-item-p2">20 January 2023</p>
				</div>
			 </div>
			 <div className="stars">
				<div>
				   <img src={stars}/>
				</div>
				<div style={{"color": "transparent"}}>
					kkjdjkkllkwkwkkjjkkjjk
				</div>
			 </div>
			 <div className="fr-text">
				<div className="fr-t">
				   <p>Might be bit early to confirm but yes I can notice the difference in my hairfall write again after using it for longer periods</p>
				</div>
			 </div>
			 </div>
			 </div>
			 </div>
	</div>
  )
}
export default Part6