import React from 'react';
import ozgencMardi from '../img/ozgenc-mardi.jpg';

const About = () => {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-lg-12 text-center">
          <img src={ozgencMardi} className="about-img" alt="M. Ozgenc Mardi" />
          <br /><br />
          <h2>About Me</h2>
          <hr />
          <p className="font-italic about-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sequi quos! Reprehenderit at distinctio porro quam veniam provident recusandae ipsam consectetur nobis perspiciatis! Tempore adipisci, obcaecati quod laborum accusantium dolores cupiditate culpa in veritatis repellat quia dicta maiores quisquam minima eos labore, expedita ex voluptas? Similique, tenetur. At adipisci assumenda ea rem aliquid magni, est libero quis placeat dolorem nulla esse veritatis eos inventore error maiores nostrum quam illo provident neque id beatae fugiat. Nobis, maiores eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
