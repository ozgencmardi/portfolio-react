import React from 'react';

const Home = () => {
  return (
    <div id="home">
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/portfolio-banner1.jpg" className="d-block w-100" alt="Web Developer" />
            <div className="carousel-caption">
              <h1 className="display-2">Web Developer & Designer</h1>
              <h3>HTML5, CSS3, JavaScript</h3>
              <a href="#contact"><button type="button" className="btn btn-outline-light btn-lg">Contact</button></a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/portfolio-banner2.jpg" className="d-block w-100" alt="Web Designer" />
            <div className="carousel-caption">
              <h1 className="display-2">Web Developer & Designer</h1>
              <h3>HTML5, CSS3, JavaScript</h3>
              <a href="#contact"><button type="button" className="btn btn-outline-light btn-lg">Contact</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
