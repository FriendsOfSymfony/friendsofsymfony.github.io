function currentSlideNumber(event) {
    var formattedStr;

    if (event.indexh === 0) {
        return '';
    }

    formattedStr = event.indexh;

    if (event.indexv) {
        formattedStr += '/' + event.indexv;
    }

    return formattedStr;
}

// fires on slide change
Reveal.addEventListener('slidechanged', function(event) {
    document.querySelector('.slide-number').innerText = currentSlideNumber(event);
});

Reveal.addEventListener('ready', function() {
    var slideNumberDiv = document.createElement('div');

    slideNumberDiv.classList.add('slide-number');
    document.querySelector('.controls').appendChild(slideNumberDiv);
});
