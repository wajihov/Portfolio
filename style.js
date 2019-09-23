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
(function () {
  // if ($(".typed  p span").length) {
  //   $(".typed p span").typed({
  //     strings: [" en genie logiciel.", " Full Stack.", " Java Spring/ Angular."],
  //     typeSpeed: 50
  //   });
  // }
  // console.log("Hello BB");
  // $("#changeTitre").mouseleave(function () {
  //   console.log("Hello dan la fct");

  // });
});

// $(document).ready(function () {
//   $('.block-content').mouseenter(function () {
//     $('.block-content').css('color', 'black');
//   });
//   $('.block-content').mouseout(function () {
//     $('.block-content').css('color', 'white');
//   });

//   if ($("#typed").length) {
//     $("#typed").typed({
//       strings: ["genie logiciel.","Jonathon Doe.", "a developer.", "a designer.", "a traveler."],
//       typeSpeed: 50
//     });
//   }

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

// })