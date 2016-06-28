(function ($) {



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
                        var $tr = $('<tr>').append('<td>' + response[i].id + '</td>' + '<td>' + response[i].marca + '</td>' + '<td>' + response[i].modelo + '</td>');
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

    $('button').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');
        $.post('http://localhost:8680/rest/ops/reserva/cancelar/' + id, null, function (response) {
            console.log('Reserva Cancelada');
        }).fail(function () {
            alert('Error al buscar vehiculos!');
        });
    });

    $.get('http://localhost:8680/rest/ops/resrvas/listado', null, function (response) {
        $('#body').empty();
        for (var i = 0; i < response.length; i++) {
            var $tr = $('<tr>').append('<td>' + response[i].codigoReserva +
                    '</td>' + '<td>' + response[i].fechaReserva +
                    '</td>' + '<td>' + response[i].vendedor.nombre +
                    '</td>' + '<td>' + response[i].cliente.nombre +
                    '</td>' + '<td>' + response[i].vehiculo.marca + ' ' + response[i].vehiculo.modelo +
                    '</td>' + '<td> <button type="submit" class="btn btn-default" data-id="' + response[i].id + '" id="boton-buscar-vehiculo">Buscar</button>' +
                    '</td>');
            $('#body').append($tr);
        }

    }).fail(function () {
        alert('Error al buscar vehiculos!');
    });


})(jQuery);

