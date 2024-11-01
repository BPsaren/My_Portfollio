import React from 'react';
import './Section.css'; // Import the external CSS
// Import the image
import backgroundImage from '../../assets/bishnupada.png'; // Adjust the path to your image


const Home = () => {
  return (
    <div>


      <section id="home" className="section home">
      <img src={backgroundImage} alt="Laptop" className="home-cover-image" />
      </section>


      <div className='Welcome-Font'>
      
          <h1 >Mern stack & <br/> software developer</h1>

       </div>


      <div className='Hire-Me'>
          <bottom>Hire me</bottom>
      </div>


        <div className='Resume'>
          <bottom>Download Resume</bottom>
       </div>
    
        <div className='imageBottom'>
          <div className="imageBottom-Contain">

          <h2>5+</h2>
          <h2>14+</h2>
          <h2>300+</h2>
          <h2>177+</h2>
          </div>
          <div className='paragraph-align'>
       <p>Years Of experience</p>
       <p>Awards Winning</p>
       <p>Projects completed</p>
       <p>Happy Clients </p>
     
       </div>
        </div>

      </div>
    
  );
};

export default Home;
