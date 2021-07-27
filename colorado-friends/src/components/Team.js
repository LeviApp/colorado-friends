import React, {useState} from 'react';
import '../SASS/team.sass'

function Team(props) {
    return (
        <div className="team">
            <div>
                <section>
                <h2>TEAM MEMBER 1</h2>
                <div>
                    <p>⬢ This is a non-profit organization that is built on the foundation of the church, whose aim is to lead children into growing a relationship with Jesus Christ.</p>
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
  
  export default Team;
  