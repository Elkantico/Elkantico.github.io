const galleryItems = [
    {
        id: 1,
        title: 'Chronossos',
        category: 'aplikacja-mobilna',
        images: [
            'img/chronossos/chronossos1.png',
            'img/chronossos/chronossos2.png',
            'img/chronossos/chronossos3.png',
            'img/chronossos/chronossos4.png'
        ],
        alt: 'Aplikacja habit tracker',
        description: 'Aplikacja mobilna typu habit tracker z zaawansowanym task managementem, kalendarzem, clipboardem i wieloma opcjami planowania. (Flutter, HiveDB)'
    },
    {
        id: 2,
        title: 'All About Safety',
        category: 'game-dev',
        images: [
            'img/aas/aas1.png',
            'img/aas/ass2.png',
            'img/aas/ass3.png',
            'img/aas/ass4.png',
            'img/aas/ass5.png'
        ],
        alt: 'Gra dyspozytora',
        description: 'Gra, w której gracz wciela się w dyspozytora. Podejmujesz decyzje, zarządzasz kryzysami i dbasz o bezpieczeństwo. Stworzona w Godot. (gdscript, pixel art) – projekt w fazie finalizacji.'
    },
    {
        id: 3,
        title: 'WLC Włocławek',
        category: 'strona-internetowa',
        images: [
            'img/wlc24/wlc1.png',
            'img/wlc24/wlc2.png'
        ],
        alt: 'Strona klubu',
        description: 'Przez 2 miesiące utrzymywałem i rozwijałem stronę internetową WLC24(w formie barteru), poprawki techniczne. (WordPress, PHP, CSS)'
    },
    {
        id: 4,
        title: 'Strona dla mechanika',
        category: 'strona-internetowa',
        images: [
            'img/autoService/auto1.png',
            'img/autoService/auto2.png'
        ],
        alt: 'Wizytówka warsztatu',
        description: 'Prosta, nowoczesna strona-wizytówka dla warsztatu samochodowego. (HTML, CSS, JavaScript)'
    },
    {
        id: 5,
        title: 'Praktyki e-commerce',
        category: 'aplikacja-internetowa',
        images: [
            'img/e-commerce/inkubator.png'
        ],
        alt: 'Inkubator finansowy',
        description: '2‑miesięczne praktyki w inkubatorze finansowym we Włocławku. Tworzyłem nowe rozwiązania i automatyzacje (skrypty Python) dla e‑commerce.'
    },
    {
        id: 6,
        title: 'Unity – własna fizyka',
        category: 'game-dev',
        images: [
            'img/unity/unity1.png',
            'img/unity/unity2.png'
        ],
        alt: 'System poruszania',
        description: 'Przez 6 lat tworzyłem gry w Unity. Opracowałem własny system fizyki i assetów do poruszania się postaci – wykorzystywany w kilku prototypach.'
    },
    {
        id: 7,
        title: 'Finn & Bones (przeglądarkowa)',
        category: 'game-dev',
        images: [
            'img/finn/finn1.png',
            'img/finn/finn2.png'
        ],
        alt: 'Gra przeglądarkowa',
        description: 'Gra przeglądarkowa inspirowana starą produkcją Finn & Bones, gra tórowa. (HTML, CSS, JavaScript) – projekt w fazie finalizacji.'
    },
    {
        id: 8,
        title: 'Aplikacja TikTok+YT (Newspaper)',
        category: 'aplikacja-mobilna',
        images: [
            'img/newspaper/news1.png',
            'img/newspaper/news2.png',
            'img/newspaper/news3.png',
            'img/newspaper/news4.png',
            'img/newspaper/news5.png',
            'img/newspaper/news6.png'
        ],
        alt: 'Aplikacja społecznościowa',
        description: 'Aplikacja mobilna łącząca funkcje TikToka i YouTube. Wkrótce kontraktowanie z gazetami – projekt w fazie finalizacji. (Flutter)'
    },
    {
        id: 9,
        title: 'MobbaFett',
        category: 'aplikacja-mobilna',
        images: [
            'img/mobbafett/mob1.png',
            'img/mobbafett/mob2.png'
        ],
        alt: 'Projekt MobbaFett',
        description: 'Dodatkowy projekt aplikacji mobilnej. (HTML, CSS, JavaScript)'
    },
    {
        id: 10,
        title: 'System głosowań Euro Orbita',
        category: 'aplikacja-internetowa',
        images: [
            'img/sejm/glos1.png',
            'img/sejm/glos2.png',
            'img/sejm/glos3.png'
        ],
        alt: 'Symulacja parlamentu',
        description: 'System do głosowania na symulacje Sejmu i Senatu (Euro Orbita). Obsługuje ~300 uczestników, bezpieczny i wydajny backend (web app). (HTML, CSS, JavaScript, PHP, MySQL)'
    }
];

const pixelArtImages = [
    { src: 'pixelart/pixel1.png', alt: 'Pixel art 1' },
    { src: 'pixelart/pixel2.png', alt: 'Pixel art 2' },
    { src: 'pixelart/pixel3.png', alt: 'Pixel art 3' },
    { src: 'pixelart/menu.gif', alt: 'Pixel art menu' }
];
const drawingImages = [
    { src: 'pen/art1.jpg', alt: 'Rysunek ołówkiem 1' },
    { src: 'pen/art2.jpg', alt: 'Rysunek ołówkiem 2' }
];

function fillMiniGallery(containerId, images) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = images.map(img =>
        `<img src="${img.src}" alt="${img.alt}" loading="lazy" onclick="window.open('${img.src}', '_blank')">`
    ).join('');
}
fillMiniGallery('pixelGallery', pixelArtImages);
fillMiniGallery('drawingGallery', drawingImages);

fetch('wiersz.txt')
    .then(response => {
        if (!response.ok) throw new Error('Brak pliku');
        return response.text();
    })
    .then(text => {
        const placeholder = document.getElementById('writingPlaceholder');
        if (placeholder) {
            placeholder.textContent = text;
            placeholder.style.fontStyle = 'normal';
        }
    })
    .catch(() => {
        const placeholder = document.getElementById('writingPlaceholder');
        if (placeholder) {
            placeholder.textContent = 'Wklej tutaj swój wiersz lub fragment książki…';
        }
    });

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

const track = document.getElementById('carouselTrack');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const dotsContainer = document.getElementById('carouselDots');

let currentSlide = 0;

slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(document.querySelectorAll('.carousel-dot'));

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    currentSlide = index;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let touchStartX = 0;
track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});
track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
    }
});

renderGallery('all');