var currentSlide = 0;

function slideRight() {
    var kontenArea = document.querySelector('.konten-area');
    var shiftAmount = 300; // Sesuaikan dengan lebar slide atau elemen yang ingin digeser

    currentSlide++;
    var newMargin = -shiftAmount * currentSlide;
    
    slideContainer.style.marginLeft = newMargin + 'px';
}
