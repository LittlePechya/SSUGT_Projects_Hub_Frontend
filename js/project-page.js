const directorInfo = document.querySelector('.creators-card__director-info');
const directorPopup = document.querySelector('.creators-card__director-popup');
let timeoutId;

function showDirectorPopup() {
    directorPopup.style.opacity = '1';
}

function hideDirectorPopup() {
    directorPopup.style.opacity = '0';
}

directorInfo.addEventListener('focus', () => {
    clearTimeout(timeoutId);
    showDirectorPopup();
});

directorInfo.addEventListener('blur', () => {
    timeoutId = setTimeout(() => {
        hideDirectorPopup();
    }, 5000);
});

directorInfo.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    showDirectorPopup();
});

directorInfo.addEventListener('mouseout', () => {
    timeoutId = setTimeout(() => {
        hideDirectorPopup();
    }, 5000);
});