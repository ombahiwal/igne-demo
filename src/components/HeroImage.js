import React, { useState } from 'react'; 
import {InputGroup, Button, FormControl, Form, Spinner, Toast} from 'react-bootstrap';
import './hero.scss';
import _ from 'lodash';
import getFormData from 'get-form-data';
import SearchUtils from '../utils/search-utils';
const HeroImage = props=>{
    // Intialize vehicle info and labels
    const [vehicle_info, setVehicleInfo] = useState([{label:"Trade Name", value:"-"}, {label:"Date of first admission", value:"-"}, {label:"Fuel description", value:"-"}]);
    // Flags for loading and error
    const [error, setError] = useState({show:true, msg:""});
    const [loading, setLoading] = useState(false);
    function validate_num_string(num_str){
        // validate input vehicle number
    }
    async function fetchData(e){
        e.preventDefault();
        setLoading(true);
        // return ;
        let form = document.querySelector('#vehicle-plate-form');
        let form_data = getFormData(form);
        console.log(form_data.vehicle_number_plate, /^B[A-Z0-9]{2}-[0-9A-Z]{3}$/.test(form_data.vehicle_number_plate));
        setLoading(false);
        return;
        await SearchUtils.fetchVehicleInfo(form_data.vehicle_number_plate).then((response) => {
            console.log('response from our api',response.data);
            if(response.data.kentekenplaat){
                var data = response.data;
                // "2013-11-26"
                setVehicleInfo([{label:"Trade Name", value:_.startCase(_.toLower(data.handelsbenaming))}, {label:"Date of first admission", value:data.datum_eerste_toelating.split("-").reverse().join("-")}, {label:"Fuel description", value:data.brandstof[0]["brandstof_omschrijving"]}])
                setLoading(false);
            }else{
                
            }
          })
          .catch((error) => {
              setError({show:true, msg:"Invalid number"});
              setLoading(false);    
          });
          
    }
    return (
        <div className="wrapper-top">
            <div className="hero-image">
            <div className="hero-text">
                <div className="hero-msg">
                     {'Please enter your license plate number'}
                </div>
                <Form id="vehicle-plate-form"onSubmit={fetchData}>
                    <InputGroup size="small" >
                            <FormControl
                            name="vehicle_number_plate"
                            size="small"
                            className="number-plate-input"
                            placeholder="6-XXH-68"
                            aria-describedby="basic-addon1"
                            disabled={loading}
                        />
                        <InputGroup.Append>
                            <Button type="submit" size="small" disabled={loading}>
                            {loading && <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        />}
                            {!loading && 'Send'}
                            </Button>
                        </InputGroup.Append>
                        
                    </InputGroup>            
                </Form>
            </div>
            </div>
                <div className="vehicle-info-card">
                    {vehicle_info.map(info=>{
                        return <div key={info.label} className="vehicle-info-card-item">
                                    <div className="vehicle-info-card-label">{info.label}</div>
                                    <div className="vehicle-info-card-value">{info.value}</div>
                                </div>
                    })}
            
                </div>
                {/* <CustomToast className="toast-div" show={error.show} msg={error.msg}/> */}
                <div className="toast-div">
                {error.show && <Toast onClose={() => setError({show:false, msg:""})} show={error.show} delay={3000} autohide>
                    <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{error.msg}</strong>
                    <small></small>
                    </Toast.Header>
                    {/* <Toast.Body>{error.msg}</Toast.Body> */}
                </Toast>}
                </div>
        </div>
        
    );
}

export default HeroImage;

