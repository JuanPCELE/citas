<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nails Studio | Alta Manicura en Guadalajara</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
    <style>
        /* Pequeño ajuste en el CSS para la imagen de fondo de servicios */
        .services {
            background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), 
                              url('https://images.unsplash.com/photo-1604902396830-4e98f73117c7?q=80&w=1920&auto=format&fit=crop');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>
<body>

    <header>
                <a href="{{ url('/') }}" class="logo">Nails<span>Link</span></a>

<x-navbar />

    </header>

    <section class="hero">
        <div class="hero-content">
            <span class="badge">Estudio en Guadalajara</span>
            <h1>Tus manos merecen <span class="highlight">brillar</span></h1>
            <p>Descubre la experiencia de la alta manicura con diseños exclusivos, Gelish premium, Acrílico y Spa relajante. Reserva tu espacio y redefine tu estilo.</p>
            <a href="#agenda" class="btn-submit">Ver Disponibilidad</a>
        </div>
        <div class="hero-img-container">
<img src="{{ asset('imagenes/unasMain.webp') }}"
                 alt="Manicura premium profesional" class="real-photo">
            <div class="photo-shadow"></div>
        </div>
    </section>

    <section class="services">
        <h2>Experiencias Nails Link</h2>
        <div class="services-grid">
            <div class="service-card">
                <h3>Gelish Premium</h3>
                <p>Color impecable, brillo espejo y duración extrema por semanas.</p>
                <p class="price">$250 MXN</p>
            </div>
            <div class="service-card">
                <h3>Acrílico Escultural</h3>
                <p>Extensión y diseño de vanguardia personalizado para cada cliente.</p>
                <p class="price">$450 MXN</p>
            </div>
            <div class="service-card">
                <h3>Manicure Spa</h3>
                <p>Ritual completo de relajación, exfoliación e hidratación profunda.</p>
                <p class="price">$300 MXN</p>
            </div>
        </div>
    </section>

    <section class="booking" id="agenda">
        <div class="booking-container">
            <div class="booking-header">
                <h2>Aparta tu Espacio</h2>
                <p>Completa tus datos para confirmar tu reservación al instante.</p>
            </div>
            <form>
                <div class="form-group">
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Ej. Alejandra García" required>
                </div>
                <div class="form-group">
                    <label>WhatsApp</label>
                    <input type="tel" placeholder="33 1234 5678" required>
                </div>
                <div class="form-group">
                    <label>Servicio deseado</label>
                    <select required>
                        <option value="" disabled selected>Selecciona una experiencia...</option>
                        <option value="gelish">Gelish Premium</option>
                        <option value="acrilico">Acrílico Escultural</option>
                        <option value="spa">Manicure Spa</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Fecha y Hora</label>
                    <input type="datetime-local" required>
                </div>
                <button type="submit" class="btn-submit full-width">Confirmar mi Cita</button>
            </form>
        </div>
    </section>

    <footer>
        <p>Nails Studio GDL &copy; {{ date('Y') }}</p>
        <p class="sm-text">Alta Manicura Profesional | Hecho en Laravel xd</p>
    </footer>

</body>
</html>