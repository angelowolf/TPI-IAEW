<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Todos</title>
        <link href="/../bower_components/bootstrap/dist/css/bootstrap.css" rel="stylesheet" type="text/css" >
        <link href="/../css/vendor/metisMenu.min.css" rel="stylesheet" type="text/css" >
        <link href="/../css/vendor/sb-admin-2.css" rel="stylesheet" type="text/css" >
        <link href="/../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" >

    </head>

    <body>
        <div id="wrapper">
            <!-- Navigation -->
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">IAEW</a>
                </div>
                <!-- /.navbar-header -->

                <!-- /.navbar-top-links -->

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <jsp:include page="/menu.jsp" />
                        </ul>
                    </div>
                    <!-- /.sidebar-collapse -->
                </div>
                <!-- /.navbar-static-side -->
            </nav>

            <!-- Page Content -->
            <div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">



                            <form id="form-alta" class="col-md-8 col-md-offset-2">

                                <div class="form-group">
                                    <label for="sel1">Vendedor:</label>
                                    <select class="form-control" id="select-vendedor" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>                               
                                <div class="form-group">
                                    <label for="sel1">Pais:</label>
                                    <select class="form-control" id="select-pais">
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Ciudad:</label>
                                    <select class="form-control" id="select-ciudad" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Lugar Retiro:</label>
                                    <select class="form-control" id="select-retiro" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Lugar Devolucion:</label>
                                    <select class="form-control" id="select-devolucion" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="Nombre">Nombre del Cliente</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                                </div>
                                <div class="form-group">
                                    <label for="Documento">Documento del Cliente</label>
                                    <input class="form-control" id="documento" placeholder="Documento">
                                </div> 
                                <div class="form-group">
                                    <label for="Retiro">Fecha Retiro</label>
                                    <input  class="form-control" id="fechaRetiro"  placeholder="dd/mm/yyyy">
                                </div>
                                <div class="form-group">
                                    <label for="Devolucion">Fecha Devolucion</label>
                                    <input  class="form-control" id="fechaDevolucion"  placeholder="dd/mm/yyyy">
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Vehiculo:</label>
                                    <select class="form-control" id="select-vehiculo" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-12">
                                        <div class="form-group row">
                                            <label for="sel1" class="control-label col-md-1">Vehiculo:</labe    l>
                                                <div class="col-md-10">
                                                    <select class="form-control" id="select-vehiculo" disabled>
                                                        <option selected disabled>Seleccionar</option>
                                                        <option value="1">caca</option>
                                                        <option value="2">cacdasdasa</option>
                                                        <option value="3">sdgffgs</option>
                                                        <option value="4">dfg</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-1">
                                                    <button id="boton-buscar-vehiculo" class="btn btn-info">Buscar</button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <br>


                                <div class=" pull-left">
                                    <button type="submit" id="boton-guardar" class="btn btn-success">Guardar</button>
                                </div>

                            </form>







                        </div>
                        <!-- /.col-lg-12 -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /#page-wrapper -->
        </div>
        <!-- /#wrapper -->
        <script src="/../js/vendor/jquery.min.js" ></script>
        <script src="/../js/vendor/bootstrap.min.js" ></script>
        <script src="/../js/vendor/metisMenu.min.js" ></script>
        <script src="/../js/vendor/sb-admin-2.js" ></script>
        <script src="/../js/reserva-alta.js" ></script>
    </body>
</html>