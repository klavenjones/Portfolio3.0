import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

class TabsTwo extends Component {
  render() {
    let tab1 = 'Main skills',
      tab2 = 'Experience',
      tab3 = 'Education & Certification'
    const { tabStyle } = this.props
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>
                      {tab1}
                    </Tab>
                    <Tab>
                      {tab2}
                    </Tab>
                    <Tab>
                      {tab3}
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <p className="tab-content-title">
                            Programming languages:
                          </p>
                          HTML, CSS, JavaScript, TypeScript, Java, Python.
                        </li>
                        <li>
                          <p className="tab-content-title">
                            Libraries & Framworks
                          </p>
                          Node, Express, React, React Native, Redux, Bootstrap,
                          NestJS, JQuery
                        </li>
                        <li>
                          <p className="tab-content-title">Dev Tools</p>
                          VSCode, GitHub, Bitbucket, Terminal, Yarn, NPM
                        </li>
                        <li>
                          <p className="tab-content-title">Design Tools</p>
                          Sketch, Figma, Invision, Photoshop, XD, Illustrator
                        </li>
                        <li>
                          <p className="tab-content-title">CMS</p>
                          Wordpress, Contentful
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <p className="tab-content-title">
                            Full-stack Developer Consultant{' '}
                            <span> - Miramom</span>
                          </p>{' '}
                          2019 - 2020
                        </li>
                        <li>
                          <p className="tab-content-title">
                            Full-stack Developer Intern <span> - Miramom</span>
                          </p>{' '}
                          2018 - 2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <p className="tab-content-title">
                            BTech In Computer Systems<span> - CUNY City Tech, Brooklyn, NY</span>
                          </p>{' '}
                          2018
                        </li>
                        <li>
                          <p className="tab-content-title">
                            AAS in Computer Information Systems<span> - CUNY City Tech, Brooklyn, NY</span>
                          </p>{' '}
                          2016
                        </li>
                        <li>
                          <p className="tab-content-title">
                            Build Front-End Web Apps from Scratch<span> - Codecademy</span>
                          </p>{' '}
                          2018
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    )
  }
}

export default TabsTwo
