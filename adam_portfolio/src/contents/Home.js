import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Adam_0574.jpg'
import Social from '../components/Social';

class Home extends Component {
    render() {
        return(
        
        <div className="Adam home">
            <img src={profilepic} alt="Adam Profile" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Adam Roberts,', 'I am a Software Developer']} speed={100} eraseDelay={700}/>
        
        <Social />

        </div>
        
        )}
}

export default Home