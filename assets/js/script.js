$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#enviarCorreo').click(function(){
      alert("El correo fuen enviado correctamente...")
    });

    $('body').on('dblclick','h4', function(){
      $(this).css("color", "red")
    });

    $('.card-title').click(function(){
      $('.card-text').toggle()
    });


})