import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => (
    <main>
        <div className="about">
            <h2>About Study Cards App</h2>
            <p>
                Study Cards App helps you create, review, and manage flashcards for efficient learning.
                Organize your study materials, track your progress, and master new topics with ease.
            </p>
            <p>Created by Ricky Jimenez - {new Date().getFullYear()}</p>
            <div className='about-social'>
              <a href="https://github.com/RickRocketRockCR2" target="_blank" rel="noopener noreferrer"><FaGithub size={25}/></a>
              <a href="https://www.linkedin.com/in/ricky-jimenez-guzman-cr/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            </div>
        </div>
    </main>
);

export default About;