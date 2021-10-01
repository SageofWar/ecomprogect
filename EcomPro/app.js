//Making toggle menu
    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";
    function menuetoggle(){
        if(MenuItems.style.maxHeight == "0px"){
            MenuItems.style.maxHeight = "200px"
    }
        else{
            MenuItems.style.maxHeight = "0px"
        }
    }



  



// Making a gallery code
// var productImg = document.getElementById("productImg");
// var smallImg = document.getElementsByClassName("smallImg");
// smallImg[0].onclick = function(){
//     productImg.src = smallImg[0].src;
// }
// smallImg[1].onclick = function(){
//     productImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     productImg.src = smallImg[2].src;
// }
//Didnt end up using 