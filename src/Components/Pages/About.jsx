import React from 'react';
import './Section.css';
import './about.css';
import sichImage from '../../assets/sich.png'; 
import threeImage from '../../assets/3.png';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className='grid grid -1'>
      
<figure>
    <img src={threeImage } alt="" className="autoRotate"/>
</figure>
<h2 className="autoShow">About Me</h2>
<p> <span>B</span>ishnu pada is simply dummy text of  
  printing and typesetting industry. Lorem<br/>
  Ipsum has been the industry's standard 
  dummy text ever since the 1500s, when a<br/>
  unknown printer took a galley of type and 
  scrambled it to make a type specimen <br/>
  It has survived not only five centuries, 
  
    including versions of Lorem Ipsum.</p>
</div>
    </section>
  );
};
export default About;



