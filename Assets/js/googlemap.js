const $ = require('jquery');

window.$ = $;
const officeList = require("./officelocation.json");
console.log(officeList);

const googleMaplocations = () => {
    let currentInfo;
    
  const displayGoogleMap = document.getElementById("mygooglemaps");
 if(displayGoogleMap){
  const newMap = officeList;

  let options;

  function initMap() {
    options = new google.maps.Map(displayGoogleMap, {
      center: new google.maps.LatLng(43.845388, -75.802482),

      zoom: 3,
    });

    for (let country of newMap) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(country.latitude, country.longitude),

        map: options,

        icon: "../../images/map-marker.svg",
      });

      const contentString = `<div class="info-window"><h1>${country.officeName}</h1>
      <a href=" http://maps.google.com/maps?q=   ${country.addressLine1}  " target="_blank" class="c-location-listing__region-office-address">
      ${country.addressLine1}
      ${country.cityName}
      ${country.stateProvinceName}</a></div>`
      ;

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener("click", () => {
        if( currentInfo){
            currentInfo.close( options, marker );
        }
        infowindow.open( options, marker );
        currentInfo=infowindow;
      });
   
   
      
    
    
    }
  }

  initMap();
}
};
// $(document).ready(function()
// {
// console.log("green")

// })

export default googleMaplocations;
