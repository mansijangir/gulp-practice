// const $ = require('jquery');
// window.$ = $;


const colorFilter=()=>{
 $(document).ready(function(){
  
    $('.button-select').on("click",function(){
        const value = $(this).attr('data-filter');
        console.log(value);
        if(value == 'all')
        {
            $('.color-box').hide()
            $('.color-box').show(1000)
        }
        else
        {
            $('.color-box').not('.'+value).hide()
            $('.color-box').filter('.'+value).show(1000)
        }



    })
 })
}





export default colorFilter;