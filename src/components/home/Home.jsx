import React from 'react'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Helmet from '../common/Helmet'
import TextLoop from 'react-text-loop'
import Header from '../header/Header'
import FooterTwo from '../footer/FooterTwo'
import TabTwo from '../elements/tab/TabTwo'
import ContactThree from '../elements/contact/ContactThree'
import PortfolioList from '../elements/portfolio/PortfolioList'
import ServiceList from '../elements/service/ServiceList'

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Freelance Web Developer',
    description: '',
    buttonText: '',
    buttonLink: ''
  }
]

const PortfolioLanding = () => {
  let title = 'About Me',
    description =
      "I'm a full-stack developer based in NYC who loves taking complex ideas and turning them into something that works on the web.",
    description2 =
      'I enjoy building everything from small business sites to rich interactive web and mobile applications. If you are a business seeking an app or a website, or an employer looking to hire, feel free to '

  return (
    <div>
      <Helmet pageTitle="Portfolio Landing" />

      <Header homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) =>
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--header"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category
                        ? <span>
                            {value.category}
                          </span>
                        : ''}
                      <h1 className="title">
                        Hey, I’m Klaven,<br />
                        <TextLoop>
                          <span> JS Developer</span>
                          <span> Web Designer</span>
                          <span> Web Developer</span>
                          <span> React Developer</span>
                        </TextLoop>{' '}
                      </h1>
                      <h2>based in NYC.</h2>
                      {value.description
                        ? <p className="description">
                            {value.description}
                          </p>
                        : ''}
                      {value.buttonText
                        ? <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/portfolio_avtr.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">
                        {title}
                      </h2>
                      <p className="description">
                        {description}
                      </p>
                      <p className="description">
                        {description2} <a href="#contact">contact me</a>
                      </p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Services</h2>
                  <p>Here is what I offer.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Projects</h2>
                    <p>Check out some of the work I've done.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-6 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                {/* <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a className="rn-button-style--2 btn-solid" href="/blog">
                      <span>View More</span>
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/about/about-illustration.jpg"
            contactTitle="Hire Me."
          />
        </div>
      </div>
      {/* End COntact Area */}
      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  )
}

export default PortfolioLanding
