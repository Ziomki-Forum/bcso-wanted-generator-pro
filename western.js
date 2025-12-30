// western.js - Specyficzny skrypt dla stylu western
document.addEventListener('DOMContentLoaded', function() {
    // Podstawowa funkcjonalność taka sama jak poprzednio
    // ale z dodatkami dla stylu western
    
    // Generuj dziury po kulach
    function generateBulletHoles() {
        const container = document.getElementById('bulletHoles');
        if (!container) return;
        
        container.innerHTML = '';
        const holeCount = Math.floor(Math.random() * 3) + 3;
        
        for (let i = 0; i < holeCount; i++) {
            const hole = document.createElement('div');
            hole.className = 'bullet-hole';
            hole.style.top = `${10 + Math.random() * 80}%`;
            hole.style.left = `${10 + Math.random() * 80}%`;
            hole.style.width = `${10 + Math.random() * 10}px`;
            hole.style.height = hole.style.width;
            container.appendChild(hole);
        }
    }
    
    // Inicjalizacja
    generateBulletHoles();
    
    // Pozostała logika aplikacji (podobna do poprzedniej)
    // ... (wklej tu odpowiednio zmodyfikowany kod z poprzedniej wersji)
});
