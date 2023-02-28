

function openContent(){
let tabs = document.querySelectorAll(".tabs__links");
let tabContents = document.querySelectorAll(".content div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });   
        tabs.forEach((tab) => {
          tab.classList.remove("active");  
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
     } );
});
}

export default openContent
