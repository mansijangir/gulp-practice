
const $ = require('jquery');

window.$ = $;
import App from './app.js';
import bannerCarouselComponent from './banner-carousel.js';
import plasticAccordian from './services-accordian.js';
import openContent from './vertical-tab.js';
import openScrollContent from './vertical-scroll-tab.js'
import showOfficeListing from './office-listing.js'
import googleMaplocations from './googlemap.js'
import errorMsg from './form_validation'
// import displayDocInfo from './show_doctor'
import colorFilter from './color-filter'
import searchBtn from './header.js';

// const app = new App();
const bannerCarouselSlider = bannerCarouselComponent();
const  plasticAccordianService = plasticAccordian();
openContent();
openScrollContent();
showOfficeListing();
googleMaplocations();
errorMsg();
// displayDocInfo();
colorFilter();
searchBtn();