// ─── DANE PROJEKTÓW (wiele zdjęć na projekt) ────
const galleryItems = [
    {
        id: 1,
        title: 'Chronossos',
        category: 'aplikacja-mobilna',
        images: [
            'https://placehold.co/800x600/1a1a25/6c5ce7?text=Chronossos+1',
            'https://placehold.co/800x600/1a1a25/6c5ce7?text=Chronossos+2',
            'https://placehold.co/800x600/1a1a25/6c5ce7?text=Chronossos+3'
        ],
        alt: 'Aplikacja habit tracker',
        description: 'Aplikacja mobilna typu habit tracker z zaawansowanym task managementem, kalendarzem, clipboardem i wieloma opcjami planowania. Projekt personalny.'
    },
    {
        id: 2,
        title: 'All About Safety',
        category: 'game-dev',
        images: [
            'https://placehold.co/800x600/1a1a25/00cec9?text=All+About+Safety+1',
            'https://placehold.co/800x600/1a1a25/00cec9?text=All+About+Safety+2'
        ],
        alt: 'Gra dyspozytora',
        description: 'Gra, w której gracz wciela się w dyspozytora. Podejmujesz decyzje, zarządzasz kryzysami i dbasz o bezpieczeństwo. Stworzona w Unity.'
    },
    {
        id: 3,
        title: 'WLC Włocławek',
        category: 'strona-internetowa',
        images: [
            'https://placehold.co/800x600/1a1a25/fdcb6e?text=WLC+strona+1',
            'https://placehold.co/800x600/1a1a25/fdcb6e?text=WLC+strona+2',
            'https://placehold.co/800x600/1a1a25/fdcb6e?text=WLC+strona+3'
        ],
        alt: 'Strona klubu',
        description: 'Przez 2 miesiące utrzymywałem i rozwijałem stronę internetową Włocławskiego Klubu (barter). Aktualizacje treści, poprawki techniczne.'
    },
    {
        id: 4,
        title: 'Strona dla mechanika',
        category: 'strona-internetowa',
        images: [
            'https://placehold.co/800x600/1a1a25/e17055?text=Mechanik+1',
            'https://placehold.co/800x600/1a1a25/e17055?text=Mechanik+2'
        ],
        alt: 'Wizytówka warsztatu',
        description: 'Prosta, nowoczesna strona-wizytówka dla warsztatu samochodowego. Zawiera galerię, cennik i formularz kontaktowy.'
    },
    {
        id: 5,
        title: 'Praktyki e-commerce',
        category: 'aplikacja-internetowa',
        images: [
            'https://placehold.co/800x600/1a1a25/74b9ff?text=E-commerce+1',
            'https://placehold.co/800x600/1a1a25/74b9ff?text=E-commerce+2'
        ],
        alt: 'Inkubator finansowy',
        description: '2‑miesięczne praktyki w inkubatorze finansowym we Włocławku. Tworzyłem nowe rozwiązania i automatyzacje (skrypty Python) dla e‑commerce.'
    },
    {
        id: 6,
        title: 'Unity – własna fizyka',
        category: 'game-dev',
        images: [
            'https://placehold.co/800x600/1a1a25/a29bfe?text=Unity+Fizyka+1',
            'https://placehold.co/800x600/1a1a25/a29bfe?text=Unity+Fizyka+2',
            'https://placehold.co/800x600/1a1a25/a29bfe?text=Unity+Fizyka+3'
        ],
        alt: 'System poruszania',
        description: 'Przez 6 lat tworzyłem gry w Unity. Opracowałem własny system fizyki i assetów do poruszania się postaci – wykorzystywany w kilku prototypach.'
    },
    {
        id: 7,
        title: 'Finn & Bones (przeglądarkowa)',
        category: 'game-dev',
        images: [
            'https://placehold.co/800x600/1a1a25/ff7675?text=Finn%26Bones+1',
            'https://placehold.co/800x600/1a1a25/ff7675?text=Finn%26Bones+2'
        ],
        alt: 'Gra przeglądarkowa',
        description: 'Gra przeglądarkowa inspirowana starą produkcją Finn & Bones. Zręcznościowa, z elementami logicznymi, napisana w JavaScript.'
    },
    {
        id: 8,
        title: 'Strona z jedzeniem',
        category: 'strona-internetowa',
        images: [
            'https://placehold.co/800x600/1a1a25/55efc4?text=Food+1',
            'https://placehold.co/800x600/1a1a25/55efc4?text=Food+2'
        ],
        alt: 'Projekt kulinarny',
        description: 'Personalny projekt strony do zamawiania jedzenia. Responsywny design, interaktywne menu i integracja z systemem zamówień.'
    },
    {
        id: 9,
        title: 'Aplikacja TikTok+YT',
        category: 'aplikacja-mobilna',
        images: [
            'https://placehold.co/800x600/1a1a25/fab1a0?text=TikTok%2BYT+1',
            'https://placehold.co/800x600/1a1a25/fab1a0?text=TikTok%2BYT+2',
            'https://placehold.co/800x600/1a1a25/fab1a0?text=TikTok%2BYT+3'
        ],
        alt: 'Aplikacja społecznościowa',
        description: 'Aplikacja mobilna łącząca funkcje TikToka i YouTube. Wkrótce kontraktowanie z gazetami. Projekt w trakcie rozwoju.'
    },
    {
        id: 10,
        title: 'System głosowań Euro Orbita',
        category: 'aplikacja-internetowa',
        images: [
            'https://placehold.co/800x600/1a1a25/81ecec?text=Euro+Orbita+1',
            'https://placehold.co/800x600/1a1a25/81ecec?text=Euro+Orbita+2'
        ],
        alt: 'Symulacja parlamentu',
        description: 'System do głosowania na symulacje Sejmu i Senatu (Euro Orbita). Obsługuje ~300 uczestników, bezpieczny i wydajny backend (web app).'
    },
    {
        id: 11,
        title: 'Śledzenie wydarzeń – Siła Młodych',
        category: 'aplikacja-mobilna',
        images: [
            'https://placehold.co/800x600/1a1a25/dfe6e9?text=Si%C5%82a+M%C5%82odych+1',
            'https://placehold.co/800x600/1a1a25/dfe6e9?text=Si%C5%82a+M%C5%82odych+2'
        ],
        alt: 'Event tracker',
        description: 'Aplikacja do śledzenia wydarzeń dla Stowarzyszenia „Siła Młodych”. Powiadomienia, kalendarz i lista uczestników.'
    }
];

