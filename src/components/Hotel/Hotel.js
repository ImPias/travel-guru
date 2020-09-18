import React from 'react';
import './Hotel.css';
import { useParams } from 'react-router-dom';
import places from '../../fakeData/places';
import hotelData from '../../fakeData/hotels';
import ShowHotel from '../ShowHotel/ShowHotel';

const Hotel = () => {
    const {placeId} = useParams();
    const hotels = hotelData.filter(hotel => hotel.placeId == placeId);
    const place = places.find(place => place.id == placeId);
    return (
        <div style={{width: '1200px', margin: '0 auto'}}>
            <hr/>
            <p>252 stays Apr 13-17 3 guests</p>
            <h3>Stay in {place.name}</h3>
            <div className="row">
                <div className="room-details col-md-6">
                    {
                        hotels.map(hotel => <ShowHotel hotelInfo={hotel}></ShowHotel>)
                    }
                </div>
                <div className="map col-md-6">
                    <h1>This is map</h1>
                </div>
            </div>
        </div>
    );
};

export default Hotel;