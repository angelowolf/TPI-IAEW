<div class="modal fade" id="modal-ver" tabindex="-1" role="dialog" aria-labelledby="Ver" aria-hidden="true">
    <div class="modal-dialog modal-dialog-center">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Reserva</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <form id="form-ver" class="well">
                        <input type="hidden" id="id" name="id">
                        <div class="form-group">
                            <label for="codigo">Codigo Reserva</label>
                            <input type="number" class="form-control" id="codigo" name="codigo" readonly="true">
                        </div>
                        <div class="form-group">
                            <label for="fecha">Fecha de Reserva</label>
                            <input type="text" class="form-control" id="fecha" name="fecha" readonly="true">
                        </div>
                        <div class="form-group">
                            <label for="vendedor">Vendedor</label>
                            <input type="text" class="form-control" id="vendedor" name="vendedor"  readonly="true">
                        </div>
                        <div class="form-group">
                            <label for="cliente" name="categoria">Cliente</label>
                            <input type="text" class="form-control" id="cliente" name="cliente" readonly="true">
                        </div>
                        <div class="form-group">
                            <label for="costo" name="unidad">Costo</label>
                            <input type="number" class="form-control" id="costo" name="costo" readonly="true">
                        </div>
                        <div class="form-group">
                            <label for="venta">Venta</label>
                            <input type="number" class="form-control" id="venta" name="venta"  readonly="true">
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-right" id="salir" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>    
</div>  