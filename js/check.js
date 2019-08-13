require.config({
    baseUrl:"module",
    paths:{
        list:"list",
        tab:"tab",
        jquery:"../jquery.1.12.4"
    } 
})

require(["jquery","tab","list"],function(_,t,l){
        var opt = new l({
        cont:$(".tab_t").children(".tab_item")
    })

    new t({
        btns:opt.str,
        tab:$(".tab_list")
    })

})