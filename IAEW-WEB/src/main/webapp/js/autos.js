(function ($) {


    $('#select-pais').on('change', function () {
        var id = this.val;
        $.ajax({
            url: 'http://localhost:8680/rest/aux/data/ciudades',
            data: data,
            type: "POST",
            contentType: 'text/plain',
            xhrFields: {
                withCredentials: false
            }, headers: {
                // Set any custom headers here.
                // If you set any non-simple headers, your server must include these
                // headers in the 'Access-Control-Allow-Headers' response header.
            },
            success: function (data, textStatus, jqXHR) {
                var $ciudad = $('#select-ciudad');
                $ciudad.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
                for (var i = 0; i < response.length; i++) {
                    $ciudad.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
                }
                $ciudad.prop('disabled', false);
            },
            error: function () {
                alert("ERROR");
            }
        });
//        $.post('/data/ciudades', {idPais: id}, function (response) {
//            var $ciudad = $('#select-ciudad');
//            $ciudad.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
//            for (var i = 0; i < response.length; i++) {
//                $ciudad.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
//            }
//            $ciudad.prop('disabled', false);
//        });
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
//                $.post('http://localhost:8680/rest/aux/data/vehiculos', data, function (response) {
//                    $('#body').empty();
//                    for (var i = 0; i < response.length; i++) {
//                        var $tr = $('<tr>').append(
//                                $('<td>').text(response.id),
//                                $('<td>').text(response.marca),
//                                $('<td>').text(response.modelo)
//                                );
//                        $('#body').append($tr);
//                    }
//
//                }).fail(function () {
//                    alert('Error al buscar vehiculos!');
//                });


                $.ajax({
                    url: 'http://localhost:8680/rest/aux/data/vehiculos',
                    data: data,
                    type: "POST",
                    contentType: 'text/plain',
                    xhrFields: {
                        withCredentials: false
                    }, headers: {
                        // Set any custom headers here.
                        // If you set any non-simple headers, your server must include these
                        // headers in the 'Access-Control-Allow-Headers' response header.
                    },
                    success: function (data, textStatus, jqXHR) {
                        $('#body').empty();
                        for (var i = 0; i < data.length; i++) {
                            var $tr = $('<tr>').append(
                                    $('<td>').text(data.id),
                                    $('<td>').text(data.marca),
                                    $('<td>').text(data.modelo)
                                    );
                            $('#body').append($tr);
                        }
                    },
                    error: function () {
                        alert("ERROR");
                    }
                });
            }
        } else {
            alert("Seleccione una ciudad!");
        }
    });


    $.ajax({
        url: 'http://localhost:8680/rest/aux/data/paises',
        type: "POST",
        contentType: 'text/plain',
        xhrFields: {
            withCredentials: false
        }, headers: {
            // Set any custom headers here.
            // If you set any non-simple headers, your server must include these
            // headers in the 'Access-Control-Allow-Headers' response header.
        },
        success: function (response, textStatus, jqXHR) {
            var $pais = $('#select-pais');
            $pais.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
            for (var i = 0; i < response.length; i++) {
                $pais.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
            }
            $pais.prop('disabled', false);
        },
        error: function () {
            alert("ERROR");
        }
    });

//    $.post('http://localhost:8680/rest/aux/data/paises', null, function (response) {
//        var $pais = $('#select-pais');
//        $pais.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
//        for (var i = 0; i < response.length; i++) {
//            $pais.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
//        }
//        $pais.prop('disabled', false);
//    });


})(jQuery);