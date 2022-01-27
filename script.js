// Сюда передать название класса контейнера, с которым необходимо взаимодействовать
let eventState;
if (document.querySelector('.header_event__first-1__desc')) {
    eventState = 1;
} else if (document.querySelector('.header_event__first-2__desc')) {
    eventState = 2;
} else {
    eventState = 3;
}


let elToCheck = document.querySelector(`.header_event__first-${eventState}__desc`);


let elDataHeightNumber = Number(elToCheck.dataset.height);
let elDataHeightString = elDataHeightNumber + 'px';

// Кнопка 'Показать больше'
let expandBtn = document.createElement('i');
    expandBtn.classList.add('expand-desc-btn');
    expandBtn.textContent = 'Показать больше';
    expandBtn.style.position = 'absolute';
    expandBtn.style.zIndex = '100';
    expandBtn.style.bottom = '0';


// Кнопка 'Скрыть описание'
let collapseBtn = document.createElement('i');
    collapseBtn.classList.add('collapse-desc-btn');
    collapseBtn.textContent = 'Скрыть описание';


expandBtn.addEventListener('click', () => {
    if (document.querySelector('.expand-gradient')) {
        document.querySelector('.expand-gradient').classList.remove('expand-gradient');
        removeButton(expandBtn);
        addButton(elToCheck, collapseBtn);
        elToCheck.style.height = "100%";
    }
});

collapseBtn.addEventListener('click', () => {
    if (document.querySelector('.collapse-desc-btn')) {
        elToCheck.classList.add('expand-gradient');
        elToCheck.insertAdjacentElement('beforeend', expandBtn);
        elToCheck.style.height = elDataHeightString;
    }
});

heightChecker(elToCheck);

function heightChecker(element) {
    if (element.offsetHeight > elDataHeightNumber) {
        element.style.height = elDataHeightString;
        element.classList.add('expand-gradient');
        element.insertAdjacentElement('beforeend', expandBtn);
    }
}

function removeButton(button) {
    button.remove();
}

function addButton(div, button) {
    div.insertAdjacentElement('beforeend', button)
}