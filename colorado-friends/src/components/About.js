import React, {useState} from 'react';
import '../SASS/about.sass'

function About(props) {
    return (
        <div className="about">
            <div>
                <section>
                <h2>OVERVIEW</h2>
                <div>
                    <p>⬢ This is a non-profit organization that is built on the foundation of the church, whose aim is to lead children into growing a relationship with Jesus Christ.</p>
                    <br />
                    <p>⬢ Through our soccer and drummer club, we create an environment of children loving each other.</p>
                    <br />
                    <p>⬢ Through creating friendships, we encourage and equip our youth to pursue an enjoyable, structured program.</p>
                    <br />
                    <p>⬢ We provide soccer and drummer training built on a Biblical foundation guided by adult leaders from the church.</p>
                    <br />
                    <p>⬢ The founding of Colorado Friends of Children was exactly what we need to support cultural diversity in America. It is important that people learn about the rich dance heritage of African people. Jazz, Hip hop, Reggae, Traditional, as well as Innovative Hybrids all contribute to modern dance today.</p>
                </div>
                </section>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/255px-Flag_of_Uganda.svg.png" alt="Founder Chris Musaazi" />
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/255px-Flag_of_Uganda.svg.png" alt="Founder Chris Musaazi" />
                <section>
                <h2>DIRECTION</h2>
                <div>
                    <p>⬢ Soccer and drummer techniques</p>
                    <br />
                    <p>⬢ We help bring out the children’s talent, acting as a tool to facilitate the health and wellbeing of the kids.</p>
                    <br />
                    <p>⬢ We innovate and lay a foundation for a healthy future generation, free from cigarettes and drugs.</p>
                </div>
                </section>
            </div>
            <div>
            <section>
            <h2>IMPLEMENTATION</h2>
            <div>
                <p>⬢ We support children through educational, cultural, and recreational events.</p>
                <br />
                <p>⬢ The organization conducts workshops, lectures, as well as concert and festival performances to reach the great community.</p>
            </div>
            </section>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/255px-Flag_of_Uganda.svg.png" alt="Founder Chris Musaazi" />
            </div>
        </div>
    );
  }
  
  export default About;
  