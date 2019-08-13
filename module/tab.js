define(function(){
    class Tab{
        constructor(options){
            this.btn = options.btns;
            this.t = options.tab;
            this.addEvent()
        }
        addEvent(){
            var _index = this;
            this.btn.on("click","li",function(){
                _index = $(this).index();
                var f = that.t.eq(_index).show().siblings().hide();
            })
        }
    }
    return Tab;
})