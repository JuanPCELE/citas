<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Cuenta | NailsLink</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
</head>
<body>

    <header>
        <a href="{{ url('/') }}" class="logo">Nails<span>Link</span></a>
        <x-navbar />
    </header>

    <section class="booking" >
        <div class="booking-container">
            <div class="booking-header">
                <h2>Crear Cuenta</h2>
                <p>Regístrate para gestionar tus citas fácilmente.</p>
            </div>
            <form method="POST" action="#">
                @csrf
                <div class="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" name="name" placeholder="Ej. Alejandra García" required>
                </div>
                <div class="form-group">
                    <label>Correo Electrónico</label>
                    <input type="email" name="email" placeholder="correo@ejemplo.com" required>
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" placeholder="Mínimo 8 caracteres" required>
                </div>
                <div class="form-group">
                    <label>Confirmar Contraseña</label>
                    <input type="password" name="password_confirmation" placeholder="Repite tu contraseña" required>
                </div>
                <button type="submit" class="btn-submit full-width">Crear mi Cuenta</button>
            </form>
        </div>
    </section>

    <footer>
        <p>Nails Studio GDL &copy; {{ date('Y') }}</p>
        <p class="sm-text">Alta Manicura Profesional | Hecho en Laravel xd</p>
    </footer>

</body>
</html>