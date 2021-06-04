import React, {useState} from 'react';
import '../SASS/about.sass'

function About(props) {
    return (
        <div className="about">
            <section>
            <h2>OVERVIEW</h2>
            <ul>
                <li>This is a non-profit organization that is built on the foundation of the church, whose aim is to lead children into growing a relationship with Jesus Christ.</li>
                <li>Through our soccer and drummer club, we create an environment of children loving each other.</li>
                <li>Through creating friendships, we encourage and equip our youth to pursue an enjoyable, structured program.</li>
                <li>We provide soccer and drummer training built on a Biblical foundation guided by adult leaders from the church.</li>
                <li>The founding of Colorado Friends of Children was exactly what we need to support cultural diversity in America. It is important that people learn about the rich dance heritage of African people. Jazz, Hip hop, Reggae, Traditional, as well as Innovative Hybrids all contribute to modern dance today.</li>
            </ul>
            </section>
            <section>
            <h2>DIRECTION</h2>
            <ul>
                <li>Soccer and drummer techniques</li>
                <li>We help bring out the children’s talent, acting as a tool to facilitate the health and wellbeing of the kids.</li>
                <li>We innovate and lay a foundation for a healthy future generation, free from cigarettes and drugs.</li>
            </ul>
            </section>
            <section>
            <h2>IMPLEMENTATION</h2>
            <ul>
                <li>We support children through educational, cultural, and recreational events.</li>
                <li>The organization conducts workshops, lectures, as well as concert and festival performances to reach the great community.</li>
            </ul>
            </section>
        </div>
    );
  }
  
  export default About;
  