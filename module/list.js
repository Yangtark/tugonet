define(function(){
    class List{
        constructor(options){
            this.str = options.cont;
            this.addEvent()
        }
        addEvent(){
            this.str.click(function(){
                $(this).css({
                    background:"#D70029"
                }).siblings("li").css({
                    background:""
                })
            })
        }
    } 
    return List;
})