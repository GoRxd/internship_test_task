const imageSets = {
    all: [
        { src: 'img/03.jpg', alt: 'all' },
        { src: 'img/03.jpg', alt: 'all' },
        { src: 'img/03.jpg', alt: 'all' },
        { src: 'img/03.jpg', alt: 'all' },
        { src: 'img/03.jpg', alt: 'all' },
        { src: 'img/03.jpg', alt: 'all' }
    ],
    uiux: [
        { src: 'img/02.jpg', alt: 'uiux design' },
        { src: 'img/02.jpg', alt: 'uiux design' },
        { src: 'img/02.jpg', alt: 'uiux design' },
        { src: 'img/02.jpg', alt: 'uiux design' },
        { src: 'img/02.jpg', alt: 'uiux design' },
        { src: 'img/02.jpg', alt: 'uiux design' }
    ],
    programming: [
        { src: 'img/04.jpg', alt: 'programming' },
        { src: 'img/04.jpg', alt: 'programming' },
        { src: 'img/04.jpg', alt: 'programming' },
        { src: 'img/04.jpg', alt: 'programming' },
        { src: 'img/04.jpg', alt: 'programming' },
        { src: 'img/04.jpg', alt: 'programming' }
    ],
    photography: [
        { src: 'img/02.jpg', alt: 'photography' },
        { src: 'img/02.jpg', alt: 'photography' },
        { src: 'img/02.jpg', alt: 'photography' },
        { src: 'img/02.jpg', alt: 'photography' },
        { src: 'img/02.jpg', alt: 'photography' },
        { src: 'img/02.jpg', alt: 'photography' }
    ],
    ecommerce: [
        { src: 'img/06.jpg', alt: 'ecommerce' },
        { src: 'img/06.jpg', alt: 'ecommerce' },
        { src: 'img/06.jpg', alt: 'ecommerce' },
        { src: 'img/06.jpg', alt: 'ecommerce' },
        { src: 'img/06.jpg', alt: 'ecommerce' },
        { src: 'img/06.jpg', alt: 'ecommerce' }
    ]
};

document.querySelectorAll('.filter-menu li').forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const images = document.querySelectorAll('.grid-element');

        imageSets[category].forEach((imageData, index) => {
            images[index].src = imageData.src;
            images[index].alt = imageData.alt;
        });
    });
});
