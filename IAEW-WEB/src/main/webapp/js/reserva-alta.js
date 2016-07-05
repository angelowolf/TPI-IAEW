(function ($) {


    $('#select-pais').on('change', function () {
        var id = $('#select-pais').val();
        $.get('http://localhost:8080/tpi-heroku/rest/aux/data/ciudades/' + id, null, function (response) {
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
                $.get('http://localhost:8080/tpi-heroku/rest/aux/data/vehiculos', data, function (response) {
                    var $vehiculo = $('#select-vehiculo');
                    $vehiculo.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
                    for (var i = 0; i < response.length; i++) {
                        $vehiculo.append('<option value="' + response[i].vehiculoPorCiudadId + '">' + response[i].marca + ' ' + response[i].modelo + '</option>');
                    }
                    $vehiculo.prop('disabled', false);
                }).fail(function () {
                    alert('Error al buscar vehiculos!');
                });
            }
        } else {
            alert("Seleccione una ciudad!");
        }
    });

    $('#boton-guardar').click(function (e) {
        e.preventDefault();
        if ($('#fechaDevolucion').val() === '') {
            alert("Ingrese una fecha de devolucion");
        } else if ($('#fechaRetiro').val() === '') {
            alert("Ingrese una fecha de retiro");
        } else if ($('#select-devolucion').find(":selected").val() === 'Seleccionar') {
            alert("Seleccione ciudad de devolucion!");
        } else if ($('#select-retiro').find(":selected").val() === 'Seleccionar') {
            alert("Seleccione ciudad de retiro!");
        } else if ($('#nombre').val() === '') {
            alert("Ingrese un nombre del cliente");
        } else if ($('#documento').val() === '') {
            alert("Ingrese un numero de documento del cliente");
        } else if ($('#select-vehiculo').find(":selected").val() > 0) {
            if ($('#select-vendedor').find(":selected").val() > 0) {
                if ($('#select-ciudad').find(":selected").val() > 0) {
                    var data = 'nomCliente=' + $('#nombre').val() +
                            '&docCliente=' + $('#documento').val() +
                            '&fecDevol=' + $('#fechaDevolucion').val() +
                            '&fecRet=' + $('#fechaRetiro').val() +
                            '&idVehCiu=' + $('#select-vehiculo').find(":selected").val() +
                            '&lugDev=' + $('#select-devolucion').find(":selected").val() +
                            '&lugRet=' + $('#select-retiro').find(":selected").val() +
                            '&idVend=' + $('#select-vendedor').find(":selected").val() + 
                            '&idCiudad=' + $('#select-ciudad').find(":selected").val();
                    $.ajax({
                       url: 'http://localhost:8080/tpi-heroku/rest/ops/reservas/crear', 
                       type: 'GET', 
                       data: data,
                       success: function (response) {
                            alert('Reserva registrada con exito!');
                            window.location.replace('/todos_reservas.jsp');
                       }, 
                       error: function () {
                         alert('Error al guardar reserva!');
                       }
                    });
                    /*$.put('http://localhost:8080/tpi-heroku/rest/ops/reservas/crear', data, function (response) {
                        alert('Reserva registrada con exito!');
                        window.location.replace('/todos_reservas.jsp');
                    }).fail(function () {
                        alert('Error al guardar reserva!');
                    });*/
                } else {
                    alert("Seleccione una Ciudad!");
                }
            } else {
                alert("Seleccione un vendedor!");
            }
        } else {
            alert("Seleccione un vehiculo!");
        }
    });


    $.get('http://localhost:8080/tpi-heroku/rest/aux/data/vendedores', null, function (response) {
        var $vendedor = $('#select-vendedor');
        $vendedor.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
        for (var i = 0; i < response.length; i++) {
            $vendedor.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
        }
        $vendedor.prop('disabled', false);
    });

    $.get('http://localhost:8080/tpi-heroku/rest/aux/data/paises', null, function (response) {
        var $pais = $('#select-pais');
        $pais.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
        for (var i = 0; i < response.length; i++) {
            $pais.append('<option value="' + response[i].id + '">' + response[i].nombre + '</option>');
        }
        $pais.prop('disabled', false);
    });

    $.get('http://localhost:8080/tpi-heroku/rest/aux/data/lugares', null, function (response) {
        var $retiro = $('#select-retiro');
        var $devolucion = $('#select-devolucion');
        $retiro.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
        $devolucion.find('option').remove().end().append('<option selected disabled>Seleccionar</option>');
        for (var i = 0; i < response.length; i++) {
            $retiro.append('<option value="' + response[i] + '">' + response[i] + '</option>');
            $devolucion.append('<option value="' + response[i] + '">' + response[i] + '</option>');
        }
        $devolucion.prop('disabled', false);
        $retiro.prop('disabled', false);
    });

})(jQuery);