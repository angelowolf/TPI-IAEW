(function ($) {


    $('#select-pais').on('change', function () {
        var id = $('#select-pais').val();
        $.get('http://localhost:8680/rest/aux/data/ciudades/' + id, null, function (response) {
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
                var data = 'idCiudad=' + $('#select-ciudad').find(":selected").val() + '&fecRet=' + $('#fechaRetiro').val() + '&fecDev=' + $('#fechaDevolucion').val();
                $.get('http://localhost:8680/rest/aux/data/vehiculos', data, function (response) {
                    $('#body').empty();
                    
                    for (var i = 0; i < response.length; i++) {
                        var acon = "No";
                        if(response[i].tieneAireAcon) {
                            acon = "Si";
                        }
                        var dir = "No";
                        if(response[i].tieneDireccion) {
                            dir = "Si";
                        }                            
                        var $tr = $('<tr>').append('<td>' + response[i].id+ '</td>' + '<td>' + response[i].marca + '</td>' 
                                                 + '<td>' + response[i].modelo + '</td>' + '<td>' + response[i].cantidadPuertas 
                                                 + '</td>' + '<td>' + response[i].precioPorDia + '</td>' 
                                                 + '<td>' + response[i].puntaje + '</td>' + '<td>' + response[i].tipoCambio + '</td>' 
                                                 + '<td>' + acon + '</td>' + '<td>' + dir + '</td>'
                                                 + '</tr>');
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
