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

                            TODOS

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