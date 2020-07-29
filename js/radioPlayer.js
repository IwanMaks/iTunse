export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radiStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radiStop.disabled = true;

    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radiStop.classList.add('fa-play');
            radiStop.classList.remove('fa-stop');
        } else {
            radio.classList.add('play');
            radiStop.classList.remove('fa-play');
            radiStop.classList.add('fa-stop');
        }
    };

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    };

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        const title = parent.querySelector('.radio-name').textContent;
        const img = parent.querySelector('.radio-img').src;

        radioHeaderBig.textContent = title;
        radioCoverImg.src = img;

        selectItem(parent);

        radiStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radiStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;
    });
}