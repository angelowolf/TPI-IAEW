(function ($) {


    $('button').click(function (e) {
        e.preventDefault();
        var id = $(this).data('id');
        $.post('http://localhost:8080/tpi-heroku/rest/ops/reservas/cancelar/' + id, null, function (response) {
            console.log('Reserva Cancelada');
        }).fail(function () {
            alert('Error al buscar vehiculos!');
        });
    });

    $.get('http://localhost:8080/tpi-heroku/rest/ops/reservas/listado', null, function (response) {
        $('#body').empty();
        for (var i = 0; i < response.length; i++) {
           
            var $tr = $('<tr>').append('<td>' + response[i].codigoReserva +
                    '</td>' + '<td>' + response[i].fechaReserva +
                    '</td>' + '<td>' + response[i].fechaHoraRetiro +
                    '</td>' + '<td>' + response[i].fechaHoraDevolucion +
                    '</td>' + '<td>' + response[i].fechaCancelacion +
                    '</td>' + '<td>' + response[i].costo +
                    '</td>' + '<td>' + response[i].precioFinal +
                    '</td>' + '<td>' + response[i].vendedor.nombre +
                    '</td>' + '<td>' + response[i].cliente.nombre +
                    //'</td>' + '<td>' + response[i].vehiculo.marca + ' ' + response[i].vehiculo.modelo +
                    '</td>' + '<td> <button type="submit" class="btn btn-default" data-id="' + response[i].id + '" id="boton-buscar-vehiculo">Buscar</button>' +
                    '</td>');
            $('#body').append($tr);
        }

    }).fail(function () {
        alert('Error al buscar vehiculos!');
    });


})(jQuery);

