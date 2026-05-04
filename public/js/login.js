document.addEventListener('DOMContentLoaded', function () {

    const form     = document.getElementById('login-form');
    const email    = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        limpiarErrores();

        let valido = true;

        // Validar email
        if (email.value.trim() === '') {
            mostrarError(email, 'El correo es obligatorio.');
            valido = false;
        } else if (!formatoEmail(email.value.trim())) {
            mostrarError(email, 'Ingresa un correo válido.');
            valido = false;
        }

        // Validar contraseña
        if (password.value.trim() === '') {
            mostrarError(password, 'La contraseña es obligatoria.');
            valido = false;
        } else if (password.value.length < 8) {
            mostrarError(password, 'La contraseña debe tener al menos 8 caracteres.');
            valido = false;
        }

        if (valido) {
            console.log("si se ejecuto")
    window.location.href = REDIRECT_URL;
        }
    });

    function mostrarError(input, mensaje) {
        input.classList.add('input-error');
        const span = document.createElement('span');
        span.classList.add('error-msg');
        span.textContent = mensaje;
        input.parentElement.appendChild(span);
    }

    function limpiarErrores() {
        document.querySelectorAll('.error-msg').forEach(el => el.remove());
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    }

    function formatoEmail(valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }

});

