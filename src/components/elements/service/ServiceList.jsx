import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaWordpressSimple, FaPaintBrush } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'

const ServiceList = [
  {
    icon: <FaPaintBrush />,
    title: 'Design',
    description:
      "Create a design that strengthens your company's brand, while creating a simple, user-friendly experience for your audience.",
    subtitle: '',
    process: ''
  },
  {
    icon: <AiOutlineCode />,
    title: 'Website Development',
    description:
      'After the design process, I take the designs and code them into efficient, performant, and responsive custom websites'
  },
  {
    icon: <FaWordpressSimple />,
    title: 'Content Management',
    description:
      'Custom WordPress theme development, So you can easily update content without knowing an ounce of code.'
  }
  //     {
  //         icon: <FiMonitor />,
  //         title: 'Mobile App Development',
  //         description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  //     },
  //     {
  //         icon: <FiUsers />,
  //         title: 'Marketing & Reporting',
  //         description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  //     },
  //     {
  //         icon: <FiMonitor />,
  //         title: 'Mobile App Development',
  //         description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  //     }
  // ]
]

class ServiceThree extends Component {
  render() {
    const { column } = this.props
    const ServiceContent = ServiceList.slice(0, this.props.item)

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) =>
            <div className={`${column}`} key={i}>
              <Link
                to={{
                  pathname: '/service-details',
                  service: {
                    title: val.title,
                    description: val.description,
                    icon: val.icon
                  }
                }}
              >
                <div className="service service__style--2">
                  <div className="icon">
                    {val.icon}
                  </div>
                  <div className="content">
                    <h3 className="title">
                      {val.title}
                    </h3>
                    <p>
                      {val.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}
export default ServiceThree
