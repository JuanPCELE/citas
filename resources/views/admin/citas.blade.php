<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Citas | NailsLink</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">

</head>
<body>

<div class="layout">

    {{-- Sidebar --}}
    <x-sidebar-admin/>
    {{-- Contenido principal --}}
<main class="main">
    <p class="topbar">homeAdmin</p>
    <h1>Citas</h1>

    </main>
</div>
{{-- Modal Editar Cita --}}
<div class="modal-overlay" id="modal-editar">
    <div class="modal">
        <div class="modal-header">
            <div>
                <p class="modal-subtitulo" id="modal-subtitulo"></p>
                <h2>Editar cita</h2>
            </div>
            <span class="badge" id="modal-badge"></span>
        </div>
        <div class="modal-grid-2">
            <div class="form-group">
                <label>Colaborador</label>
                <input type="text" id="edit-colaborador">
            </div>
            <div class="form-group">
                <label>Servicio</label>
                <input type="text" id="edit-servicio">
            </div>
        </div>
        <div class="form-group">
            <label>Estado</label>
            <select id="edit-estado">
                <option value="completada">Completada</option>
                <option value="pendiente">Pendiente</option>
                <option value="cancelada">Cancelada</option>
            </select>
        </div>
        <div class="form-group">
            <label>Nota</label>
            <input type="text" id="edit-nota">
        </div>
        <div class="modal-acciones">
            <button class="btn-cancelar" id="btn-cancelar">Cancelar</button>
            <button class="btn-guardar" id="btn-guardar">Guardar</button>
        </div>
    </div>
</div>
<script src="{{ asset('js/citas.js') }}"></script>

</body>
</html>