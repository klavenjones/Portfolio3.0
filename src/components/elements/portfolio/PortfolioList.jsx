import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const PortfolioListContent = [
  {
    image: 'image-1',
    portfolio: 'portfolio-1.jpg',
    preview: 'miramom_landing.png',
    category: 'Development',
    title: 'Miramom',
    projectType: 'Web Application',
    project: 'In Development',
    headline: 'A professional social network for flexible workers',
    description:
      'A professional social networking platform that allows parents to find flexible work.',
    problem:
      'Miramom is a professional employment agency with a focus on parents looking for flexible work. Miramom wanted a website where employers and prospective talent can connect.',
    solution:
      "When I consulted for Miramom, I redesigned their site and helped convert it from WordPress to a web application. I designed the application's API on the server-side, with Express, and built the front-end using the popular React library."
  },
  {
    image: 'image-2',
    portfolio: 'portfolio-2.jpg',
    category: 'Development',
    title: 'CEMS Electric Invoicer',
    projectType: 'Mobile Application',
    project: 'In Development',
    preview: 'invoices_example.png',
    headline: 'An invoicing application for an electrician company',
    description:
      'Personalized invoicing application that allows the company to manage their invoices',
    problem:
      'CEMS Electric is an electrician company, that offers various services locally. They needed a solution where they can create invoices, and keep record of them, as well as, automate some tasks like sending the invoices to customers.',
    solution:
      "To solve this, I'm building a cross-platform mobile application. This app will allow CEMS Electric to share estimates and invoices with their customers, while also keeping track of their payments, services, and customers. I am currently in the design phase for this project, and I plan to build this project with full-stack JavaScript, using the cross-platform technology React-Native on the front end and NestJS on the back end."
  }
  // {
  //   image: 'image-3',
  //   category: 'Development',
  //   title: 'Getting tickets to the big show'
  // }
  // {
  //   image: 'image-4',
  //   category: 'Development',
  //   title: 'Getting tickets to the big show'
  // },
  // {
  //   image: 'image-3',
  //   category: 'Development',
  //   title: 'Getting tickets to the big show'
  // },
  // {
  //   image: 'image-4',
  //   category: 'Development',
  //   title: 'Getting tickets to the big show'
  // }
]

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props
    const list = PortfolioListContent.slice(0, this.props.item)
    //ADD NEXT PROJECT
    list[0].nextProject = list[1];
    list[1].nextProject = list[0];
   
    return (
      <React.Fragment>
        {list.map((value, index) =>
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`} />
                <div className={`bg-blr-image ${value.image}`} />
              </div>
              <div className="content">
                <div className="inner">
                  <p>
                    {value.category}
                  </p>
                  <h4>
                    <Link
                      to={{
                        pathname: '/portfolio-details',
                        details: {
                          title: value.title,
                          image: value.image,
                          description: value.description,
                          projectType: value.projectType,
                          project: value.project,
                          problem: value.problem,
                          solution: value.solution,
                          preview: value.preview,
                          portfolio: value.portfolio,
                          headline: value.headline,
                          nextProject: value.nextProject
                        }
                      }}
                    >
                      {value.title}
                    </Link>
                  </h4>
                  <div className="portfolio-button">
                    <Link
                      className="rn-btn"
                      to={{
                        pathname: '/portfolio-details',
                        details: {
                          title: value.title,
                          image: value.image,
                          description: value.description,
                          projectType: value.projectType,
                          project: value.project,
                          problem: value.problem,
                          solution: value.solution,
                          preview: value.preview,
                          portfolio: value.portfolio,
                          headline: value.headline,
                          nextProject: value.nextProject
                        }
                      }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
export default PortfolioList
