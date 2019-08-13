class Goods {
    constructor() {
        this.tab_list = document.querySelector(".tab_list");
        this.url = "http://localhost/project/tugo/data/goods.json";

        this.addEvent();
        this.load();
        
    }

    addEvent() {
        var that = this;
        console.log(this)
        this.tab_list.addEventListener("click", function (eve) {
            if (eve.target.className == "btn") {
                that.id = eve.target.parentNode.parentNode.getAttribute("qwe");
                that.setCookie();
            }
        })
    }

    setCookie() {
        // console.log(this.id);
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length == 0){
            this.goods.push({
                id: this.id,
                num: 1
            })
        }else{
            var i=0;
            var onoff = this.goods.some((val,index)=>{
                i = index;
                return val.id == this.id;
            })
            if(onoff){
                this.goods[i].num++;
            }else{
                this.goods.push({
                    id: this.id,
                    num: 1
                })
            }
        }
        setCookie("goods",JSON.stringify(this.goods));
    }

    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.display();
        })
    }

    display() {
        var str = "";
       
        this.res.forEach((val) => {
            str += `
            <li class="list_item" qwe="${val.goodsId}">
    <a href="">
        <div class="pro-hd">
            <span class="name" style="color:red;">${val.name}</span>
            <p class="info">${val.tip}</p>
            <em class="info pot_s">${val.price}</em>
        </div>
        <div class="pro_img">
            <a href="" class="pop" id="${val.goodsId}" ><img src="${val.url}" alt=""></a>
        </div>
        <div class="np">&nbsp;&nbsp;</div>
    </a>
    <div class="mask ">
        <a href="javascript:;" class="btn">加入购物车</a>
    </div>
</li>
        `;
        })
        this.tab_list.innerHTML = str;
        this.setAdd()
    }
    setAdd(){
        var opt = document.querySelectorAll(".pop");
        for(var i=0;i<opt.length;i++){
            var mt = opt[i].getAttribute("id");
            opt[i].setAttribute("href",`list.html?${mt}`)
        }
    }

}

new Goods();