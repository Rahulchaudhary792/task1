import React, { useState } from 'react'
import { motion } from "framer-motion";
import './Part1.css'
const Modal = ({ imageUrl, onClose }) => {
	return (
	  <div className="modal-overlay" onClick={onClose}>
		<div className="modal-content modal-div">
		  <img src={imageUrl} alt="Modal" className="doctor-pic-image"/>
		</div>
	  </div>
	);
  };
const Part1 = () => {
		const [modalImageUrl, setModalImageUrl] = useState(null);
		const [modalIsOpen, setModalIsOpen] = useState(false);
		const openModal = (imageUrl) => {
		  setModalImageUrl(imageUrl);
		  setModalIsOpen(true);
		};
		const closeModal = () => {
		  setModalImageUrl(null);
		  setModalIsOpen(false);
		};
  return (
	<div>
	   <div className="image-part1-div">
		  <img src="https://s3-alpha-sig.figma.com/img/2620/7166/a35e1a20facdf3d56db655152bcc6d78?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eg5d0uuq~ixYHa3F97b7930t6MElpaAnUQcvDt3KmS0IOD8zIFTsNJ5CxK6TmsX7WGwXwQJOqa-nsqzyMVsNF-4BCunYYpZrsiGthbnl1q2ZvoUXdTe333y~juGgEZPzYS8fB~d7N49Wfb8I3TYGepMnKnF4BHrFgLGLE7~M5Tf5qGO0Dlud3FREfjZwGcQEFQQvyG-4ek3Lujgaew5WfQzKFLv5IBuWBy2ZcSDvjnTMR-GcEJizih1SXXrtyaisCKkbu26uQZ11xQ5R6UsUsw42S1z9g-iJXNJ-dctW~TIX4ipohNUC0TODqaD0ATz0dTb~yaGlGP7f5l4t5Bou0Q__" className="image-part1"/>
	   </div>
		<div>
	      <div className="image-part1-div">
				<div className="image-part1-next-div">
					<div className="part1-div">
						<div>
							<img src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oen0QfknI4qf6qmgX~ar9NXcmnzj0PELT3IvqseAdUDwjvD1qj-UVTj5DuRj~MyVBNmLXIyG9Gr6nT~L1yJqL0i1RoF4JwzZd0WlL29KWZ5a9qoWPtXH6SozWWl3zvbEbUmDBBYDGJWT5iPaNe~2V6ywZXm-8KJLYPNs4iCiB0SCbQIjindq5VC-YTdI6ebQUGFbw2vgJzgoA089c0zw6f8JD4VP6TgXFvhYzsIZX4sEr--yK8NWifD9x7nEzJZ6j9eRst86yCm2sDEYEstr54YJyK4BM8Z0zOmbBjbZxhbawdooaScKN9PLcYNhqQppFFQGTck1JlCo5e7mR49JNg__" className="image-part1-next-div-image" onClick={() => openModal('https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oen0QfknI4qf6qmgX~ar9NXcmnzj0PELT3IvqseAdUDwjvD1qj-UVTj5DuRj~MyVBNmLXIyG9Gr6nT~L1yJqL0i1RoF4JwzZd0WlL29KWZ5a9qoWPtXH6SozWWl3zvbEbUmDBBYDGJWT5iPaNe~2V6ywZXm-8KJLYPNs4iCiB0SCbQIjindq5VC-YTdI6ebQUGFbw2vgJzgoA089c0zw6f8JD4VP6TgXFvhYzsIZX4sEr--yK8NWifD9x7nEzJZ6j9eRst86yCm2sDEYEstr54YJyK4BM8Z0zOmbBjbZxhbawdooaScKN9PLcYNhqQppFFQGTck1JlCo5e7mR49JNg__')}/>
						</div>
						<div className="p-text">
							<h2 className="p-name">Dr. Bruce Willis<img src="https://static.vecteezy.com/system/resources/previews/015/304/837/original/blue-verified-tick-valid-seal-icon-in-flat-style-design-isolated-on-white-background-validation-concept-vector.jpg" className="right-mark-image"/></h2>
							<p className="p-text">Gynecologist</p>
							<p className="p-text1">4.2<img src="https://tse3.mm.bing.net/th?id=OIP.ImyTPLm5r8wbHGSNn6uqDgHaCe&pid=Api&P=0&h=180" className="stars-image"/></p>
						</div>
						<div>
							<h3 className="p-text">Followers</h3>
							<p className="p-stats">850</p>
						</div>
						<div>
							<h3 className="p-text">Following</h3>
							<p className="p-stats">18K</p>
						</div>
						<div>
							<h3 className="p-text">Post</h3>
							<p className="p-stats">250</p>
						</div>
						<div>
							<motion.button className="p-button" whileTap={{ scale: 0.85 }}>Book an Appointment</motion.button>
						</div>
					</div>
				</div>
		  </div>
	   </div>
	   {modalImageUrl && (
        <Modal imageUrl={modalImageUrl} 
		isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 2,
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            width: '60%',
            maxWidth: '600px',
            maxHeight: '80%',
            overflow: 'auto',
            zIndex: 2,
          }, }} onClose={closeModal} />
      )}
	</div>
  )
}

export default Part1
