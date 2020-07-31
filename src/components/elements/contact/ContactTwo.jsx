import React, { Component } from 'react'
import emailjs from 'emailjs-com'
class ContactTwo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rnName: '',
      rnEmail: '',
      rnSubject: '',
      rnMessage: '',
      sent: false
    }
  }

  sendEmail = e => {
    e.preventDefault()

    let templateParams = {
      rnName: this.state.rnName,
      rnEmail: this.state.rnEmail,
      rnSubject: this.state.rnSubject,
      rnMessage: this.state.rnMessage
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICEID2,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text)
          this.setState({ sent: true })
        },
        err => {
          console.log('FAILED', err)
        }
      )
  }

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Contact Us.</h2>
                <p className="description">
                  Whether if it's a project, or you want to say hello. I'd love
                  to hear from you!
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.sendEmail}>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.rnName}
                      onChange={e => {
                        this.setState({ rnName: e.target.value })
                      }}
                      placeholder="Your Name *"
                      required
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.rnEmail}
                      onChange={e => {
                        this.setState({ rnEmail: e.target.value })
                      }}
                      placeholder="Your email *"
                      required
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.rnSubject}
                      onChange={e => {
                        this.setState({ rnSubject: e.target.value })
                      }}
                      placeholder="Write a Subject"
                      required
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.rnMessage}
                      onChange={e => {
                        this.setState({ rnMessage: e.target.value })
                      }}
                      placeholder="Your Message"
                      required
                    />
                  </label>
                  {this.state.sent &&
                    <p className="contact--success">
                      Your Message Has Been Sent
                    </p>}
                  <button
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img
                  src="/assets/images/about/about-illustration.jpg"
                  alt="trydo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactTwo
