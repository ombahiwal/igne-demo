import React from 'react'; 
// import styled from ''
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import './hero.scss';
const InfoCard = props=>{
    return (
        <div className="hero-wrapper">
        <div className="hero-image">
        <div className="hero-text">
            <p>Please enter your license plate number</p>
            <InputGroup size="small" >
                    <FormControl
                        className="number-plate-input"
                        placeholder="6-XXH-68"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Append>
                        <Button> Send </Button>
                    </InputGroup.Append>
            </InputGroup>            
        </div>
        </div>
        </div>
    );
}

export default HeroImage;

