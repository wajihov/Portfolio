// get the container element
//let btnContainer = document.getElementById("sidenav");
let header = document.getElementById("btnActive");
console.log(header);

let btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

$(document).ready(function () {
  $('#idAbout').click(function () {
    console.log("Hello");
    $('.block-content').fadeIn(3000);
    
  });
  // $('#experience').hide();
  // $('#education').hide();
  // $('#competance').hide();
  // $('#interet').hide();
  // $('#awards').hide();
  // $('#about').click(function () {
  //     $('about').show();
  //     $('#experience').hide();
  //     $('#education').hide();
  //     $('#competance').hide();
  //     $('#interet').hide();
  //     $('#awards').hide();
  // });
  // $('#experience').click(function () {
  //     $('experience').show();
  //     $('about').hide();
  //     $('education').hide();
  //     $('competance').hide();
  //     $('interet').hide();
  //     $('awards').hide();
  // });
  // $('#education').click(function () {
  //     $('education').toggle();
  //     // $('about').hide();
  //     // $('experience').hide();
  //     // $('competance').hide();
  //     // $('interet').hide();
  //     // $('awards').hide();
  // });
  // $('#competance').click(function () {
  //     $('competance').show();
  //     // $('about').hide();
  //     // $('experience').hide();
  //     // $('education').hide();
  //     // $('interet').hide();
  //     // $('awards').hide();
  // });
  // $('#interet').click(function () {
  //     $('interet').show();
  //     // $('#about').hide();
  //     // $('#experience').hide();
  //     // $('#education').hide();
  //     // $('#competance').hide();
  //     // $('#awards').hide();
  // });
  // $('#awards').click(function () {
  //     // $('#about').hide();
  //     // $('#experience').hide();
  //     // $('#education').hide();
  //     // $('#competance').hide();
  //     // $('#interet').hide();
  //     $('awards').show();
  // });

})