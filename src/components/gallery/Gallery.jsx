import React, { Component } from 'react';
import './Gallery.css';
import img1 from '../../cocktails3-2.png';
import img2 from '../../cocktails3-1.jpg';
import img3 from '../../cocktails5.jpg';


class Gallery extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
    </div>

    );
  }
}

export default Gallery;
