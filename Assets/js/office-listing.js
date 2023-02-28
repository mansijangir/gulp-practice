const officeList = require("./office-listing.json");
const showOfficeListing = () => {
  const allOffices = document.querySelector(".office-list");

  if (allOffices) {
    let office,
      officeRegion,
      officeCity,
      officeStates = "",
      dropdownlist = "";
   
      
     
    const newoffices = officeList;
    const locationDropdownList = document.querySelector(
      ".c-location-listing__dropdown-list"
    );

    for (office of newoffices) {
      const officeRegions = office.country.states;
      dropdownlist += `<p class="c-location-listing__dropdown-list-item-country">${office.country.name}</p> `;

      const officecountries = office.country;

      for (officeRegion of officeRegions) {
        const officeCities = officeRegion.offices;

        let officeLists = "";
        for (officeCity of officeCities) {
          let addressLine2;
          officeCity.addressLine2 != null && officeCity.addressLine2 != ""
            ? (addressLine2 = officeCity.addressLine2)
            : (addressLine2 = "");
          let addressLine3;
          officeCity.addressLine2 != null && officeCity.addressLine3 != ""
            ? (addressLine3 = officeCity.addressLine2)
            : (addressLine3 = "");
          let addressLine4;
          officeCity.addressLine4 != null && officeCity.addressLine4 != ""
            ? (addressLine4 = officeCity.addressLine4)
            : (addressLine4 = "");

          const address =
            officeCity.addressLine1 +
            ", " +
            officeCity.cityName +
            ", " +
            officeCity.stateProvinceCode +
            ", " +
            officeCity.postalZipCode;

          const removeComa = address.replace(/\,/g, " ");
          const googleAddress = removeComa.replace(/\ /g, "%20");

          officeLists += `
                <div class="c-location-listing__region-office">
                  <h4 class="c-location-listing__region-office-city">

                                 ${officeCity.cityName}  </h4> <a href=" http://maps.google.com/maps?q=   ${googleAddress}  " target="_blank" class="c-location-listing__region-office-address">

                                ${officeCity.addressLine1} ${addressLine2}  ${addressLine3} ${addressLine4} <br>

                                ${officeCity.cityName} ,  ${officeCity.stateProvinceCode}  ${officeCity.postalZipCode} + </a>
                                <div class="c-location-listing__region-office-contact"><a class="c-location-listing__region-office-contact-phone" href="tel: ${officeCity.telephoneNumber} " title="tel. number:

                                 ${officeCity.telephoneNumber}">  ${officeCity.telephoneNumber}</a>
                                 <br /><a class="c-location-listing__region-office-contact-email" href="mailto:${officeCity.email}" title="email:${officeCity.email}"> Email</a></div><div class="c-location-listing__region-office-fax-number">Fax: ${officeCity.faxNumber}</div></div>`;


        }

        officeStates += `
          <div class="c-location-listing__region" id="${officeRegion.name}">
          <div class="c-location-listing__region-title">
          <h3 class="c-location-listing__region-name">
            ${officeRegion.name}</h3>

             </div> <div class="c-location-listing__region-wrapper"> ${officeLists}</div></div>
          `;

        dropdownlist += ` <button class="c-location-listing__dropdown-list-item" data-ref="${officeRegion.name}" >${officeRegion.name}</button> `;

       
      }
    }

    locationDropdownList.innerHTML = dropdownlist;

    allOffices.innerHTML = officeStates;
    const openDropdown = () => {
      document
        .querySelector(".c-location-listing__dropdown-trigger")
        .addEventListener("click", () => {
          document
            .querySelector(".c-location-listing__dropdown-list")
            .classList.toggle("open");
        });
    };
    openDropdown();

    
    

    const dropdownOptions = document.querySelectorAll(
      ".c-location-listing__dropdown-list-item"
    );

    const selectedoptions = () => {
      dropdownOptions.forEach((target) => {
        target.addEventListener("click", (e) => {
          const currentTarget = e.currentTarget;

          const currentId = target.getAttribute("data-ref");
          document.getElementById("city-name").innerHTML = currentId;
          document
            .querySelector(".c-location-listing__dropdown-list")
            .classList.remove("open");

          document
            .querySelectorAll(".c-location-listing__region")
            .forEach((value) => {
              value.classList.add("hide-content");
              value.classList.remove("display-selected-content");
            });
          document
            .getElementById(currentId)
            .classList.add("display-selected-content");
          document.getElementById(currentId).classList.remove("hide-content");
        });
      });
    };
    selectedoptions();

    const closeButton=()=>
    {
      document.querySelector(".c-location-listing__dropdown-trigger").addEventListener("click",()=>{
        document.querySelector(".close-button").classList.remove("hide-content")
      })

      document.querySelector(".close-button").addEventListener("click",()=>{ 
        document
            .querySelector(".c-location-listing__dropdown-list")
            .classList.remove("open");

            document.querySelector(".close-button").classList.add("hide-content");

           
        
            document.getElementById("city-name").innerHTML = "narrow";
            document
            .querySelectorAll(".c-location-listing__region")
            .forEach((value) => {
              value.classList.add("display-selected-content");
              value.classList.remove("hide-content");
            });
      })
    }
    closeButton();

  }
};


export default showOfficeListing;
