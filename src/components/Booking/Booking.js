import { TextField } from '@material-ui/core';
import React from 'react';
import './Booking.css';
import places from '../../fakeData/places';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link, useParams } from 'react-router-dom';

const Booking = () => {
    const {placeId} = useParams()
    const place = places.find(place => place.id == placeId);
    
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    return (
        <div>
            <div className="container" style={{backgroundImage: `url("${place.img}")`, height: '600px'}}>
                <div className="row">
                    <div className="col-md-6" style={{marginTop: '100px'}}>
                        <h1 style={{color: 'white', background: 'rgba(0, 0, 0, 0.6)'}}>{place.name}</h1>
                        <p  style={{color: 'white', background: 'rgba(0, 0, 0, 0.6)'}}>{place.details}</p>
                    </div>
                    <div className="col-md-6"  style={{marginTop: '100px'}}>
                        <div className="search">
                            <form action="">
                                <TextField name="origin" style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Origin" />
                                <TextField name="destination" style={{width: '400px', marginBottom: '30px'}} id="standard-basic" label="Destination" />
                                <div className="date-picker d-flex justify-content-between">
                                    <div className="from">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    style={{width: '180px'}}
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="From"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className="to">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    style={{width: '180px'}}
                                                    disableToolbar
                                                    variant="inline"
                                                    format="MM/dd/yyyy"
                                                    margin="normal"
                                                    id="date-picker-inline"
                                                    label="To"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </div>
                                </div>
                                <Link to={"/hotel/"+placeId}><input type="submit" className="btnbooking" value="Start Booking"/></Link>
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;