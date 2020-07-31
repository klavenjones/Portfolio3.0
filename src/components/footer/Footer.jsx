import React, { Component } from 'react'
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/klaven-jones/'
  },
  // { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/KlavenJ' },
  { Social: <FaGithub />, link: 'https://github.com/klavenjones' }
]
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ready To Do This</span>
                    <h2>
                      Let's get <br /> to work
                    </h2>
                    <Link className="rn-button-style--2" to="/contact">
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Quick Link</h4>
                        <ul className="ft-link">
                          <li>
                            <Link to="/#portfolio">Work</Link>
                          </li>
                          <li>
                            <Link to="/#about">About</Link>
                          </li>
                          <li>
                            <Link to="/contact">Let's Talk</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Let's Connect</h4>
                        {/* <ul className="ft-link">
                          <li>
                            <a href="mailto:admin@example.com">
                              admin@example.com
                            </a>
                         </li>
                         <li>
                            <a href="mailto:hr@example.com">hr@example.com</a>
                          </li>  
                        </ul> */}

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) =>
                              <li key={i}>
                                <a href={`${val.link}`} target="_blank" rel="noopener noreferrer">
                                  {val.Social}
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          {/* Copyright © 2020 Rainbow-Themes. All Rights Reserved. */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}
export default Footer
