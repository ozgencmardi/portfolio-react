import React from 'react';

function Portfolio() {
  return (
    <div className="container padding mt-4" id="portfolio">
      <div className="row padding">
        <div className="col-lg-12 text-center mt-4">
          <h2>Portfolio</h2>
          <hr />
          <p className="font-italic about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum eligendi enim dolores nisi sint!
          </p>
        </div>
        <div className="col-12">
          <section className="page-section" id="work">
            <div className="right" id="portfolioGrid">
              <div id="furniture-store" className="portfolioGridArea">
                <a href="https://ozgencmardi.github.io/furniture-store/" target="_blank">
                  <div className="headingMain">
                    <div className="title">Furniture Store</div>
                    <div className="subTitle">HTML, CSS</div>
                  </div>
                </a>
              </div>
              <div id="semantic-html" className="portfolioGridArea">
                <a href="https://ozgencmardi.github.io/semantic-html/" target="_blank">
                  <div className="heading">
                    <div className="title">Semantic HTML</div>
                    <div className="subTitle">HTML, CSS</div>
                  </div>
                </a>
              </div>
              <div id="travel-california" className="portfolioGridArea">
                <a href="https://ozgencmardi.github.io/travel-california/" target="_blank">
                  <div className="heading">
                    <div className="title">Travel California</div>
                    <div className="subTitle">HTML, CSS</div>
                  </div>
                </a>
              </div>
              <div id="css-snippet" className="portfolioGridArea">
                <a href="https://ozgencmardi.github.io/css-snippet-cheatsheet/" target="_blank">
                  <div className="heading">
                    <div className="title">CSS Snippet</div>
                    <div className="subTitle">HTML, CSS</div>
                  </div>
                </a>
              </div>
              <div id="portfolio-css" className="portfolioGridArea">
                <a href="https://ozgencmardi.github.io/portfolio/" target="_blank">
                  <div className="heading">
                    <div className="title">Portfolio</div>
                    <div className="subTitle">HTML, CSS</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
