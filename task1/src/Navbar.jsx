import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import './Navbar.css'
const Navbar = () => {
  return (
	<div>
	   <div className="navbar">
		  <div className="navbar-div">
			<div className="navbar-div-child">
				<div className="navbar-div-item">
					<img src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FtvcqIh0Zk3rjG2~mAzdN6TBJMvkoe8RNA697ccuf6bjSHERbJH~zyeQlIh8frOPlHxN63G3cXnt6XIp2EvfkPLJN7WoAyMJMPX6Tsm7WdO2y~C6v85wN9Cv6qLiR2yWPiD-RXFAhYudm1PetPy0GPjCIbbCXUYjjE4L~7xiGBT79Qanj1GwUhKYwuEtNkPtfC5SMKh7iocOVRQa-ItwPwGZWN4x9f~05x1fFx-~YBrlG0AkIP90~CzRNqt31f3o5pFEynoQ1ORV~kgu1doeWEcIA8oqVxWfi4mamKQf1nI7x5kXhoBra4D-phaK1RNHkvdLqiQwQvsnAUkK4Ery-g__" className="navbar-image"/>
				</div>
				<div className="navbar-div-item-p">
					<Link to="/" className="link1">Home</Link>				
				</div>
				<div className="navbar-div-item-p1">
					<Link to="/finddoctors" className="link2"><b>Find&#160;Doctors</b></Link>
				</div>
				<div className="navbar-div-item-p">
					<Link to="/" className="link3">About&#160;Us</Link>
				</div>
			</div>
			<div className="navbar-div-child">
				<div className="navbar-div-item">
					<motion.button className="navbar-button" whileTap={{ scale: 0.85 }}>Login</motion.button>
				</div>
				<div className="navbar-div-item">
					<motion.button className="navbar-button1" whileTap={{ scale: 0.85 }}>Sign-up</motion.button>
				</div>
			</div>
		  </div>
	   </div>
	</div>
  )
}

export default Navbar
