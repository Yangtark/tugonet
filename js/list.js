var img1 = document.querySelector(".img1");
var tut = document.querySelector(".tut");
var title = document.querySelector(".title");
var pri_now = document.querySelector(".pri_now");
var fff = document.querySelector(".fff");
var fff1 = document.querySelector(".fff1");
var txt1 = document.querySelector(".txt1");
var txtImg = document.querySelector(".txt-img");

onload = function(){
    var goodId = window.location.href;
    var id = goodId.split("?")[1];

    var url = "http://localhost/project/tugo/data/goods.json"
    ajaxGet(url,function(res){
        var res = JSON.parse(res);
        for(var i=0;i<res.length;i++){
            if(res[i].goodsId == id){
                img1.setAttribute("src",`${res[i].url}`);
                tut.setAttribute("src",`${res[i].url}`);
                title.innerHTML=`${res[i].name}`;
                pri_now.innerHTML = `${res[i].price}`;
                fff.innerHTML = `${res[i].name}`;
                fff1.innerHTML = `${res[i].name}`;
                txt1.innerHTML = `${res[i].tip}`;
                txtImg.setAttribute("src",`${res[i].xq}`);
            }
        }
    })
}
