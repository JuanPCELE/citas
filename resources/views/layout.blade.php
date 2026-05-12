<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NailsLink</title>

    <style>

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial;
        }

        body{
            background:#f6f1f1;
        }

        nav{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:20px 60px;
            background:white;
        }

        .logo{
            font-size:34px;
            font-weight:bold;
        }

        .logo span{
            color:#b57b90;
        }

        .menu{
            display:flex;
            gap:20px;
        }

        .menu a{
            text-decoration:none;
            color:black;
            padding:10px 16px;
        }

        .active{
            background:#b57b90;
            color:white !important;
        }

        .container{
            padding:50px 70px;
        }

        .card-grid{
            display:grid;
            grid-template-columns:repeat(2, 260px);
            gap:35px;
        }

        .card{
            background:#f5dfe3;
            padding:20px;
            border-radius:10px;
        }

        .card h2{
            color:#9d6b7c;
        }

        .card h3{
            color:#9d6b7c;
            margin-bottom:15px;
        }

        .card p{
            margin-bottom:10px;
        }

        .account-box{
            width:600px;
            background:white;
            padding:40px;
            margin:auto;
        }

        .account-box h1{
            margin-bottom:25px;
        }

        .account-box p{
            margin-bottom:18px;
            font-size:18px;
        }

        button{
            width:100%;
            border:none;
            background:#b57b90;
            color:white;
            padding:15px;
            font-size:20px;
            cursor:pointer;
            margin-top:20px;
        }

    </style>

</head>
<body>

<nav>

    <div class="logo">
        Nails<span>Link</span>
    </div>

    <div class="menu">
        <a href="/">Inicio</a>
        <a href="/citas">Mis Citas</a>
        <a href="/historial">Historial</a>
        <a href="/cuenta" class="active">Mi Cuenta</a>
    </div>

</nav>

<div class="container">
    @yield('content')
</div>

</body>
</html>