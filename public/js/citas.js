document.addEventListener('DOMContentLoaded', function () {

    const citas = [
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Jessy Castillo", estado: "completada", servicio: "Uñas express", colaborador: "Matus", nota: "Uñas rositas", hora: "6:30" },
        { nombre: "Ana López",      estado: "pendiente",  servicio: "Gelish",       colaborador: "Karen", nota: "Con brillitos", hora: "14:00" },
        { nombre: "María Torres",   estado: "cancelada",  servicio: "Spa",          colaborador: "Matus", nota: "Sin nota",      hora: "20:30" },
    ];

    const main = document.querySelector('.main');

    function renderCitas() {
        main.innerHTML = '<p class="topbar">homeAdmin</p><h1>Citas</h1>';
        let horaActual = null;

        citas.forEach((cita, index) => {
            const hora24      = parseInt(cita.hora.split(':')[0]);
            const minutos     = cita.hora.split(':')[1];
            const horario     = hora24 >= 12 ? 'PM' : 'AM';
            const hora12      = hora24 % 12 === 0 ? 12 : hora24 % 12;
            const horaLabel   = `${hora12} ${horario}`;
            const horaFormato = `${hora12}:${minutos} ${horario}`;

            if (horaLabel !== horaActual) {
                horaActual = horaLabel;
                main.innerHTML += `
                    <div class="time-label">${horaLabel}</div>
                    <div class="citas-grid" id="grid-${horaLabel.replace(' ', '-')}"></div>
                `;
            }

            document.getElementById(`grid-${horaLabel.replace(' ', '-')}`).innerHTML += `
                <div class="cita-card">
                    <div class="cita-header">
                        <span class="cita-name">${cita.nombre}</span>
                        <div class="cita-actions">
                            <svg class="btn-editar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#4a90e2" stroke-width="1.5" style="cursor:pointer">
                                <path d="M11 2l3 3-8 8H3v-3L11 2z"/>
                            </svg>
                            <svg class="btn-eliminar" data-index="${index}" viewBox="0 0 16 16" fill="none" stroke="#e24b4a" stroke-width="1.5" style="cursor:pointer">
                                <polyline points="3,4 13,4"/>
                                <path d="M5 4V2h6v2"/>
                                <rect x="4" y="4" width="8" height="9" rx="1"/>
                            </svg>
                            <span class="badge badge-${cita.estado}">${cita.estado}</span>
                        </div>
                    </div>
                    <div class="cita-detail">Servicio : ${cita.servicio}</div>
                    <div class="cita-detail">Colaborador : ${cita.colaborador}</div>
                    <div class="cita-detail">Nota : ${cita.nota}</div>
                    <div class="cita-footer">${horaFormato}</div>
                </div>
            `;
        });

        // Evento editar
        document.querySelectorAll('.btn-editar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i    = this.dataset.index;
                const cita = citas[i];

                document.getElementById('edit-colaborador').value = cita.colaborador;
                document.getElementById('edit-servicio').value    = cita.servicio;
                document.getElementById('edit-estado').value      = cita.estado;
                document.getElementById('edit-nota').value        = cita.nota;

                document.getElementById('modal-editar').dataset.index = i;
                document.getElementById('modal-editar').classList.add('activo');
            });
        });

        // Evento eliminar
        document.querySelectorAll('.btn-eliminar').forEach(btn => {
            btn.addEventListener('click', function () {
                const i = parseInt(this.dataset.index);
                citas.splice(i, 1);
                renderCitas();
            });
        });
    }

    // Guardar cambios del modal
    document.getElementById('btn-guardar').addEventListener('click', function () {
        const i = parseInt(document.getElementById('modal-editar').dataset.index);

        citas[i].colaborador = document.getElementById('edit-colaborador').value;
        citas[i].servicio    = document.getElementById('edit-servicio').value;
        citas[i].estado      = document.getElementById('edit-estado').value;
        citas[i].nota        = document.getElementById('edit-nota').value;

        document.getElementById('modal-editar').classList.remove('activo');
        renderCitas();
    });

    // Cerrar modal con botón cancelar
    document.getElementById('btn-cancelar').addEventListener('click', function () {
        document.getElementById('modal-editar').classList.remove('activo');
    });

    // Cerrar modal al dar click fuera
    document.getElementById('modal-editar').addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('activo');
    });

    // Render inicial
    renderCitas();

});