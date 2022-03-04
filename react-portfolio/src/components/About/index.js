import React from 'react';
import coverImage from './cover-image.png';
function About() {
  return (
    <section>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        With a pursuit in entrepreneurship and a background in business, I decided to start a career in software development. I'm currently seeking to utilize my skills and ambition in my next opportunity.
        </p>
      </div>
    </section>
  );
}

export default About;