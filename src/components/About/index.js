import React from 'react';
import Footer from '../Footer';

function About() {
  return (
    <section className="flex-row">
      <div className="my-2">
        <h1 className="flex-row">Ian Joseph</h1>
        <p>
        Full Stack Web Developer
        </p>
        <p className="skills">Javascript • HTML • CSS • jQuery • Bootstrap • Git/GitHub/Heroku • Node • React • 
          MySQL • MongoDB • Express • GraphQL
        </p>
        <Footer/>
        <p>
        ityjoseph@gmail.com
        </p>
      </div>
    </section>
  );
}

export default About;