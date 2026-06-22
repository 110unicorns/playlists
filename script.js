// Estructura de datos unificada: Playlists del Distrito 110
const playlistData = {
  "project_metadata": {
    "project_name": "Distrito_110_Playlists",
    "version": "1.1.0",
    "last_updated": "2026-06-22"
  },
  "playlists": [
    {
      "id": "playlist_001",
      "title": "Cyberpunk Beats",
      "quadrant": "Agua-Azul",
      "description": "Darksynth, Neon y Retrowave para codear a 60 FPS en el chasis.",
      "icon": "🎵",
      "accent_color": "#66fcf1",
      "url": "#"
    },
    {
      "id": "playlist_002",
      "title": "Frecuencias Mito",
      "quadrant": "Mito-Blanco",
      "description": "Ambientes relajantes, música orgánica, fractales y pasajes acústicos.",
      "icon": "🌲",
      "accent_color": "#ffffff",
      "url": "#"
    },
    {
      "id": "playlist_003",
      "title": "Fuego Puro",
      "quadrant": "Fuego-Rojo",
      "description": "Ritmos intensos, guitarras pesadas, impulsos Tesla y pura energía.",
      "icon": "🔥",
      "accent_color": "#ff3333",
      "url": "#"
    },
    {
      "id": "playlist_004",
      "title": "Latin DJ Personal Set",
      "quadrant": "Fuego-Rojo",
      "description": "Set personal de mezcla (110-130 BPM). Incluye tracks de Farruko, Tiësto y Daddy Yankee.",
      "icon": "🎛️",
      "accent_color": "#ff5722",
      "url": "https://music.youtube.com/playlist?list=PLfH6E8CyLWtyZtkoOu73T2RNcVSTmFRGx"
    }
  ]
};

// Función principal para renderizar las tarjetas en la interfaz
function renderPlaylists() {
    const grid = document.getElementById('playlist-grid');
    
    // Validar si el contenedor existe en el DOM antes de operar
    if (!grid) return;

    // Limpiar contenedor por si hay elementos antiguos
    grid.innerHTML = '';

    playlistData.playlists.forEach(playlist => {
        // 1. Crear el contenedor de la tarjeta
        const card = document.createElement('div');
        card.className = 'playlist-card';
        
        // 2. Control dinámico de los estilos interactivos por cuadrante
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = playlist.accent_color;
            card.style.boxShadow = `0 10px 20px ${playlist.accent_color}1e`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
            card.style.boxShadow = 'none';
        });

        // 3. Inyección del template HTML orgánico
        card.innerHTML = `
            <div class="cover-art">
                <span class="quadrant-tag" style="color: ${playlist.accent_color}; border-color: ${playlist.accent_color}44;">
                    ${playlist.quadrant}
                </span>
                ${playlist.icon}
            </div>
            <div class="playlist-info">
                <div>
                    <h3 class="playlist-title">${playlist.title}</h3>
                    <p class="playlist-desc">${playlist.description}</p>
                </div>
                <a href="${playlist.url}" target="_blank" class="btn-open" style="color: ${playlist.accent_color}; border: 2px solid ${playlist.accent_color};">
                    Abrir Canal
                </a>
            </div>
        `;
        
        // 4. Acoplar la tarjeta al grid principal
        grid.appendChild(card);
    });
}

// Ejecutar el renderizado una vez que el DOM esté completamente cargado y estable
document.addEventListener('DOMContentLoaded', renderPlaylists);
