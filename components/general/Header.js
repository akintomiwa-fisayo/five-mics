import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import { updateHeader } from '../../redux/settings/action';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'whatWeDo',
    };
    this.header = null;
    this.regHeight = this.regHeight.bind(this);
  }

  regHeight(header) {
    if (header) {
      this.props.updateHeader({
        height: header.offsetHeight,
      });
    }
  }

  render() {
    const { props, state } = this;
    // console.log('header props', props);
    const { header } = props.settings;
    const headerStyle = { };
    const { activeSection } = state;

    return (
      <>
        <Head runat="server">
          <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-52115242-17" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag() { dataLayer.push(arguments); }
                      gtag('js', new Date());

                      gtag('config', 'UA-52115242-17');
                    `,
            }}
          />

          <meta charSet="utf-8" />
          <title>Lamps And Images</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Collaboration for change" />

          {/* <link href="/css/theme.min.css" rel="stylesheet" type="text/css" media="all" /> */}
          <link href="/css/demo.css" rel="stylesheet" type="text/css" media="all" />
          {/* <link href="https://fonts.googleapis.com/css?family=Nunito:400,400i,600,700&amp;display=swap" rel="stylesheet" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
        </Head>
        <div
          id="Header"
          data-comp="Header"
          ref={this.regHeight}
        >
          <a href="#mainContent">
            <img
              src="/images/logo.png"
              alt=""
              className="logo"
              onClick={() => {
                this.setState({ activeSection: 'whatWeDo' });
              }}
            />
          </a>
          <div className="nav-links">
            <a
              href="#whatWeDo"
              className={`nav-link${activeSection === 'whatWeDo' ? ' active' : ''}`}
              onClick={() => {
                this.setState({ activeSection: 'whatWeDo' });
              }}
            >fivemics Empire
            </a>
            <a
              href="#ourWorks"
              className={`nav-link${activeSection === 'ourWorks' ? ' active' : ''}`}
              onClick={() => {
                this.setState({ activeSection: 'ourWorks' });
              }}
            >our works
            </a>
            <a
              href="#workedWith"
              className={`nav-link${activeSection === 'workedWith' ? ' active' : ''}`}
              onClick={() => {
                this.setState({ activeSection: 'workedWith' });
              }}
            >our clients
            </a>
            <a
              href="#contactUs"
              className={`nav-link${activeSection === 'contactUs' ? ' active' : ''}`}
              onClick={() => {
                this.setState({ activeSection: 'contactUs' });
              }}
            >contact us
            </a>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  updateHeader: (props) => dispatch(updateHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
