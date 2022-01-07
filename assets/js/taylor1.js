/*購買數量*/
function Add() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    num++;
    document.getElementById('itemcount').innerText = num.toString();
    ProductNumberChange();
  }

  function Less() {
    var num = parseInt(document.getElementById('itemcount').innerText);
    if (num > 1) {
      num--;
      document.getElementById('itemcount').innerText = num.toString();
      ProductNumberChange();
    } 
    else {
      Delete();
    }
  }
/*照片輪播*/
        $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay:true,
        autoplaySpeed: 1000,
        });