(function ($) {


    $('#select-pais').on('change', function () {
        var id = this.val;       
        $.get('http://localhost:8680/rest/aux/data/ciudades', {idPais: id}, function (response) {
            var $ciudad = $('#select-ciudad');
            $ciudad.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
            for (var i = 0; i < response.length; i++) {
                $ciudad.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
            }
            $ciudad.prop('disabled', false);
        });
    });

    $('#boton-buscar-vehiculo').click(function (e) {
        e.preventDefault();
        if ($('#select-ciudad').find(":selected").val() > 0) {
            if ($('#fechaDevolucion').val() === '') {
                alert("Ingrese una fecha de devolucion");
            } else if ($('#fechaRetiro').val() === '') {
                alert("Ingrese una fecha de retiro");
            } else {
                var data = 'idCiudad' + $('#select-ciudad').find(":selected").val() + 'fecRet' + $('#fechaRetiro').val() + 'fecDev' + $('#fechaDevolucion').val();
                $.get('http://localhost:8680/rest/aux/data/vehiculos', data, function (response) {
                    $('#body').empty();
                    for (var i = 0; i < response.length; i++) {
                        var $tr = $('<tr>').append(
                                $('<td>').text(response.id),
                                $('<td>').text(response.marca),
                                $('<td>').text(response.modelo)
                                );
                        $('#body').append($tr);
                    }

                }).fail(function () {
                    alert('Error al buscar vehiculos!');
                });
            }
        } else {
            alert("Seleccione una ciudad!");
        }
    });

    $.get('http://localhost:8680/rest/aux/data/paises', null, function (response) {
        var $pais = $('#select-pais');
        $pais.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
        for (var i = 0; i < response.length; i++) {
            $pais.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
        }
        $pais.prop('disabled', false);
    });


})(jQuery);
