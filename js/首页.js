/**
 * Created by Administrator on 2019/2/15.
 */
(function(){
    var bannerphoto=document.getElementsByClassName("banner-left-left")[0];
    var photo=document.getElementsByClassName("photo");
    var littlephoto=document.getElementsByClassName("littlephoto");
    var hover=document.getElementsByClassName("hover-bg")[0];
    for(var i=0;i<bannerphoto.children.length;i++){
        bannerphoto.children[i].style.zIndex=4-i;
    }
    var time=setInterval(function(){
        for(var i=0;i<bannerphoto.children.length;i++){
            var index=bannerphoto.children[i].style.zIndex;
            index++;
            if(index==bannerphoto.children.length){
                index=0;
                bannerphoto.children[i].className="imggo";
            }
            if(index==bannerphoto.children.length-1){
                bannerphoto.children[i].className="imgshow";
            }
            bannerphoto.children[i].style.zIndex=index;
        }
    },2000)
})();
