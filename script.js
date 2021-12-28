// Сюда передать название класса контейнера, с которым необходимо взаимодействовать
let elToCheck = document.querySelector('.work-container');

// Кнопка 'Показать больше'
let expandBtn = document.createElement('a');
    expandBtn.classList.add('expand-desc-btn');
    expandBtn.textContent = 'Показать больше';


// Кнопка 'Скрыть описание'
let collapseBtn = document.createElement('a');
    collapseBtn.classList.add('collapse-desc-btn');
    collapseBtn.textContent = 'Скрыть описание';


expandBtn.addEventListener('click', () => {
    if (document.querySelector('.expand-gradient')) {
        document.querySelector('.expand-gradient').classList.remove('expand-gradient');
        removeButton(elToCheck, expandBtn);
        addButton(elToCheck, collapseBtn);
    }
});

collapseBtn.addEventListener('click', () => {
    if (document.querySelector('.collapse-desc-btn')) {
        elToCheck.classList.add('expand-gradient');
        elToCheck.insertAdjacentElement('afterEnd', expandBtn);
    }
});


function heightChecker(element) {
    let elDataHeightNumber = Number(element.dataset.height);
    let elDataHeightString = elDataHeightNumber + 'px';
    if (element.offsetHeight > elDataHeightNumber) {
        element.style.height = elDataHeightString;
        element.classList.add('expand-gradient');
        element.insertAdjacentElement('afterEnd', expandBtn);
    }
}

function removeButton(div, button) {
    div.parentNode.removeChild(button);
}

function addButton(div, button) {
    div.insertAdjacentElement('beforeend', button)
}

heightChecker(elToCheck);