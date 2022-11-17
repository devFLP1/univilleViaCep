$(document).ready(function () {
  $("#js-cep").focusout(function () {
    var cep = $(this).val().replace(/\D/g, "");
    if (cep) {
      var validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        $.getJSON(
          `https://viacep.com.br/ws/${cep}/json/?callback=?`,
          function (data) {
            if (!("error" in data)) {
              $("#js-address").val(data.logradouro);
              $("#js-province").val(data.bairro);
              $("#js-city").val(data.localidade);
              $("#js-state").val(data.uf);
            }
          }
        );
      }
    }
  });
});
