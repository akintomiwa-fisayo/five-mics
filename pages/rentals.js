import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Layout from '../components/general/Layout';
import { getCordinates } from '../lib/custom';
import { updateHeader, updateSocialHeader } from '../redux/settings/action';
import SlideShow from '../components/SlideShow';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;
  }

  render() {
    return (
      <Layout>
        <div id="rentalPage">
          <div className="featuring">
            <div className="container">
              <h2 className="uppercase">Cameras, lenses & accessories</h2>
              <p>Browse our selection of Digital Cinema cameras from Arri, Canon, RED & Sony. Complimenting these we also stock the largest selection of Prime Lenses for hire outside of London inc glass from Arri, Angenieux, Atlas, Canon, Cooke, Fujinon, Kowa and Zeiss.</p>
            </div>
          </div>

          <div className="container">

            <div className="featured-board row">
              <div id="works" className="col-lg-9 details">
                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">cameras</h5>
                        <p>Digital film cameras from Arri, RED & Sony.</p>
                      </div>

                      <button className="btn btn-primary"> VIEW RANGE {">"}</button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg" alt="" />
                    </div>
                  </a>
                </Link>

                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">Camera Accessories</h5>
                        <p>Matte Boxes, Follow Focuses and Lens Control Systems.</p>
                      </div>

                      <button className="btn btn-primary"> VIEW RANGE {">"}</button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg"
                       alt="" />
                    </div>
                  </a>
                </Link>

                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">Anamorphic lenses</h5>
                        <p>Anamorphic lenses from Cooke &amp;  Kowa</p>
                      </div>

                      <button className="btn btn-primary"> VIEW RANGE ></button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg" alt="" />
                    </div>
                  </a>
                </Link>

                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">Prime Lenses</h5>
                        <p>Largest selection of Vintage &amp; Modern glass outside of London. We stock sets of primes and rare individual lenses from Arri, Zeiss, Cooke, Leitz &amp; Canon.</p>                    </div>

                      <button className="btn btn-primary"> VIEW RANGE ></button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg" alt="" />
                    </div>
                  </a>
                </Link>

                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">Zoom Lenses</h5>
                        <p>Zoom lenses from Arri, Angenieux, Nikon & Cooke.</p>
                      </div>

                      <button className="btn btn-primary"> VIEW RANGE ></button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg" alt="" />
                    </div>
                  </a>
                </Link>

                <Link href="/rentals/[category]" as="/rentals/cameras">
                  <a className="work">
                    <div className="info">
                      <div className="about">
                        <h5 className="title uppercase">Playback / DIT</h5>
                        <p>Bespoke systems for on set Playback & Digital Image Processing.</p>
                      </div>

                      <button className="btn btn-primary"> VIEW RANGE ></button>
                    </div>

                    <div className="preview">
                      <img src="/img/cam-1.jpg" alt="" />
                    </div>
                  </a>
                </Link>

              </div>

              <div id="section" className="col-lg-3">
                <div>
                  <h5 className="uppercase">Browse by Section</h5>
                </div>

                <div className="sections">
                  <Link href="/rentals/[category]" as="/rentals/cameras">
                    <a className="section">Cameras</a>
                  </Link>

                  <Link href="/rentals/[category]" as="/rentals/cameras">
                    <a className="section">Cameras Accessories</a>
                  </Link>

                  <Link href="/rentals/[category]" as="/rentals/cameras">
                    <a className="section">Anamorphic lenses</a>
                  </Link>

                  <Link href="/rentals/[category]" as="/rentals/cameras">
                    <a className="section">Prime Lenses</a>
                  </Link>

                  <Link href="/rentals/[category]" as="/rentals/cameras">
                    <a className="section">Zoom Lenses</a>
                  </Link>
                  
                  <Link href="/rentals/[category]" as="/rentals/cameras">
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
