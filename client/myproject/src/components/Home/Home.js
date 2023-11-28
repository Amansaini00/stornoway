import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <main className='mainhome'>
        <header className="header-home">
        <h3 className="heading-home">QUALITY YOU CAN TRUST</h3>
        <button className="bt1"><NavLink to='/Contact'>Get a Quote</NavLink></button>
    </header>
    <div className="container2">
         <div className="about-home">
            <div className="a1">
                <h3>ABOUT STORNOWAY</h3>
            </div>
            <div className="a2">
                <p>Stornoway is a construction company with a long-standing reputation for excellence. We specialize in commercial property construction but have a small portfolio of industrial and residential properties. Currently, we cater to the German market, but are looking to expand internationally.</p>
            </div>
            <div className="a3">
                  <button><NavLink to='/About'>Read More</NavLink></button>
            </div>
         </div>
    </div>
    <div className="container30">
        <div className="project-home">
            <div className="p1-home">
                <h3>PROJECTS</h3>
            </div>
            <div className="p2-home">
                <div className="img1-home">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=240,fit=crop/stornowayj2oil/Rectangle-AE03ELjjgaT18QRy.png" alt=""/>
                    <span>Huawei HQ, Frankfurt</span>
                </div>
                <div className="img2-home">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=240,fit=crop/stornowayj2oil/Rectangle-mp8BM5lRyjHRVVLK.png" alt=""/>
                    <span>Rhein-Main Conference Centre, Wiesbaden</span>
                </div>
                <div className="img3-home">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=240,fit=crop/stornowayj2oil/Rectangle-AE03EL80Wguk6LD5.png" alt=""/>
                    <span>Danske Bank Offices, Hamburg</span>
                </div>
            </div>
            <div className="p3-home">
                <button><NavLink to='/Project'>See More</NavLink></button>
            </div>
        </div>
    </div>

    <div className="container4">
        <div className="service-home">
            <div className="ser1-home">
                <div className="s1-home">
                    <span>SERVICES</span>
                </div>
                <div className="s2-home">
                    <p>Stornoway specializes in commercial construction, but over the years we have undertaken a number of projects in industrial and residential property construction. We are a flexible team with expertise in all aspects of construction work.</p>
                </div>
                <div className="s3-home">
                    <button><NavLink to='/Service'>More Services</NavLink></button>
                </div>
            </div>
            <div className="ser2-home">
                <div className="s4-home">
                    <h3>01</h3>
                    <span>Commercial Construction</span>
                </div>
                <div className="s5-home">
                    <h3>02</h3>
                    <span>Industrial Construction</span>
                </div>
                <div className="s6-home">
                    <h3>03</h3>
                    <span>Residential Construction</span>
                </div>
            </div>
        </div>
    </div>
    <div className="container5">
        <div className="career-home">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/stornowayj2oil/careers_image-dOqjMWK1qRT81QvX.png" alt=""/>
        </div>
             <div className="cer1-home">
                <div className="c1-home">
                    <span>CAREERS</span>
                </div>
                <div className="c2-home">
                    <p>We are always looking for skilled construction professionals to join our team. If you think you’d make a good fit, have a look at our open positions, or leave an unsolicited application.</p>
                </div>
                <div className="c3-home">
                    <button><NavLink to='/Carrer'>Open Positions</NavLink></button>
                </div>
            </div>
    </div>
</main>
    </div>
  )
}

export default Home;