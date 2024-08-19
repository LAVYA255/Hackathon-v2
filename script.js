//Scramble
$(document).ready(function () {
  // ELEMENTS
  var $scramble = $(".scramble");

  $scramble.scramble(3000, 20, "alphabet", true);
});

//scrambleEnd

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    // y: "-100%",
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(
    ".loader",
    {
      y: "-100%",
     
      duration: 1,
      
    },
    "up"
  )
  .to(
    ".header", 
    {
      opacity: 1,
      duration: 1,
      ease: "Expo.easeInOut",
    },
    "up+=1" 
  );
  /* JS for FORM*/
  $(document).ready(function() {
    $('#submit-btn').on('click', function(e) {
      e.preventDefault();
      var formData = $('#quiz-form').serialize();
      $.ajax({
        type: 'POST',
        url: '/submit', 
        data: formData,
        success: function(data) {
          console.log(data);
          
        },
        error: function(xhr, status, error) {
          console.log(xhr.responseText);
          
        }
      });
    });
  });
 