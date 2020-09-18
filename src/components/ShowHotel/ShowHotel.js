import React from 'react';
import ratingImg from '../../material/Icon/star_1_.png';
import './ShowHotel.css';

const ShowHotel = (props) => {
    const {name, guest, bedroom, bed, bath, rating, reviewer, cost, totalCost, img} = props.hotelInfo;
    return (
        <div className="single-room row">
            <div className="image col-md-6">
                <img src={img} style={{width: '100%', height: '180px'}} alt=""/>
            </div>
            <div className="col-md-6">
                <h5>{name}</h5>
                <p>{guest} guests {bedroom} bedrooms {bed} bed {bath} bath</p>
                <p>Wif Airconditioning Kitchen</p>
                <p>Cancellation fexibility available</p>
                <p>
                    <img src={ratingImg} className="rating" alt=""/>
                    <strong style={{marginRight: '15px'}}>{rating}({reviewer})</strong>
                    <span style={{marginRight: '10px'}}><strong>${cost}/</strong>night</span>${totalCost}/total
                </p>
            </div>
        </div>
    );
};

export default ShowHotel;