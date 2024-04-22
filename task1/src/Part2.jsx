import React, { useState } from 'react'
import { motion } from "framer-motion";
import './Part2.css'
import vector1 from './assets/Vector.png'
import vector2 from './assets/vector1.png'
import vector3 from './assets/Vector2.png'
import vector4 from './assets/Vector3.png'
import calender from './assets/calender.png'
import left from './assets/left.png'
import right from './assets/right.png'
const Part2 = () => {
  const [read, setRead] = useState('Read More');
  const [readMore, setReadMore] = useState(false);
  const [text, setText] = useState('Follow +');
  const handleClick = () => {
     if (readMore == false) {
        setReadMore(true);     
        setRead('Read Less');
     }
     else {
        setReadMore(false);
        setRead('Read More');
     }
  }
  const [styles, setStyles] = useState({"border": "1px solid #3A643B",
	"border-radius": "10px",
	/*color: #585858;*/
	"color": "white",
	/*background-color: #FFFFFF;*/
	"background-color": "rgb(64, 93, 230)",
	"font-family": "Arial",
	"padding": "7px 20px",
	"font-size": "17px"});
  const handleFollow = () => {
     setText('Following');
     setStyles({"border": "1px solid #3A643B",
     "border-radius": "10px",
     "color": "#585858",
     /*"color": "white",*/
     "background-color": "white",
     /*"background-color": "rgb(33, 33, 227)",*/
     "font-family": "Arial",
     "padding": "7px 20px",
     "font-size": "17px"})
  }
  return (
	<div>
       <div className="container">
         <div className="box1">
             <div className="first-box">
                <div className="first-box-div">
                  <div>
                      <h2 className="first-box-text">A Little About me</h2>
                  </div>
                  <div>
                      <button style={styles} onClick={handleFollow}>{text}</button>
                  </div>
                </div>
             </div>
                <div className="p-t-div">
                    <div className="p-text-div">
                       <p className="p-t">Hello I am Dr. Bruce Willis a Gynaecologist in sanjivni Hospital Surat. Love to work with all my hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the. As a gynecologist, my experience is multifaceted and deeply rewarding. Every day, I have the privilege of working closely with women of all ages, backgrounds, and walks of life. Patient care lies at the heart of my practice. I strive to create a safe and comfortable environment where my patients feel empowered to discuss their concerns openly. Whether it's a routine check-up, prenatal care, or addressing reproductive health issues, I approach each patient with empathy, compassion, and respect for their unique circumstances.
                       Educating women about preventive health measures is a crucial aspect of my role. From promoting regular screenings for cervical and breast cancer to discussing contraceptive options and sexually transmitted infections (STIs) prevention, I aim to empower women to take charge of their health and make informed decisions.

Guiding expectant mothers through the journey of pregnancy is both a privilege and a responsibility. From the initial prenatal visits to monitoring fetal development and addressing any concerns that may arise, I work closely with my patients to ensure the health and well-being of both mother and baby.

Reproductive health encompasses a wide range of issues, from menstrual disorders and infertility to menopause management.......


</p>                         {readMore ? <p className="p-t">I provide comprehensive care tailored to each patient's needs, whether it involves addressing menstrual irregularities, exploring fertility options, or managing symptoms associated with menopause</p> : <p></p>}
                             <span className="rd" onClick={handleClick}>{read}</span>
                             <hr/>
                    </div>
                </div>
                <div className="f-div">
                  <div>
                     <h4 className="l-sp">Language Spoken</h4>
                  </div>
                  <div>
                     <h4 className="lan">English</h4>
                  </div>
                  <div>
                     <h4 className="lan">Hindi</h4>
                  </div>
                  <div>
                     <h4 className="lan">Telugu</h4>
                  </div>
                </div>
                <div className="social-media-icons">
                     <div className="image-div">
                           <img src={vector1}/>
                     </div>
                     <div className="image-div">
                           <img src={vector2}/>
                     </div>
                     <div className="image-div">
                           <img src={vector3}/>
                     </div>
                     <div className="image-div">
                           <img src={vector4}/>
                     </div>
                </div>
         </div>
         <div className="box2">
            <div className="box2-div">
               <div className="box2-item">
                   <div>
                       <h3 className="box2-item-1">Appointment Fee</h3>
                   </div>
                   <div>
                       <h3 className="box2-item-2">&#8377;699.00</h3>
                   </div>
               </div>
            </div>
            <div>

            </div>
            <div className="container1">
               <h1 className="heading">Select your mode of session</h1>
               <hr className="line" />
            </div>
            <div className="container2">
               <div className="box2-item1"><h3 className="box2-h3">In-Clinic<p className="box2-p">45 Mins</p></h3></div>
               <div className="box2-item1"><h3 className="box2-h3">Video<p className="box2-p">45 Mins</p></h3></div>
               <div className="box2-item1"><h3 className="box2-h3">Chat<p className="box2-p">10 Mins</p></h3></div>
           </div>
           <div className="container1">
               <h1 className="heading">Pick a time slot</h1>
               <hr className="line1" />
               <div><img src={calender}/></div>
            </div>
            <div className="time-slot">
               <div className="container2">
                  <img src={left}/>
                  <div className="box2-item1"><h3 className="box2-h2">Mon, 10 Oct<p className="box2-p1">10 slots</p></h3></div>
                  <div className="box2-item1"><h3 className="box2-h2">Tue, 11 Oct<p className="box2-p2">02 slots</p></h3></div>
                  <div className="box2-item1"><h3 className="box2-h2">Wed, 12 Oct<p className="box2-p3">05 slots</p></h3></div>
                  <img src={right}/>
               </div>
            </div>
            <div className="timeslot-day-div">
               <h4 className="timeslot-day">Morning</h4>
            </div>
            <div className="timings-div">
               <div><h3 className="timing">09:00 AM</h3></div>
               <div><h3 className="timing">09:30 AM</h3></div>
               <div><h3 className="timing">10:00 AM</h3></div>
               <div><h3 className="timing">10:15 AM</h3></div>
               <div><h3 className="timing">10:45 AM</h3></div>
               <div><h3 className="timing">11:00 AM</h3></div>
            </div>
            <div className="timeslot-day-div">
               <h4 className="timeslot-day">Evening</h4>
            </div>
            <div className="timings-div">
               <div><h3 className="timing">04:00 PM</h3></div>
               <div><h3 className="timing">04:15 PM</h3></div>
               <div><h3 className="timing">04:30 PM</h3></div>
               <div><h3 className="timing">04:45 PM</h3></div>
               <div><h3 className="timing">05:15 PM</h3></div>
            </div>
            <div className="button-div">
					<motion.button className="p-button1" whileTap={{ scale: 0.85 }}>Make An Appointment</motion.button>
				</div>
         </div>
       </div>
	</div>
  )
}
export default Part2