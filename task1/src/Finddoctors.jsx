import React, { useState, CSSProperties } from 'react'
import './Finddoctors.css'
import finddoctors from 'C:\\Users\\pc\\OneDrive\\Desktop\\task1\\task1\\src\\assets\\finddoctors.png'
import doctors from 'C:\\Users\\pc\\OneDrive\\Desktop\\task1\\task1\\src\\assets\\doctors.png'
import doctorInformation from 'C:\\Users\\pc\\OneDrive\\Desktop\\task1\\task1\\src\\assets\\doctorinformation.png'
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";
const Finddoctors = () => {
	const [expertise, setExpertise] = useState('');
	const [gender, setGender] = useState('');
	const [fees, setFees] = useState('');
	const [language, setLanguage] = useState('');
	const [flag, setFlag] = useState(false);
	const setFilters = async () => {
		if (expertise === 'Hair care' && gender === 'Female' && fees === 'Rs.0-Rs.500' && language === 'Hindi') {
			setFlag(true);
		}
	};
  return (
	<div>
		<div className="div1">
		    <img src={finddoctors} className="finddoctors-image"/>
		</div>
		<div className="select-main-div">
			<div className="select-div">
				<div>
					<select className="select-option" onChange={(e) => {setExpertise(e.target.value)}}><option>Expertise</option>
					<option value='Hair care'>Hair care</option></select>
				</div>
				<div>
				    <select className="select-option" onChange={(e) => {setGender(e.target.value)}}><option>Gender</option>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option></select>
				</div>
				<div>
				    <select className="select-option" onChange={(e) => {setFees(e.target.value)}}><option>Fees</option>
					<option value='Rs.0-Rs.500'>Rs.0-Rs.500</option></select>
				</div>
				<div>
				    <select className="select-option" onChange={(e) => {setLanguage(e.target.value)}}><option>Languages</option>
					<option value='Telugu'>Telugu</option>
					<option value='Hindi'>Hindi</option>
					<option value='English'>English</option></select>
				</div>
				<div>
				    <button className="select-option1" onClick={setFilters}>All filters</button>
				</div>
			</div>
		</div>
		<div className="selection-div">
			<div>
				<p className="selected-item">{expertise}&#160;&#160;X</p>
			</div>
			<div>
                <p className="selected-item">{gender}&#160;&#160;X</p>
			</div>
			<div>
				<p className="selected-item">{fees}&#160;&#160;X</p>
			</div>
			<div>
				<p className="selected-item">{language}&#160;&#160;X</p>
			</div>
		</div>
		<div> 
			{flag ?
			      <div className="doctors-main-div">
					<div className="doctors-div">
                       <div className="doctors">
						  <div className="doctor-image"> 
							 <img src={doctors} />
						  </div>
						  <div className="doctor-image"> 
							 <img src={doctorInformation} />
						  </div>
						  <div className="button-div">
							 <motion.button className="button1" whileTap={{ scale: 0.85 }}>View Profile</motion.button>
						  </div>
						  <div className="button-div">
							 <motion.button className="button2" whileTap={{ scale: 0.85 }}>Book a consultation</motion.button>
						  </div>
					   </div>
					</div>
					<div className="doctors-div">
                       <div className="doctors">
						  <div className="doctor-image"> 
							 <img src={doctors} />
						  </div>
						  <div className="doctor-image"> 
							 <img src={doctorInformation} />
						  </div>
						  <div className="button-div">
							 <motion.button className="button1" whileTap={{ scale: 0.85 }}>View Profile</motion.button>
						  </div>
						  <div className="button-div">
							 <motion.button className="button2" whileTap={{ scale: 0.85 }}>Book a consultation</motion.button>
						  </div>
					   </div>
					</div>
					<div className="doctors-div">
                       <div className="doctors">
						  <div className="doctor-image"> 
							 <img src={doctors} />
						  </div>
						  <div className="doctor-image"> 
							 <img src={doctorInformation} />
						  </div>
						  <div className="button-div">
							 <motion.button className="button1" whileTap={{ scale: 0.85 }}>View Profile</motion.button>
						  </div>
						  <div className="button-div">
							 <motion.button className="button2" whileTap={{ scale: 0.85 }}>Book a consultation</motion.button>
						  </div>
					   </div>
					</div>
				  </div>
			  : <div className="loader">
                  {/*<p className="loading"><i>Loading.......</i></p>*/}
				  <ClipLoader
        color='black'
        loading={true}
        cssOverride={true}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"/>
			 </div>
			 }
		</div>
	</div>
  )
}

export default Finddoctors
