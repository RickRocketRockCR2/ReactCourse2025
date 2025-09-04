import React from 'react';

const About = () => (
    <main>
        <div className="about">
            <h2>About Study Cards App</h2>
            <p>
                Study Cards App helps you create, review, and manage flashcards for efficient learning.
                Organize your study materials, track your progress, and master new topics with ease.
            </p>
            <p>Created by Ricky Jimenez - {new Date().getFullYear()}</p>
            <p><a href="https://github.com/RickRocketRockCR2">GitHub</a></p>
        </div>
    </main>
);

export default About;