// ─── DANE DO SEKCJI TWÓRCZOŚCI ──────────────
const pixelArtImages = [
    { src: 'https://placehold.co/300x300/2d3436/fff?text=Pixel+1', alt: 'Pixel art 1' },
    { src: 'https://placehold.co/300x300/2d3436/fff?text=Pixel+2', alt: 'Pixel art 2' },
    { src: 'https://placehold.co/300x300/2d3436/fff?text=Pixel+3', alt: 'Pixel art 3' },
    { src: 'https://placehold.co/300x300/2d3436/fff?text=Pixel+4', alt: 'Pixel art 4' }
];
const blenderImages = [
    { src: 'https://placehold.co/300x300/636e72/fff?text=Blender+1', alt: 'Model 3D 1' },
    { src: 'https://placehold.co/300x300/636e72/fff?text=Blender+2', alt: 'Model 3D 2' }
];
const drawingImages = [
    { src: 'https://placehold.co/300x300/b2bec3/000?text=Rysunek+1', alt: 'Rysunek ołówkiem 1' },
    { src: 'https://placehold.co/300x300/b2bec3/000?text=Rysunek+2', alt: 'Rysunek ołówkiem 2' }
];

function fillMiniGallery(containerId, images) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = images.map(img =>
        `<img src="${img.src}" alt="${img.alt}" loading="lazy" onclick="window.open('${img.src}', '_blank')">`
    ).join('');
}
fillMiniGallery('pixelGallery', pixelArtImages);
fillMiniGallery('blenderGallery', blenderImages);
fillMiniGallery('drawingGallery', drawingImages);

// ─── GŁÓWNA GALERIA ─────────────────────────
const galleryGrid = document.getElementById('galleryGrid');
const filterBar = document.getElementById('filterBar');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxCounter = document.getElementById('lightboxCounter');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxContent = document.getElementById('lightboxContent');

let currentFilter = 'all';
let filteredItems = [];
let currentProjectIndex = -1;
let currentImageIndex = 0;

function renderGallery(filter = 'all') {
    currentFilter = filter;
    filteredItems = filter === 'all'
        ? [...galleryItems]
        : galleryItems.filter(item => item.category === filter);

    galleryGrid.innerHTML = filteredItems.map((item, index) => {
        const thumbSrc = item.images[0];
        return `
        <div class="gallery-item" data-index="${index}">
            <img src="${thumbSrc}" alt="${item.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3>${item.title}</h3>
                <span class="cat-tag">${item.category.replace('-', ' ')}</span>
            </div>
        </div>`;
    }).join('');

    document.querySelectorAll('.gallery-item').forEach(el => {
        el.addEventListener('click', () => {
            const idx = parseInt(el.dataset.index);
            openLightbox(idx);
        });
    });
}

filterBar.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderGallery(e.target.dataset.filter);
    }
});

// ─── LIGHTBOX ───────────────────────────────
function openLightbox(projectIdx) {
    currentProjectIndex = projectIdx;
    currentImageIndex = 0;
    updateLightboxContent();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    currentProjectIndex = -1;
}

function updateLightboxContent() {
    if (currentProjectIndex === -1 || filteredItems.length === 0) return;
    const project = filteredItems[currentProjectIndex];
    const imageCount = project.images.length;

    lightboxImg.src = project.images[currentImageIndex];
    lightboxImg.alt = project.alt;
    lightboxTitle.textContent = project.title;
    lightboxDescription.textContent = project.description;
    lightboxCounter.textContent = `${currentImageIndex + 1} / ${imageCount}`;
}

function navigateLightbox(direction) {
    if (currentProjectIndex === -1) return;
    const project = filteredItems[currentProjectIndex];
    const imageCount = project.images.length;
    currentImageIndex = (currentImageIndex + direction + imageCount) % imageCount;

    lightboxContent.style.animation = 'none';
    lightboxContent.offsetHeight;
    lightboxContent.style.animation = 'zoomIn 0.35s cubic-bezier(0.4, 0, 0.2, 1)';

    updateLightboxContent();
}

lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ─── NAVBAR I MOBILE MENU ────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const sections = document.querySelectorAll('section[id]');
    let current = 'hero';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileBtn.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ─── START ──────────────────────────────────
renderGallery('all');