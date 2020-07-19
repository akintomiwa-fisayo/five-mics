/* eslint-disable no-plusplus */
/* eslint-disable no-constant-condition */
/* eslint-disable no-labels */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/general/Layout';
import { Projects, Clients } from '../public/data.json';
import SlideShow from '../components/slideShow/SlideShow';
import FormInput from '../components/general/FormInput';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equipment: 0,
      activeSlide: false,
    };

    this.equipments = [
      'commercial',
      'documentary',
      'Narration',
      'commentary',
    ];
  }

  componentDidMount() {
    setInterval(() => {
      let { equipment } = this.state;
      equipment++;
      if (equipment >= this.equipments.length) {
        equipment = 0;
      }
      this.setState(() => ({
        equipment,
      }));
    }, 2000);
  }

  render() {
    const { state, props } = this;
    const { header } = props.settings;
    const headerHeight = header.height;
    return (
      <>
        <Layout>
          <div id="mainContent" align="center" data-page="Home">
            <div className="banner">
              <img loop muted src="/images/banner.jpg" className="parallax-bk" alt="" />
              <div className="overlay">
                <section className="content">
                  <p className="bold">GET A VOICE OVER ARTIST FOR EVERY KIND OF PROJECT AND ALL USE CASE</p>
                </section>
                <section>
                  <div id="ourSpecialties" className="bold">
                    <p className="item active">{this.equipments[state.equipment]}</p>
                  </div>
                  <p className="">you name it</p>
                </section>
              </div>
            </div>

            <div id="bridge">
              <div id="whatWeDo" style={{ paddingTop: headerHeight }}>
                <h1 className="head">About Fivemics Empire</h1>
                <div className="content">
                  FIVEMICS EMPIRE is a digital media content production company that provides interesting content and integrated marketing solutions that speaks to Entertainment and Marketing communication. We are definitely your courier for endless creative media services and content.
                  Our specialties cover areas of Concept development, Radio Commercials, Radio Jingle, Graphic Design, 3d visualization, Tv Commercials,Video Editing, post production services, Motion graphics, Architectural visualization, Virtual reality, Corporate giftings  and much more.

                  <p>
                    With a strong philosophy for uniqueness, FIVE MICS EMPIRE delivers  top notch solutions for a vast scope of fields . We are committed to timely execution of ideas with speed and creative fidelity.
                  </p>
                </div>

              </div>

              <div id="ourWorks" style={{ paddingTop: headerHeight }}>
                <h1 className="head">Our works</h1>
                <div id="projects">
                  {Projects.map((project, i) => (
                    <div className="project" onClick={() => { this.setState({ activeSlide: i }); }}>
                      <div className="preview">
                        {(() => {
                          switch (project.type) {
                            case ('video'): {
                              return (
                                <video
                                // controls
                                  className="item"
                                  src={project.src}
                                  alt=""
                                />
                              );
                            }
                            default: {
                              return (
                                <img
                                  className="item audio"
                                  src={project.src}
                                  alt=""
                                />
                              );
                            }
                          }
                        })()}
                        <span className="icon fa fa-play-circle" />
                      </div>
                      <h5 className="label">{project.title}</h5>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div id="workedWith" style={{ paddingTop: 'headerHeight' }}>
              <h2 className="head">We've worked with</h2>
              <div id="clients">
                {Clients.map((client) => <img src={client} className="client" />)}
              </div>
            </div>

            <div id="contactUs">
              <img src="/images/fabric.jpg" alt="" className="bk" />
              <div className="content">
                <div className="top">
                  <h1 className="head">Get In Touch</h1>
                  <i>We would love to hear from you </i>
                </div>

                <FormInput
                  label="Email"
                  placeholder="input email"
                  // value="the man"
                />
                <FormInput
                  type="textarea"
                  label="Message"
                  placeholder="input message"
                  // value="the man"
                />
                <button type="button" className="btn btn-success">Submit</button>
              </div>
            </div>
          </div>
        </Layout>
        {state.activeSlide !== false ? (
          <SlideShow
            {...props}
            start={state.activeSlide}
            items={
              Projects.map((project) => ({
                label: project.title,
                content: project.src,
                type: project.type,
              }))
            }
            onClose={() => {
              this.setState({ activeSlide: false });
            }}
          />
        ) : ''}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(Home);
