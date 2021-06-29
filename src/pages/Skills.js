import React from 'react';
import HeaderPage from './../components/HeaderPage';

import { Progress } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import '../sass/skills.sass';

import html from '../assets/images/html.svg';
import css from '../assets/images/css.svg';
import sass from '../assets/images/sass.svg';
import js from '../assets/images/js.svg';
import react from '../assets/images/react.svg';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='skill'>
            <HeaderPage />
            <div className="header">
                <h1>Compétences</h1>
            </div>
            <div className="container">
                <div className="skills">
                    <Progress percent={100} progress color='orange'><div className="span">HTML</div> <img src={html} alt="html" /></Progress>
                    <Progress percent={90} progress color='blue'><div className="span">CSS</div> <img src={css} alt="css" /></Progress>
                    <Progress percent={85} progress color='yellow'><div className="span">JAVASCRIPT</div> <img src={js} alt="js" /></Progress>
                    <Progress percent={85} progress color='teal'><div className="span">REACT.JS</div> <img src={react} alt="react" /></Progress>
                    <Progress percent={80} progress color='pink'><div className="span">SASS</div> <img src={sass} alt="sass" /></Progress>
                </div>
                <Link to="/realisations" className='link-btn'>Découvrir mes réalisations</Link>
            </div>
        </div>
    );
}

export default Skills;
