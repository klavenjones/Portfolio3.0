import React, { Component } from 'react'
import PageHelmet from '../common/Helmet'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import HeaderTwo from '../header/HeaderTwo'
import Footer from '../footer/Footer'

class ServiceDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
    window.scrollTo(0, 0)
    console.log(props)
  }

  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Service Details" />
        {/* End Pagehelmet  */}

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
                  <h2 className="title theme-gradient"> My Process</h2>
                  <p>My typical workflow with a project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/meeting.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Getting Started</h4>
                          <p>
                            <span className="process-title">Brief:</span> First,
                            I need to get an idea of what exactly it is you need
                            done for your project. This gives me a clear idea of
                            what the project scope is and it helps me determine
                            what services I can provide for you based on your
                            project goals.
                          </p>

                          <p>
                            <span className="process-title">
                              Initial Meeting:
                            </span>{' '}
                            After the brief, we set up a 15-minute call to
                            introduce ourselves and ensure that we are on the
                            same page with the goals of your project. This call
                            is where you bring things to my attention and add
                            clarification to what you need for this project.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                    {/* Start Single Area  2*/}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/process.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Design</h4>
                          <p>
                            <span className="process-title">
                              Wireframing:
                            </span>{' '}
                            Once I have an idea of what you want, I create the
                            site's overall structure and functionality by
                            wireframing. During this process, I will update you
                            and show you my progress. I will use any feedback
                            you have and fine-tune the wireframe to your liking.
                          </p>
                          <p>
                            <span className="process-title">Designs:</span>{' '}
                            After we agree on the wireframes, this is where I
                            work on the look and feel of your site. Just like
                            the wireframes, I will update you frequently to make
                            sure you like the designs.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area 2 */}
                    {/* Start Single Area  3*/}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/coding.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Development & Launch</h4>
                          <p>
                            <span className="process-title">Coding:</span> After
                            we agree with the design; This is where the magic
                            happens. At this point, there isn't much need for
                            feedback, so communication will be less frequent at
                            this stage. It's time for me to take the design and
                            bring it to life.
                          </p>
                          <p>
                            <span className="process-title">
                              Walkthrough:
                            </span>{' '}
                            After I finish development, I'll do a walkthrough
                            with you before launch. I'll teach you how to
                            utilize your website, to update it yourself in the
                            future.
                          </p>
                          <p>
                            <span className="process-title">Launch:</span> It's
                            time to go live! I'll upload your website to the
                            hosting service you provided and all you need to do
                            is show it off to the world!
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area 3*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default ServiceDetails
