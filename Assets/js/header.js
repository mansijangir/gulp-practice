const searchBtn=()=>
{ 
    $(document).ready(function(){
        $(".options-search").on("click", function(){
            $(".search-box").toggleClass("show-search-box")
        })
    })

    $(document).ready(function(){
        $(".search-box__form-closebtn").on("click", function(){
            $(".search-box").toggleClass("show-search-box")
        })
    })

    $(document).ready(function(){
        $(".sub-header-menu--btn").on("click", function(){
            $(".sub-header-container").toggleClass("activate-sub-header")
        })
    })

    $(document).ready(function(){
        $(".sub-header-menu--btn").on("click", function(){
            $(".fas").toggleClass("rotate-arrow")
        })
    })
}

export default searchBtn;