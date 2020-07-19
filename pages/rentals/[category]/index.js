import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../../components/general/Layout';
import { getCordinates } from '../../lib/custom';
import { updateHeader, updateSocialHeader } from '../../redux/settings/action';
import SlideShow from '../../components/SlideShow';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;
  }

  render() {
    return (
      <Layout>
        <div id="rentalCategoryPage">
          <div className="featuring">
            <div className="container">
              <h2 className="uppercase">Cameras</h2>
              <p>Digital film cameras from Arri, RED & Sony.</p>
            </div>
          </div>

          <div className="container">

            <div className="featured-board row">
              <div id="works" className="col-lg-9 details">
                <div className="work">
                  <div className="preview">
                    <img src="/img/cam-1.jpg" alt="" />
                  </div>

                  <div className="info">
                    <div>
                      <span className="category">Camera</span>
                      <h5 className="title uppercase">Sony Venice</h5>
                      <p className="description">Sony's flagship 6K Full Frame camera.</p>
                    </div>

                    <button type="button" className="btn btn-primary">MORE INFO</button>
                  </div>

                </div>

                <div className="work">
                  <div className="preview">
                    <img src="/img/cam-1.jpg" alt="" />
                  </div>

                  <div className="info">
                    <div>
                      <span className="category">Camera</span>
                      <h5 className="title uppercase">Sony Venice</h5>
                      <p className="description">Sony's flagship 6K Full Frame camera.</p>
                    </div>

                    <button type="button" className="btn btn-primary">MORE INFO</button>
                  </div>

                </div>

                <div className="work">
                  <div className="preview">
                    <img src="/img/cam-1.jpg" alt="" />
                  </div>

                  <div className="info">
                    <div>
                      <span className="category">Camera</span>
                      <h5 className="title uppercase">Sony Venice</h5>
                      <p className="description">Sony's flagship 6K Full Frame camera.</p>
                    </div>

                    <button type="button" className="btn btn-primary">MORE INFO</button>
                  </div>

                </div>

                <div className="work">
                  <div className="preview">
                    <img src="/img/cam-1.jpg" alt="" />
                  </div>

                  <div className="info">
                    <div>
                      <span className="category">Camera</span>
                      <h5 className="title uppercase">Sony Venice</h5>
                      <p className="description">Sony's flagship 6K Full Frame camera.</p>
                    </div>

                    <button type="button" className="btn btn-primary">MORE INFO</button>
                  </div>

                </div>

              </div>

              <div id="section" className="col-lg-3">
                <div>
                  <h5 className="uppercase">Cameras</h5>
                </div>

                <div className="similar-items">
                  <Link href="/">
                    <a className="section active">Cameras</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Cameras Accessories</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Anamorphic lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Prime Lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Zoom Lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Playback / DIT</a>
                  </Link>
                </div>

                <div className="sections">
                  <Link href="/">
                    <a className="section">Cameras Accessories</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Anamorphic lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Prime Lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Zoom Lenses</a>
                  </Link>
                  <Link href="/">
                    <a className="section">Playback / DIT</a>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({ settings: state.settings });
const mapDispatchToProps = (dispatch) => ({
  updateHeader: (props) => dispatch(updateHeader(props)),
  updateSocialHeader: (props) => dispatch(updateSocialHeader(props)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
