import React from 'react';

const Services = () => {
  return (
    <div className="container padding" id="services">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Services</h2>
          <hr />
          <p className="font-italic about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            rerum eligendi enim dolores nisi sint!
          </p>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card">
            <img src="img/web-design.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title">Web Design</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quia, facilis blanditiis laudantium quidem consequuntur illo sint
                sed cumque obcaecati sapiente?
              </p>
              <a href="#" className="btn btn-outline-dark">
                Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card">
            <img src="img/ecommerce.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title">Ecommerce</h4>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quasi rem eum numquam, aut soluta magni assumenda quae
                maiores hic.
              </p>
              <a href="#" className="btn btn-outline-dark">
                Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div className="card">
            <img src="img/seo.jpg" className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title">SEO</h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                voluptatem tempora voluptatibus, commodi itaque animi dolorem.
                Expedita quod dolor quasi?
              </p>
              <a href="#" className="btn btn-outline-dark">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
