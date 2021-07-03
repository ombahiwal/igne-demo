import './App.scss';
// french pattern="^([A-HJ-NP-TV-Z]{2}|[0-9]{3,4})-?([A-HJ-NP-TV-Z]{2,3}|[0-9]{3})-?([A-HJ-NP-TV-Z]{2}|[0-9]{2})$"

import {useEffect} from 'react';
import HeroInputCard from './components/HeroInputCard';
import CarouselResponsive from './components/CarouselResponsive';
import img1 from './components/sample_images/image1.jpg'
import img2 from './components/sample_images/image2.jpg'
import img3 from './components/sample_images/image3.jpg'
import img4 from './components/sample_images/image4.jpg'
function App() {
  const carousel_image_paths = [img1, img2, img3, img4];
  useEffect(()=>{
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      {/* <b className="App-title">License Plate</b> */}
      </header>
      <HeroInputCard/>            
          <center>
            <CarouselResponsive imagePaths={carousel_image_paths}/>  
            </center>
    </div>
  );
}

export default App;



/*


{
    "aantal_cilinders": 8,
    "typegoedkeuringsnummer": "e11*KS07/46*1213*00",
    "datum_eerste_toelating": "2013-11-26",
    "datum_eerste_afgifte_nederland": "2014-01-02",
    "eerste_kleur": "GEEL",
    "volgnummer_wijziging_eu_typegoedkeuring": 0,
    "type": "P1",
    "europese_voertuigcategorie": "M1",
    "export_indicator": false,
    "wam_verzekerd": true,
    "cilinderinhoud": 3799,
    "kenteken": "4TFL24",
    "variant": "DC4A50",
    "zuinigheidslabel": "C",
    "vervaldatum_apk": "2022-01-15",
    "toegestane_maximum_massa_voertuig": 1685,
    "brandstof": [
        {
            "brandstof_volgnummer": 1,
            "emissiecode_omschrijving": "5",
            "nettomaximumvermogen": 542,
            "geluidsniveau_stationair": 98,
            "brandstof_omschrijving": "Benzine",
            "co2_uitstoot_gecombineerd": 194,
            "geluidsniveau_rijdend": 74,
            "toerental_geluidsniveau": 2100
        }
    ],
    "merk": "MC LAREN",
    "kentekenplaat": "4-TFL-24",
    "carrosserie": [
        {
            "carrosserie_volgnummer": 1,
            "carrosserietype": "AD",
            "type_carrosserie_europese_omschrijving": "Coupe"
        }
    ],
    "uitvoering": "70AAE310",
    "taxi_indicator": false,
    "openstaande_terugroepactie_indicator": false,
    "aantal_zitplaatsen": 2,
    "bruto_bpm": 13617,
    "lengte": 459,
    "technische_max_massa_voertuig": 1685,
    "voertuigsoort": "Personenauto",
    "catalogusprijs": 1147717,
    "handelsbenaming": "MCLAREN P1",
    "as": [
        {
            "wettelijk_toegestane_maximum_aslast": 796,
            "plaatscode_as": "V",
            "aantal_assen": 2,
            "as_nummer": 1,
            "spoorbreedte": 165
        },
        {
            "wettelijk_toegestane_maximum_aslast": 970,
            "plaatscode_as": "A",
            "aantal_assen": 2,
            "as_nummer": 2,
            "spoorbreedte": 159
        }
    ],
    "massa_rijklaar": 1565,
    "plaats_chassisnummer": "r.",
    "vermogen_massarijklaar": 0.35,
    "inrichting": "coupe",
    "aantal_wielen": 4,
    "datum_tenaamstelling": "2014-01-02",
    "massa_ledig_voertuig": 1465,
    "wielbasis": 267,
    "sidecode": 8,
    "aantal_deuren": 2,
    "_links": {
        "self": {
            "href": "/voertuiggegevens/4TFL24?ovio-api-key=0f8aa1bc5f818f3abbe2f75600a069b83f90f5794dd2069ae451f11d4c555f38"
        }
    }
}

*/