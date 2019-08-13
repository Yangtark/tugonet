class Shopping {
    constructor() {
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/project/tugo/data/goods.json";
        this.price;
        this.num;
        this.load();
        this.addEvent();
    }

    addEvent() {
        var that = this;
        console.log(this)
        this.tbody.addEventListener("click", function (eve) {
            if (eve.target.className == "del") {
                that.id = eve.target.parentNode.getAttribute("index");
                eve.target.parentNode.parentNode.parentNode.remove();
                that.changeCookie(function(i){
                    that.goods.splice(i,1);
                });
            }
        })

        this.tbody.addEventListener("input",function(eve){
            if(eve.target.className == "num"){
                that.id = eve.target.parentNode.parentNode.parentNode.getAttribute("index");
                that.changeCookie(function(i){
                    that.goods[i].num = eve.target.value;
                });
            }
        })
    }

    changeCookie(callback){
        var i = 0;
        this.goods.some((val,index)=>{
            i = index;
            return val.id == this.id;
        })
        callback(i);
        setCookie("goods",JSON.stringify(this.goods));
    }

    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }

    getCookie() {
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];

        this.display();
    }

    display() {
        var str = "";
        this.res.forEach((resVal) => {
            this.goods.forEach((goodsVal) => {
                if (resVal.goodsId == goodsVal.id) {
                    str += `
                    <tr>
                            <td class="clear" index="${resVal.goodsId}">
                                <input type="checkbox" class="put" checked="check">
                                <a href="" class="pro_img">
                                    <img src="${resVal.url}" alt="">
                                </a>
                                <div class="pro">
                                    <div class="pro_p">
                                        <a href="">
                                            ${resVal.name}
                                        </a>
                                        <br>
                                        <label for="" class="befor">
                                            元宝最高抵扣金额 ￥2
                                        </label>
                                    </div>
                                </div>
                            </td>
                            <td>${resVal.price}</td>
                            <td class="tde">
                                <div class="num">
                                    <input type="number" class="num" value="${goodsVal.num}" min=1>
                                </div>
                            </td>
                            <td class="xiaoji">￥25.9</td>
                            <td class="but">
                                <div>
                                    <a href="javascript:;">移入收藏夹</a>
                                </div>
                                <div>
                                    <a href="javascript:;" class="del">删除</a>
                                </div>
                            </td>
                        </tr>
                    `;
                }
            })
        })
        
        this.tbody.innerHTML = str;
        console.log(str)
        this.bric();
    }
    bric(){

    }

}

new Shopping();