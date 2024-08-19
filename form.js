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