// ─── DANE PROJEKTÓW ──────────────────────────
const galleryItems = [
    {
        id: 1,
        title: 'Chronossos',
        category: 'aplikacja-mobilna',
        src: 'https://placehold.co/800x600/1a1a25/6c5ce7?text=Chronossos',
        alt: 'Aplikacja habit tracker',
        description: 'Aplikacja mobilna typu habit tracker z zaawansowanym task managementem, kalendarzem, clipboardem i wieloma opcjami planowania. Projekt personalny.'
    },
    {
        id: 2,
        title: 'All About Safety',
        category: 'game-dev',
        src: 'https://placehold.co/800x600/1a1a25/00cec9?text=All+About+Safety',
        alt: 'Gra dyspozytora',
        description: 'Gra, w której gracz wciela się w dyspozytora. Podejmujesz decyzje, zarządzasz kryzysami i dbasz o bezpieczeństwo. Stworzona w Unity.'
    },
    {
        id: 3,
        title: 'WLC Włocławek',
        category: 'strona-internetowa',
        src: 'https://placehold.co/800x600/1a1a25/fdcb6e?text=WLC+W%C5%82oc%C5%82awek',
        alt: 'Strona klubu',
        description: 'Przez 2 miesiące utrzymywałem i rozwijałem stronę internetową Włocławskiego Klubu (barter). Aktualizacje treści, poprawki techniczne.'
    },
    {
        id: 4,
        title: 'Strona dla mechanika',
        category: 'strona-internetowa',
        src: 'https://placehold.co/800x600/1a1a25/e17055?text=Mechanik',
        alt: 'Wizytówka warsztatu',
        description: 'Prosta, nowoczesna strona-wizytówka dla warsztatu samochodowego. Zawiera galerię, cennik i formularz kontaktowy.'
    },
    {
        id: 5,
        title: 'Praktyki e-commerce',
        category: 'aplikacja-internetowa',
        src: 'https://placehold.co/800x600/1a1a25/74b9ff?text=E-commerce',
        alt: 'Inkubator finansowy',
        description: '2‑miesięczne praktyki w inkubatorze finansowym we Włocławku. Tworzyłem nowe rozwiązania i automatyzacje (skrypty Python) dla e‑commerce.'
    },
    {
        id: 6,
        title: 'Unity – własna fizyka',
        category: 'game-dev',
        src: 'https://placehold.co/800x600/1a1a25/a29bfe?text=Unity+Fizyka',
        alt: 'System poruszania',
        description: 'Przez 6 lat tworzyłem gry w Unity. Opracowałem własny system fizyki i assetów do poruszania się postaci – wykorzystywany w kilku prototypach.'
    },
    {
        id: 7,
        title: 'Finn & Bones (przeglądarkowa)',
        category: 'game-dev',
        src: 'https://placehold.co/800x600/1a1a25/ff7675?text=Finn+%26+Bones',
        alt: 'Gra przeglądarkowa',
        description: 'Gra przeglądarkowa inspirowana starą produkcją Finn & Bones. Zręcznościowa, z elementami logicznymi, napisana w JavaScript.'
    },
    {
        id: 8,
        title: 'Strona z jedzeniem',
        category: 'strona-internetowa',
        src: 'https://placehold.co/800x600/1a1a25/55efc4?text=Food+Project',
        alt: 'Projekt kulinarny',
        description: 'Personalny projekt strony do zamawiania jedzenia. Responsywny design, interaktywne menu i integracja z systemem zamówień.'
    },
    {
        id: 9,
        title: 'Aplikacja TikTok+YT',
        category: 'aplikacja-mobilna',
        src: 'https://placehold.co/800x600/1a1a25/fab1a0?text=TikTok%2BYT',
        alt: 'Aplikacja społecznościowa',
        description: 'Aplikacja mobilna łącząca funkcje TikToka i YouTube. Wkrótce kontraktowanie z gazetami. Projekt w trakcie rozwoju.'
    },
    {
        id: 10,
        title: 'System głosowań Euro Orbita',
        category: 'aplikacja-internetowa',
        src: 'https://placehold.co/800x600/1a1a25/81ecec?text=Euro+Orbita',
        alt: 'Symulacja parlamentu',
        description: 'System do głosowania na symulacje Sejmu i Senatu (Euro Orbita). Obsługuje ~300 uczestników, bezpieczny i wydajny backend (web app).'
    },
    {
        id: 11,
        title: 'Śledzenie wydarzeń – Siła Młodych',
        category: 'aplikacja-mobilna',
        src: 'https://placehold.co/800x600/1a1a25/dfe6e9?text=Si%C5%82a+M%C5%82odych',
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
        `<img src="${img.src}" alt="${img.alt}" loading="lazy" onclick="openMiniLightbox('${img.src}')">`
    ).join('');
}

// Prosty lightbox dla mini galerii (otwiera obrazek w nowym oknie)
window.openMiniLightbox = function(src) {
    window.open(src, '_blank');
};

// Wypełnij mini galerie
fillMiniGallery('pixelGallery', pixelArtImages);
fillMiniGallery('blenderGallery', blenderImages);
fillMiniGallery('drawingGallery', drawingImages);

// ─── RESZTA LOGIKI (GALERIA GŁÓWNA, FILTRY, LIGHTBOX) ───
const galleryGrid = document.getElementById('galleryGrid');
const filterBar = document.getElementById('filterBar');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxContent = document.getElementById('lightboxContent');

let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredItems = [];

function renderGallery(filter = 'all') {
    currentFilter = filter;
    filteredItems = filter === 'all'
        ? [...galleryItems]
        : galleryItems.filter(item => item.category === filter);

    galleryGrid.innerHTML = filteredItems.map((item, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <h3>${item.title}</h3>
                <span class="cat-tag">${item.category.replace('-', ' ')}</span>
            </div>
        </div>
    `).join('');

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

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}
function updateLightboxContent() {
    if (filteredItems.length === 0) return;
    const item = filteredItems[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.innerHTML = `<strong>${item.title}</strong><br><span style="font-size:0.85rem; opacity:0.9;">${item.description}</span>`;
}
function navigateLightbox(direction) {
    if (filteredItems.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + direction + filteredItems.length) % filteredItems.length;
    lightboxContent.style.animation = 'none';
    lightboxContent.offsetHeight;
    lightboxContent.style.animation = 'zoomIn 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
    updateLightboxContent();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});

// ─── NAVBAR SCROLL ──────────────────────────
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

// ─── MOBILE MENU ────────────────────────────
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

// ─── CONTACT FORM ───────────────────────────
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn');
    const original = btn.textContent;
    btn.textContent = '✓ Wysłano!';
    btn.style.background = '#00b894';
    btn.style.boxShadow = '0 6px 28px rgba(0,184,148,0.5)';
    contactForm.reset();
    setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.boxShadow = '';
    }, 2500);
});

// ─── START ──────────────────────────────────
renderGallery('all');