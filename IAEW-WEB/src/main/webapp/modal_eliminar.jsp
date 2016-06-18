
    <div  id="#eliminar" class="modal fade eliminar" data-modelo="reserva" tabindex="-1" role="dialog" aria-labelledby="Eliminar" aria-hidden="true">
        <div class="modal-dialog modal-dialog-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Cancelar Reserva</h4>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="id"/>
                    <input type="hidden" id="model" value="reserva"/>
                    <p>¿Desea cancelar esta reserva?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default pull-left" id="cancelarEditar" data-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-warning" id="eliminar" value="reserva">Confirmar</button>
                </div>
            </div>
        </div>
    </div>