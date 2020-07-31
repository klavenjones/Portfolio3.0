import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PageHelmet from '../common/Helmet'
// import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import HeaderTwo from '../header/HeaderTwo'
import Footer from '../footer/Footer'

// const SocialShare = [
//   { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
//   { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
//   { Social: <FaTwitter />, link: 'https://twitter.com/' }
// ]

class PortfolioDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false
    }

    this.openModal = this.openModal.bind(this)
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    const {
      title,
      description,
      problem,
      solution,
      projectType,
      project,
      preview,
      headline,
      nextProject
    } = this.props.location.details

    return (
      <React.Fragment>
        <PageHelmet pageTitle="Portfolio Details" />

        <HeaderTwo
          headertransparent="header--transparent"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--hero"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    {title}
                  </h2>
                  <p>
                    {headline}{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner mb--80">
                    <h2>
                      {title}
                    </h2>
                    <p className="subtitle">
                      {description}
                    </p>
                    <p>
                      {problem}
                    </p>
                    <p>
                      {solution}
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Project Type</span>
                        <h4>
                          {projectType}
                        </h4>
                      </div>

                      <div className="port-view">
                        <span>Project</span>
                        <h4>
                          {project}
                        </h4>
                      </div>
                    </div>

                    {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                      <h5>Get in touch:</h5>
                      <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                        {SocialShare.map((val, i) =>
                          <li key={i}>
                            <a href={`${val.link}`}>
                              {val.Social}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div> */}
                  </div>
                  <div className="portfolio-thumb-inner">
                    <div className="thumb mb--30">
                      <img
                        src={`/assets/images/portfolio/${preview}`}
                        alt="Portfolio Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Related Work */}
        <div className="portfolio-related-work pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="theme-color font--18 fontWeight600">
                    Related Work
                  </span>
                  <h2> More Projects</h2>
                </div>
              </div>
            </div>
            <div className="row mt--10">
              <div className="col-lg-6 col-md-6 col-12 mx-auto">
                <div className="related-work text-center mt--30">
                  <div className={`thumb`}>
                    <Link
                      to={{
                        pathname: '/portfolio-details',
                        details: {
                          title: nextProject.title,
                          image: nextProject.image,
                          description: nextProject.description,
                          projectType: nextProject.projectType,
                          project: nextProject.project,
                          problem: nextProject.problem,
                          solution: nextProject.solution,
                          preview: nextProject.preview,
                          headline: nextProject.headline,
                          nextProject: nextProject.nextProject
                        }
                      }}
                    >
                      <img
                        src={`/assets/images/portfolio/${nextProject.portfolio}`}
                        alt="Portfolio-images"
                      />
                    </Link>
                  </div>
                  <div className="inner">
                    <h4>
                      {/* <a href="/portfolio-details">Digital Analysis</a> */}
                      <Link
                        to={{
                          pathname: '/portfolio-details',
                          details: {
                            title: nextProject.title,
                            image: nextProject.image,
                            description: nextProject.description,
                            projectType: nextProject.projectType,
                            project: nextProject.project,
                            problem: nextProject.problem,
                            solution: nextProject.solution,
                            preview: nextProject.preview,
                            headline: nextProject.headline,
                            nextProject: nextProject.nextProject
                          }
                        }}
                      >
                        {nextProject.title}
                      </Link>
                    </h4>
                    <span className="category">
                      {nextProject.projectType}
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-6 col-md-6 col-12">
                <div className="related-work text-center mt--30">
                  <div className="thumb">
                    <a href="/portfolio-details">
                      <img
                        src="/assets/images/portfolio/related-image-02.jpg"
                        alt="Portfolio-images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <h4>
                      <a href="/portfolio-details">Plan Management</a>
                    </h4>
                    <span className="category">PLANNING</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* End Related Work */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    )
  }
}
export default PortfolioDetails
