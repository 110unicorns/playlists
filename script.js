// Función asíncrona para cargar los datos del JSON e inyectarlos en el chasis
async function cargarPlaylists() {
    const grid = document.getElementById('playlist-grid');
    if (!grid) return;

    try {
        // Hacemos la petición al archivo JSON que tienes en la raíz de tu repositorio
        const response = await fetch('./playlist_latin_dj.json');
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        
        const data = await response.json();
        
        // Limpiamos el contenedor
        grid.innerHTML = '';

        // Renderizado orgánico de las tarjetas
        data.playlists.forEach(playlist => {
            const card = document.createElement('div');
            card.className = 'playlist-card';
            
            // Control de iluminación interactiva por color de cuadrante
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = playlist.accent_color;
                card.style.boxShadow = `0 10px 20px ${playlist.accent_color}1e`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'transparent';
                card.style.boxShadow = 'none';
            });

            card.innerHTML = `
                <div class="cover-art">
                    <span class="quadrant-tag" style="color: ${playlist.accent_color}; border-color: ${playlist.accent_color}44;">
                        ${playlist.quadrant}
                    </span>
                    ${playlist.icon || '🎵'}
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
            grid.appendChild(card);
        });

    } catch (error) {
        console.error("Error cargando el ecosistema de playlists:", error);
        grid.innerHTML = `<p style="color: #ff3333; padding: 20px;">Error en el enlace de datos: ${error.message}</p>`;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarPlaylists);
