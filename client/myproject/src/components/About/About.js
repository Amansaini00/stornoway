import React from 'react';
import './About.css';
const About = () => {
  return (
    <div>
 <header className="header-about">
                <h3 className="heading-about">ABOUT</h3>
            </header>
            <main>
                <div className="one">
                    <div className="oneleft"><h3>Stornoway services and history</h3></div>
                    <div className="onemid"><span>Stornoway started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high standard and work as consultants, solving our clients’ problems. </span></div>
                    <div className="oneright"><span>The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence at everything we do.</span></div>
                </div>
                <div className="two">
                    <div className="twoimg1"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=368,fit=crop/stornowayj2oil/Rectangle-AR0pelPw3gTGBODM.png" alt=""/></div>
                    <div className="twoimg2"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=304,fit=crop/stornowayj2oil/oleg-laptev-KDawdoaC-ts-unsplash-m2WO1pgLRWhxByyq.jpg" alt=""/></div>
                </div>
                <div className="one">
                    <div className="oneleft"><h3>Stornoway people and culture</h3></div>
                    <div className="onemid"><span>Our people are what make us unique. Rather than outsourcing our construction engineers from questionable outsourcing establishments, we provide them with an environment that supports professional growth. </span></div>
                    <div className="oneright"><span>At Stornoway, we are strong believers in giving our employees a voice. Our teams are put together with the help of our resident psychologist to ensure maximum productivity and engagement.</span> </div>
            </div>
                </main>
           

    </div>
  )
}

export default About