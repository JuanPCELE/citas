<div class="cita-card">
    <div class="cita-header">
        <span class="cita-name">{{ $nombre }}</span>
        <div class="cita-actions">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 2l3 3-8 8H3v-3L11 2z"/></svg>
            <svg viewBox="0 0 16 16" fill="none" stroke="#e24b4a" stroke-width="1.5"><polyline points="3,4 13,4"/><path d="M5 4V2h6v2"/><rect x="4" y="4" width="8" height="9" rx="1"/></svg>
            <span class="badge badge-{{ $estado }}">{{ ucfirst($estado) }}</span>
        </div>
    </div>
    <div class="cita-detail">Servicio : {{ $servicio }}</div>
    <div class="cita-detail">Colaborador : {{ $colaborador }}</div>
    <div class="cita-detail">Nota : {{ $nota }}</div>
    <div class="cita-footer">{{ $hora }}</div>
</div>