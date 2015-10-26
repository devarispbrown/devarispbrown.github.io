$(document).ready(function () {

  $('#contact').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    
    submitHandler: function (form) {
      $.ajax({
        type: 'POST',
        url: 'http://quiet-oasis-7893.herokuapp.com/notes',
        accept: {
          javascript: 'application/javascript'
        },
        data: $(form).serialize(),
        dataType: "text",
        success: function() {
          console.log("winning.");
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus); //error logging
        }
      });
    }
  });
});