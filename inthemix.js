$('document').ready(function () {
  console.log('hey we ready!');


  

  // $('#contactInfo').submit(function(fullname, email){
  //   var allowableChars = /^
  
  //   if(fullname.value.match(allowableChars)) {
  //     console.log('allowed');
  //   } else {
  //     console.log('nuh-uh');

    $('form').on('submit',function (event) {
      console.log('okk');
      var first = $(this).val();
      console.log('first');
      if (first === '') {
        alert('Must Enter Full Name');
        event.preventDefault();
        $('submit').addClass('error_info');
        $(this).removeClass('great');
      }
    });

 // else if {

    // } else {

  //   } {

  //   }
  // })



// var navOffSet=jquery ('nav').offset().top;
// console.log('working');






})