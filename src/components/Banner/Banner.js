import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import './Banner.css';
import bannerImg1 from '../../material/Image/coxbazarBanner.png';
import bannerImg2 from '../../material/Image/sreemongolBanner.jpg';
import bannerImg3 from '../../material/Image/sundorbonBanner.jpg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={bannerImg1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={bannerImg3} alt="Sundarbans" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sundarbans</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg1} alt="Cox's Bazar" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Cox's Bazar</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach.</p>
                </div>
                <div class="card-footer">
                  <Link to={"/booking/"+1}><Button style={{color: 'black', padding: '6px 30px', background: '#F9A51A', borderRadius: '5px'}}>Visit for Booking</Button></Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg2} alt="Sreemangal" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sreemangal</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor. A copper plate of Raja Marundanath from the 11th century was found in Kalapur.</p>
                </div>
              </div>
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={bannerImg2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={bannerImg1} alt="Cox's Bazar" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Cox's Bazar</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg2} alt="Sreemangal" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sreemangal</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.</p>
                </div>
                <div class="card-footer">
                  <Link to={"/booking/"+2}><Button style={{color: 'black', padding: '6px 30px', background: '#F9A51A', borderRadius: '5px'}}>Visit for Booking</Button></Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg3} alt="Sundarbans" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sundarbans</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh.</p>
                </div>
              </div>
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={bannerImg3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={bannerImg2} alt="Sreemangal" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sreemangal</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor. A copper plate of Raja Marundanath from the 11th century was found in Kalapur.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg3} alt="Sundarbans" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Sundarbans</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
                </div>
                <div class="card-footer">
                  <Link to={"/booking/"+3}><Button style={{color: 'black', padding: '6px 30px', background: '#F9A51A', borderRadius: '5px'}}>Visit for Booking</Button></Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={bannerImg1} alt="Cox's Bazar" />
                <div className="card-body">
                  <h5 className="card-title" style={{color: 'black'}}>Cox's Bazar</h5>
                  <p className="card-text" style={{color: 'black', textAlign: 'justify'}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues.</p>
                </div>
              </div>
            </div>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    );
};

export default Banner;