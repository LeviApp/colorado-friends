import React, {useState} from 'react';
import founder from '../images/FounderChrisMusaazi.jpg';
import '../SASS/founder.sass'
function Founder(props) {
    return (
        <div className="founder">
            <section>
            <h2>CHRIS MUSAAZI</h2>
            <ul>
                <li>Chris Musaazi is from Uganda, Africa.  Chris takes a vision and makes it reality through sound strategy. He sees the threads of opportunity in the young generation that wind through an organization. He brings children together as a whole to help them extend their thinking and uplift their talents through different day-to-day activities to meet their future goals. Chris was a soccer player in one of Uganda's clubs, URA, and also served as a sports talent manager in an organization called Kampala Friends of Street Children. Chris studied Forestry Science, Diploma in Clearing and Forwarding from the Kampala College of Business Studies at Makerere University. Currently, he is a student of Ashworth School of Plumbing, USA.</li>
            </ul>
            </section>
            <img src={founder} alt="Founder Chris Musaazi" />
        </div>
    );
  }
  
  export default Founder;
  