import React, { Component } from 'react';
import Social from '../components/Social';

class About extends Component {
    render() {
    return (
        <div className="condiv">
            <div>
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h1>I'm Adam Roberts</h1>
            <h3>Full Stack Web <u>Developer</u> </h3>
            <br></br>
            <p>
                I started my software journey a lot like most other developers do these days. 
                Not working with computers at all, I worked in a pharmacy for 5 years. Almost 3 and a half years in to
                working at that pharmacy I was promoted to a role who's tasks required querying a SQL database to generate reports, 
                and that's when I knew that my place wasn't in the pharmacy any more I wanted to work with computers. I started out slow,
                talking my brother into enrolling in a code-academy course, it made sense to me, after I completed that course I had a thirst to 
                learn all there was about programming. I decided to make a career change but needed to put my head down and learn instead of getting
                an hour in here and there. I left the pharmacy and enrolled in General Assemblys Web Developer Boot-camp and didn't look back. 
                Dove in dedicating 6 months to learning everything that is needed to become a Jr Dev. I logged 12-16 hour days, traveling from Long Island to Manhattan.
                After all of it I graduated a Jr dev and have been working full time as a Full-Stack Dev ever since. 
    
            </p>
            
        </div>
        <Social/>
        </div>
)
}
}
export default About
