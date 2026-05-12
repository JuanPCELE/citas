document.addEventListener('DOMContentLoaded', function () {

    const servicios = [
        { nombre: "Uñas express",     descripcion: "Manicure básico con esmalte normal",       estado: "activo",   precio: 150.00 },
        { nombre: "Gelish",           descripcion: "Manicure con esmalte semipermanente",       estado: "activo",   precio: 250.00 },
        { nombre: "Spa de manos",     descripcion: "Exfoliación, hidratación y manicure",       estado: "activo",   precio: 320.00 },
        { nombre: "Uñas acrílicas",   descripcion: "Extensiones de uñas con acrílico",         estado: "activo",   precio: 400.00 },
        { nombre: "Nail art",         descripcion: "Diseños personalizados sobre las uñas",     estado: "inactivo", precio: 180.00 },
        { nombre: "Pedicure básico",  descripcion: "Limpieza y esmalte en pies",               estado: "activo",   precio: 200.00 },
    ];

    const main = document.querySelector('.main');

    function renderServicios() {
        main.innerHTML = '<p class="topbar">homeAdmin</p><h1>Servicios</h1>';

        const grid = document.createElement('div');
        grid.className = 'citas-grid';
        grid.style.marginTop = '20px';

        servicios.forEach((servicio, index) => {
            grid.innerHTML += `
                <div class="cita-card">
                    <div class="cita-header">
                        <span class="cita-name">${servicio.nombre}</span>
                        <div class="cita-actions">
                            <svg class="btn-editar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#4a90e2" stroke-width="1.5" style="cursor:pointer">
                                <path d="M11 2l3 3-8 8H3v-3L11 2z"/>
                            </svg>
                            <svg class="btn-eliminar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#e24b4a" stroke-width="1.5" style="cursor:pointer">
                                <polyline points="3,4 13,4"/>
                                <path d="M5 4V2h6v2"/>
                                <rect x="4" y="4" width="8" height="9" rx="1"/>
                            </svg>
                            <span class="badge badge-${servicio.estado}">${servicio.estado}</span>
                        </div>
                    </div>
                    <div class="cita-detail">Descripción : ${servicio.descripcion}</div>
                    <div class="cita-footer">$${parseFloat(servicio.precio).toFixed(2)}</div>
                </div>
            `;
        });

        main.appendChild(grid);

        document.querySelectorAll('.btn-editar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i        = this.dataset.index;
                const servicio = servicios[i];

                document.getElementById('edit-nombre').value      = servicio.nombre;
                document.getElementById('edit-descripcion').value = servicio.descripcion;
                document.getElementById('edit-precio').value      = servicio.precio;
                document.getElementById('edit-estado').value      = servicio.estado;

                document.getElementById('modal-editar').dataset.index = i;
                document.getElementById('modal-editar').classList.add('activo');
            });
        });

        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i = parseInt(this.dataset.index);
                servicios.splice(i, 1);
                renderServicios();
            });
        });
    }

    document.getElementById('btn-guardar').addEventListener('click', function () {
        const i = parseInt(document.getElementById('modal-editar').dataset.index);

        servicios[i].nombre      = document.getElementById('edit-nombre').value;
        servicios[i].descripcion = document.getElementById('edit-descripcion').value;
        servicios[i].precio      = parseFloat(document.getElementById('edit-precio').value);
        servicios[i].estado      = document.getElementById('edit-estado').value;

        document.getElementById('modal-editar').classList.remove('activo');
        renderServicios();
    });

    document.getElementById('btn-cancelar').addEventListener('click', function () {
        document.getElementById('modal-editar').classList.remove('activo');
    });

    document.getElementById('modal-editar').addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('activo');
    });

    const style = document.createElement('style');
    style.textContent = `
        .badge-activo   { background: #e1f5ee; color: #0f6e56; }
        .badge-inactivo { background: #fcebeb; color: #a32d2d; }
    `;
    document.head.appendChild(style);

    renderServicios();

});