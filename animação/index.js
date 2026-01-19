window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {const card = document.getElementById('card-principal');
        const skeletons = document.querySelectorAll('.skeleton');
        if (card) card.classList.remove('loading');
        skeletons.forEach(el => {
el.classList.remove('skeleton', 'skeleton-img', 'skeleton-title', 'skeleton-text', 'skeleton-icon', 'skeleton-btn');});}, 1000);
    // 1. Seleção de todos os elementos necessários
        const btnSobre = document.getElementById('btn-sobre');
        const btnVoltar = document.getElementById('btn-voltar');
        const btnProjetos = document.getElementById('btn-projetos');
        const homeContent = document.getElementById('home-content');
        const aboutContent = document.getElementById('about-content');
        const projectsContent = document.getElementById('projects-content');
        const iconesRedes = document.querySelector('.icones-redes');
        const fotoPerfil = document.getElementById('foto-perfil');
        if (btnSobre) {btnSobre.addEventListener('click', (e) => {e.preventDefault();
                // Esconde a Home, Redes e Botões principais
                homeContent.classList.add('escondido');
                iconesRedes.classList.add('escondido');
                btnSobre.classList.add('escondido');
                btnProjetos.classList.add('escondido');
                // Mostra o conteúdo "Sobre" com animação
                aboutContent.classList.remove('escondido');
                aboutContent.classList.add('fade-in');
                btnVoltar.classList.remove('escondido');});}
        // 3. Lógica para o botão "Projetos"
        if (btnProjetos) {btnProjetos.addEventListener('click', (e) => {e.preventDefault();
                // Esconde a Home, Redes e Botões principais
                homeContent.classList.add('escondido');
                iconesRedes.classList.add('escondido');
                btnSobre.classList.add('escondido');
                btnProjetos.classList.add('escondido');
                fotoPerfil.classList.add('escondido');
                // Mostra o conteúdo de "Projetos" com animação
                projectsContent.classList.remove('escondido');
                projectsContent.classList.add('fade-in');
                btnVoltar.classList.remove('escondido');});}
        // 4. Lógica para o botão "Voltar" (Reseta o estado inicial)
        if (btnVoltar) {btnVoltar.addEventListener('click', (e) => {e.preventDefault();
                // Esconde as seções de conteúdo extra
                aboutContent.classList.add('escondido');
                projectsContent.classList.add('escondido');
                btnVoltar.classList.add('escondido');
                // Mostra a Home, Redes e Botões principais novamente
                homeContent.classList.remove('escondido');
                homeContent.classList.add('fade-in');
                iconesRedes.classList.remove('escondido');
                btnSobre.classList.remove('escondido');
                btnProjetos.classList.remove('escondido');
                fotoPerfil.classList.remove('escondido');});}});