import React from 'react'
import './Service.css';
import { NavLink } from 'react-router-dom'; 

const Service = () => {
  return (
    <div>
        <header className="header-services">
        <h3 className="heading-services">SERVICES</h3>
    </header>
    <main>
        <div className="head1-services">
            <div className="heading1-services"><h3>Stornoway specializes in commercial construction work but boasts a wide portfolio covering also industrial and residential projects.</h3></div>

        </div>
        <div className="banner-services">
            <div className="bimg-services"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-mk3Nl8q7JNhe7NlW.png" alt=""/></div>
            <div className="bcon-services">
                <div className="num-services"><h3>01</h3></div>
                <div className="bhead-services"><h3>Industrial Construction</h3></div>
                <div className="bspan-services"><span>We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</span></div>
</div>
        </div>
        <div className="banner-services">
            <div className="bimg-services"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-ALpj8Be16JHnMGr0.png" alt=""/></div>
            <div className="bcon-services">
                <div className="num-services"><h3>02</h3></div>
                <div className="bhead-services"><h3>Residential Construction</h3></div>
            <div className="bspan-services"><span>Stornoway’s residential design and architecture team makes us different from our competitors. We can look after your construction project from start to finish with no loss in communication on the way.

            </span></div>    
            </div>
        </div>
        <div className="banner-services">
            <div className="bimg-services"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-mv0MLEMEwPSnX63R.png" alt=""/></div>
            <div className="bcon-services">
                <div className="num-services"><h3>03</h3></div>
                <div className="bhead-services"><h3>Commercial Construction</h3></div>
                <div className="bspan-services"><span>We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</span></div>
</div>
        </div>
        <div className="banner-services">
            <div className="bimg"><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=480,fit=crop/stornowayj2oil/Rectangle-AoPaDZJlXru7X5Jw.png" alt=""/></div>
            <div className="bcon-services">
                <div className="num-services"><h3>04</h3></div>
                <div className="bhead-services"><h3>Design & Architecture</h3></div>
                <div className="bspan-services"><span>We believe that industrial construction doesn’t have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to include or blend your industrial project into the surrounding area.</span></div>
</div>
        </div>

        <div className="base-services">
            <div className="basecontent-services">
<h3>Contact Us</h3>
<span>Get in touch with our consultants today to make your construction dream a reality.</span>
<button className="bt1-services"><NavLink to='/Contact'>Get a Quote</NavLink></button>
</div>
        </div>
    </main>
    
    </div>
  )
}

export default Service