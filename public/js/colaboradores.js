document.addEventListener('DOMContentLoaded', function () {

    const colaboradores = [
        { nombre: "Karen López",    telefono: "333-111-2222", correo: "karen@nailslink.com",    especialidad: "Gelish",         estado: "activo"   },
        { nombre: "Matus García",   telefono: "333-222-3333", correo: "matus@nailslink.com",    especialidad: "Uñas acrílicas", estado: "activo"   },
        { nombre: "Sofía Ramírez",  telefono: "333-333-4444", correo: "sofia@nailslink.com",    especialidad: "Nail art",       estado: "activo"   },
        { nombre: "Paola Mendoza",  telefono: "333-444-5555", correo: "paola@nailslink.com",    especialidad: "Spa de manos",   estado: "inactivo" },
        { nombre: "Diana Torres",   telefono: "333-555-6666", correo: "diana@nailslink.com",    especialidad: "Pedicure",       estado: "activo"   },
    ];

    const main = document.querySelector('.main');

    function renderColaboradores() {
        main.innerHTML = '<p class="topbar">homeAdmin</p><h1>Colaboradores</h1>';

        const grid = document.createElement('div');
        grid.className = 'citas-grid';
        grid.style.marginTop = '20px';

        colaboradores.forEach((colaborador, index) => {
            grid.innerHTML += `
                <div class="cita-card">
                    <div class="cita-header">
                        <span class="cita-name">${colaborador.nombre}</span>
                        <div class="cita-actions">
                            <svg class="btn-editar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#4a90e2" stroke-width="1.5" style="cursor:pointer">
                                <path d="M11 2l3 3-8 8H3v-3L11 2z"/>
                            </svg>
                            <svg class="btn-eliminar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#e24b4a" stroke-width="1.5" style="cursor:pointer">
                                <polyline points="3,4 13,4"/>
                                <path d="M5 4V2h6v2"/>
                                <rect x="4" y="4" width="8" height="9" rx="1"/>
                            </svg>
                            <span class="badge badge-${colaborador.estado}">${colaborador.estado}</span>
                        </div>
                    </div>
                    <div class="cita-detail">Teléfono : ${colaborador.telefono}</div>
                    <div class="cita-detail">Correo : ${colaborador.correo}</div>
                    <div class="cita-detail">Especialidad : ${colaborador.especialidad}</div>
                </div>
            `;
        });

        main.appendChild(grid);

        document.querySelectorAll('.btn-editar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i           = this.dataset.index;
                const colaborador = colaboradores[i];

                document.getElementById('edit-nombre').value       = colaborador.nombre;
                document.getElementById('edit-telefono').value     = colaborador.telefono;
                document.getElementById('edit-correo').value       = colaborador.correo;
                document.getElementById('edit-especialidad').value = colaborador.especialidad;
                document.getElementById('edit-estado').value       = colaborador.estado;

                document.getElementById('modal-editar').dataset.index = i;
                document.getElementById('modal-editar').classList.add('activo');
            });
        });

        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i = parseInt(this.dataset.index);
                colaboradores.splice(i, 1);
                renderColaboradores();
            });
        });
    }

    document.getElementById('btn-guardar').addEventListener('click', function () {
        const i = parseInt(document.getElementById('modal-editar').dataset.index);

        colaboradores[i].nombre       = document.getElementById('edit-nombre').value;
        colaboradores[i].telefono     = document.getElementById('edit-telefono').value;
        colaboradores[i].correo       = document.getElementById('edit-correo').value;
        colaboradores[i].especialidad = document.getElementById('edit-especialidad').value;
        colaboradores[i].estado       = document.getElementById('edit-estado').value;

        document.getElementById('modal-editar').classList.remove('activo');
        renderColaboradores();
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

    renderColaboradores();

});