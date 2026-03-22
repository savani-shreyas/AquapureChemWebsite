const navliksMain = document.getElementById('navliksMain');
const MobileavigationOpen = document.getElementById('MobileavigationOpen');
const MobileavigationClose = document.getElementById('MobileavigationClose');
MobileavigationOpen.addEventListener('click', () => {
    navliksMain.classList.add('active');
});

MobileavigationClose.addEventListener('click', () => {
    navliksMain.classList.remove('active');
});