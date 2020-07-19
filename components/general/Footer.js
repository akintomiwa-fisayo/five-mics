import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="content">
          <div className="info">
            <div className="header">
              <p>navigation</p>
            </div>
            <div className="content">
              <a href="#whatWeDo" className="link">
                <li>fivemics Empire</li>
              </a>
              <br />

              <a href="#ourWorks" className="link">
                <li>our works</li>
              </a>
              <br />

              <a href="#workedWith" className="link">
                <li>our clients</li>
              </a>
              <br />

              <a href="#contactUs" className="link">
                <li>contact us</li>
              </a>
            </div>
          </div>

          <div className="info">
            <div className="header">
              <p>contact</p>
            </div>
            <div className="content">
              <div className="detail">
                <p>M —  </p>
                <p> info@gmail.com</p>
              </div>

              <div className="detail">
                <p>A —  </p>
                <p> company's address comes here</p>
              </div>

              <div className="detail">
                <p>P —  </p>
                <p> +2337868997868</p>
              </div>

            </div>
          </div>

          <div className="info">
            <div className="header">
              <p>social</p>
            </div>
            <div className="content">
              <div className="detail">
                <span className="fa fa-facebook-f" />
              </div>

              <div className="detail">
                <span className="fa fa-twitter" />
              </div>

              <div className="detail">
                <span className="fa fa-pinterest-p" />
              </div>

              <div className="detail">
                <span className="fa fa-instagram" />
              </div>

            </div>
          </div>

        </div>

        <div>
          <p>© 2020 Fivemics Empire.</p>
          <p>All Rights Reserved.</p>
        </div>

      </footer>
    );
  }
}

export default Footer;
