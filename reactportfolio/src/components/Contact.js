import React from 'react';

function Contact() {
  return (
    <div className="container-fluid section-bg mt-4" id="contact">
      <div className="container padding">
        <div className="row padding">
          <div className="col-lg-12 text-center mt-4">
            <h2>Contact</h2>
            <hr />
            <p className="font-italic about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum eligendi enim dolores nisi sint!</p>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <div>
                <i className="mbri-letter text-custom h2"></i>
              </div>
              <div className="mt-2">
                <p className="mb-0 font-weight-bold">Email</p>
                <p><a href="mailto:ozgencmardi@gmail.com" className="about-text">ozgencmardi@gmail.com</a></p>
              </div>
            </div>
            <div className="text-center mt-4">
              <div>
                <i className="mbri-pin text-custom h2"></i>
              </div>
              <div className="mt-2">
                <p className="mb-0 font-weight-bold">Address</p>
                <p><a href="https://www.google.com/maps/place/Wedelo+Limited/@51.5240579,-0.201545,15z/data=!4m5!3m4!1s0x0:0xd827856c50b85d00!8m2!3d51.5240579!4d-0.201545"
                    target="_blank" className="about-text">London - United Kingdom</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact_form" id="contact-form">
              <form action="mail.php" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <label htmlFor="name" className="font-weight-bold">Name</label>
                      <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." required />
                      <span id="name-error"></span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mt-2">
                      <label htmlFor="email" className="font-weight-bold">Email</label>
                      <input name="email" id="email" type="email" className="form-control" placeholder="Your email..." required />
                      <span id="email-error"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <label htmlFor="comments" className="font-weight-bold">Message</label>
									<textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your message..." required=""></textarea>
									<span id="message-error"></span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12 text-left mt-2 mb-4">
								<button type="submit" class="btn btn-dark">Send Message</button>
								<span id="submit-error"></span>
							</div>
						</div>
					</form>
				</div> 
			</div>
		</div>         
	</div>
</div>
  );
};

export default Contact;
