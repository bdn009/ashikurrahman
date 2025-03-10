const learnMore=document.querySelectorAll('.learnMore');
const projectDecMore=document.querySelectorAll('.projectDecMore');
const showLess=document.querySelectorAll('.showLess');
learnMore.forEach((element, index) => {
    element.addEventListener('click', () => {
        projectDecMore[index].classList.remove('hidden');
        element.classList.add('hidden');
    });
});
showLess.forEach((element, index) => {
    element.addEventListener('click', () => {
        projectDecMore[index].classList.add('hidden');
        learnMore[index].classList.remove('hidden');
    });
});
// scroll reveal
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:200,
    // reset: true
})
sr.reveal(`.homeImage, .footerData`,{origin:'left'});
sr.reveal(`.homeContent, .footerContact`,{origin:'right'});
sr.reveal(`.about`);
sr.reveal(`.skills`);
sr.reveal(`.projectCard`);