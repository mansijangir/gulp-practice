function openScrollContent() {
  let tabs = document.querySelectorAll(".vertical-scroll-tabs__links");
  const sections = document.querySelectorAll("desc[id]"); 

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {

      
      event.preventDefault();
      const targetelm = event.currentTarget;
      console.log(targetelm);
      const targetID = targetelm.getAttribute("data-scroll");
      console.log(targetID);
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tabs[index].classList.add("active");

      window.scrollTo({
        top: document.getElementById(targetID).offsetTop,
        behavior: "smooth",
      });
      // let scrollY = window.pageYOffset;


      // if (
      //   scrollY > offsetTop &&
      //   scrollY <= offsetTop 
      // )
      // {
      //   document.querySelector(".vertical-scroll-tabs .vertical-scroll-tabs__links[]").classList.add("active");
      // } 
      // else {
      //   document.querySelector(".vertical-scroll-tabs .vertical-scroll-tabs__links").classList.remove("active");
      // }
  
         });
  });
}

export default openScrollContent;
