(() => {
// 1) Add your real image file paths here. They can include spaces — we will encode them.
// Example given: "../img/BOBR%20PFPs/Leys%20BOBR.png"
    const IMAGES = [
        "../img/BOBR PFPs/Leys BOBR.png",
        "../img/BOBR PFPs/Koza BOBR.png",
        "../img/BOBR PFPs/Vinni BOBR.png",
        "../img/BOBR PFPs/3D Nad BOBR.png",
        "../img/BOBR PFPs/Sillvuk BOBR.png",
        "../img/BOBR PFPs/Pita BOBR.png",
        "../img/BOBR PFPs/Enny BOBR.png",
        "../img/BOBR PFPs/Torzykk BOBR.png",
        "../img/BOBR PFPs/Demon BOBR.png",
        "../img/BOBR PFPs/Elijapapi BOBR.png",
        "../img/BOBR PFPs/Karma BOBR.png",
        "../img/BOBR PFPs/Billie BOBR.png",
        "../img/BOBR PFPs/BOBR Outfit Trait 1.png",
        "../img/BOBR PFPs/BOBR outfit trait 2.png",
        "../img/BOBR PFPs/BOBR outfit trait 3.png",
        "../img/BOBR PFPs/BOBR outfit trait 4.png",
        "../img/BOBR PFPs/BOBR outfit trait 5.png",
        "../img/BOBR PFPs/BOBR outfit trait 6.png",
        "../img/BOBR PFPs/BOBR outfit trait 7.png",
        "../img/BOBR PFPs/BOBR outfit trait 8.png",
        "../img/BOBR PFPs/Brody BOBR.png",
        "../img/BOBR PFPs/ChocoBear BOBR.png",
        "../img/BOBR PFPs/Grid BOBR.png",
        "../img/BOBR PFPs/Issei BOBR.png",
        "../img/BOBR PFPs/John BOBR.png",
        "../img/BOBR PFPs/JudoChy BOBR.png",
        "../img/BOBR PFPs/Keybi BOBR.png",
        "../img/BOBR PFPs/ManWithoutPlan BOBR.png",
        "../img/BOBR PFPs/Ninja BOBR.png",
        "../img/BOBR PFPs/Pink P4nther BOBR.png",
        "../img/BOBR PFPs/Potatoes BOBR.png",
        "../img/BOBR PFPs/Prince Croco BOBR.png",
        "../img/BOBR PFPs/Sachin BOBR.png",
        "../img/BOBR PFPs/Vietnamese BOBR.png",
        "../img/BOBR PFPs/Wale BOBR.png",
    ];


// 2) Paging config
    const PER_PAGE = 16; // 4x4
    let page = 1;

// DOM
    const grid = document.getElementById('pfpGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicator = document.getElementById('pageIndicator');

// Helpers
    const totalPages = () => Math.max(1, Math.ceil(IMAGES.length / PER_PAGE));
    function sliceForPage(p){
        const start = (p - 1) * PER_PAGE;
        return IMAGES.slice(start, start + PER_PAGE);
    }

    function render(){
        grid.innerHTML = '';
        const frag = document.createDocumentFragment();
        for(const src of sliceForPage(page)){
            const card = document.createElement('article');
            card.className = 'pfp-card';

            const img = document.createElement('img');
// encodeURI keeps slashes intact and safely encodes spaces/special chars
            img.src = encodeURI(src);
            img.alt = 'BOBR PFP';
            img.loading = 'lazy';

            card.appendChild(img);
            frag.appendChild(card);
        }
        grid.appendChild(frag);

        indicator.textContent = `${page}/${totalPages()}`;
        prevBtn.disabled = (page === 1);
        nextBtn.disabled = (page === totalPages());
    }

    prevBtn.addEventListener('click', () => { if(page > 1){ page--; render(); } });
    nextBtn.addEventListener('click', () => { if(page < totalPages()){ page++; render(); } });

// Keyboard support
    document.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowLeft' && page > 1){ page--; render(); }
        if(e.key === 'ArrowRight' && page < totalPages()){ page++; render(); }
    });

// Initial paint
    render();
})();