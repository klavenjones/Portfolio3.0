import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.pageTitle} || React Multipurpose Template{' '}
          </title>
          <meta
            name="description"
            content="Klaven Jones - Freelance Web Designer and Developer"
          />
        </Helmet>
      </React.Fragment>
    )
  }
}

export default PageHelmet
