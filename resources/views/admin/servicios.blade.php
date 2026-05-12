<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Servicios | NailsLink</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>
<body>

<div class="layout">
    <x-sidebar-admin/>
    <main class="main">
        <p class="topbar">homeAdmin</p>
        <h1>Servicios</h1>
    </main>
</div>

<div class="modal-overlay" id="modal-editar">
    <div class="modal">
        <div class="modal-header">
            <div>
                <p class="modal-subtitulo" id="modal-subtitulo"></p>
                <h2>Editar servicio</h2>
            </div>
            <span class="badge" id="modal-badge"></span>
        </div>
        <div class="form-group">
            <label>Nombre</label>
            <input type="text" id="edit-nombre">
        </div>
        <div class="form-group">
            <label>Descripción</label>
            <input type="text" id="edit-descripcion">
        </div>
        <div class="modal-grid-2">
            <div class="form-group">
                <label>Precio</label>
                <input type="number" id="edit-precio" min="0" step="0.01">
            </div>
            <div class="form-group">
                <label>Estado</label>
                <select id="edit-estado">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
        </div>
        <div class="modal-acciones">
            <button class="btn-cancelar" id="btn-cancelar">Cancelar</button>
            <button class="btn-guardar" id="btn-guardar">Guardar</button>
        </div>
    </div>
</div>

<script src="{{ asset('js/servicios.js') }}"></script>
</body>
</html>