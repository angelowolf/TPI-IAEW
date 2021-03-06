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
                            <br>
                            <form class="form-inline">
                                <div class="form-group">
                                    <label for="sel1">Pais:</label>
                                    <select class="form-control" id="select-pais">
                                        <option selected disabled>Seleccionar</option>
                                        <!-- <option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option> -->
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">Ciudad:</label>
                                    <select class="form-control" id="select-ciudad" disabled>
                                        <option selected disabled>Seleccionar</option>
                                        <!--<option value="1">caca</option>
                                        <option value="2">cacdasdasa</option>
                                        <option value="3">sdgffgs</option>
                                        <option value="4">dfg</option>-->
                                    </select>
                                </div>
                                <div>
                                    <div class="form-group">
                                        <label for="Retiro">Fecha Retiro</label>
                                        <input  class="form-control" id="fechaRetiro"  placeholder="dd/mm/yyyy">
                                    </div>
                                    <div class="form-group">
                                        <label for="Devolucion">Fecha Devolucion</label>
                                        <input  class="form-control" id="fechaDevolucion"  placeholder="dd/mm/yyyy">
                                    </div>                                    
                                </div>
                                <button type="submit" class="btn btn-default" id="boton-buscar-vehiculo">Buscar</button>
                            </form>
                            <br>
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Marca</th> 
                                        <th>Modelo</th>
                                        <th>Puertas</th>
                                        <th>$/d�a</th>
                                        <th>Puntaje</th>
                                        <th>Transmisi�n</th>
                                        <th>AC</th>
                                        <th>Direccion</th>
                                    </tr>                               
                                </thead>
                                <tbody id="body">
                                </tbody>
                            </table>
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
        <script src="/../js/autos.js" ></script>
    </body>
</html>