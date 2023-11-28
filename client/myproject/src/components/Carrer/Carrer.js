import React from 'react';
import './Carrer.css'
import { NavLink } from 'react-router-dom';

const Carrer = () => {
  return (
    <div>
         <header class="header-carrer">
        <h3 class="heading-carrer">CAREER</h3>
    </header>
        <main>
        <div className="head-carrer">
            <h3>Open Positions</h3>
        </div>
        <div className="tag-carrer">
            <div className="num-carrer"><span>01</span></div>
            <div className="post-carrer"><NavLink to='/Page1' className="Navlinks">Health and Safety Coordinator - Hamburg, Germany</NavLink></div>
            <div className="time-carrer"><span>FULL-TIME</span></div>
        </div>
        <div className="tag-carrer">
            <div className="num-carrer"><span>02</span></div>
            <div className="post-carrer"><NavLink to='/Page2' className="Navlinks">Construction Safety Manager - Hamburg, Germany</NavLink></div>
            <div className="time-carrer"><span>FULL-TIME</span></div>
        </div>
        <div className="tag-carrer">
            <div className="num-carrer"><span>03</span></div>
            <div className="post-carrer"><NavLink to='/Page3'className="Navlinks">Construction  Engineer - Hamburg, Germany </NavLink></div>
            <div className="time-carrer"><span>FULL-TIME</span></div>
        </div>
    </main>
    
    </div>
  )
}

export default Carrer