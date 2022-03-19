import React from 'react';
import Buttonl from './Buttonl';

const Sc = (props) => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="col-md-3 col col-lg-3 col-3">
        <div className="card h-100">
          <img src={props.c.image} className="card-img-top" alt="" />
          <div className="card-body">
            <h5>{props.c.title.slice(0, 10)}</h5>
            <div className='d-flex justify-content-evenly'>
            <button onClick={props.cl} className='btn btn-success'>Add to card</button>
              <button className='btn btn-danger'>Delete</button>
              <Buttonl dt={props.c}></Buttonl>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Sc;