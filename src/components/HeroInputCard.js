import React, { useState } from 'react'; 
import './hero.scss';
import {InputGroup, Button, FormControl, Form, Spinner, Toast} from 'react-bootstrap';
import _ from 'lodash';
import getFormData from 'get-form-data';
import SearchUtils from '../utils/search-utils';


const HeroInputCard = props=>{
    // Intialize vehicle info and labels
    const [vehicle_info, setVehicleInfo] = useState([{label:"Trade name", value:"-"}, {label:"Date of first admission", value:"-"}, {label:"Fuel description", value:"-"}]);
    // Flags for load and error
    const [error, setError] = useState({show:false, msg:""});
    const [loading, setLoading] = useState(false); 
    const [input_val, setInputVal] = useState(""); // for real time input validation
    
    // validate input vehicle number before sending
    function validate_num_string(num_str){
        // ToDo : change to regex
        return (num_str.split("-").length <= 3 && num_str.length <=10 && num_str.length >=5) ? num_str.replace(/-/g, "") : false;
    }
    async function fetchData(e){
        e.preventDefault();
        try{
            setLoading(true);

            let form = document.querySelector('#vehicle-plate-form');
            let form_data = getFormData(form);
            // check the format
            if(validate_num_string(form_data.vehicle_number_plate)){
                // make request
                await SearchUtils.fetchVehicleInfo(validate_num_string(form_data.vehicle_number_plate)).then((response) => {
                    if(response.data.kentekenplaat){
                        var data = response.data;
                        setVehicleInfo([{label:"Trade Name", value:_.startCase(_.toLower(data.handelsbenaming))}, {label:"Date of first admission", value:data.datum_eerste_toelating.split("-").reverse().join("-")}, {label:"Fuel description", value:data.brandstof[0]["brandstof_omschrijving"]}])
                        setLoading(false);
                    }else{
                        setError({show:true, msg:"Some Error Occured"});
                        setLoading(false);
                    }
                })
                .catch((error) => {
                    setError({show:true, msg:"Invalid number"});
                    setLoading(false);    
                });
                
            }else{
                    setError({show:true, msg:"Invalid number"});
                    setLoading(false);
                return  
            }
        }catch(e){
            setError({show:true, msg:"Invalid number"});
            setLoading(false);    
        }
      
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
                                value={input_val}
                                onChange={(e)=>{if(e.target.value.length <=10) setInputVal(e.target.value.toUpperCase().replace(/[^\w-]/gi, ""))}}
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
                    <strong className="me-auto">{error.msg}</strong>
                    <small></small>
                    </Toast.Header>
                </Toast>}
                </div>
        </div>
        
    );
}

export default HeroInputCard;

// french pattern="^([A-HJ-NP-TV-Z]{2}|[0-9]{3,4})-?([A-HJ-NP-TV-Z]{2,3}|[0-9]{3})-?([A-HJ-NP-TV-Z]{2}|[0-9]{2})$"

