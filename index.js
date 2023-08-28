ScrollReveal({
    reset: true,
    distance: '90px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.wrapper',{interval:100,origin:'left'});
ScrollReveal().reveal('.home-image',{scale:0.1});
ScrollReveal().reveal('.name',{origin:'top'});
ScrollReveal().reveal('.intro',{origin:'right'});
ScrollReveal().reveal('.icon',{interval:150,origin:'bottom'});
ScrollReveal().reveal('.contact',{interval:100,origin:'left'});
ScrollReveal().reveal('form',{interval:100,origin:'right'});
ScrollReveal().reveal('.sub-tittle',{interval:80,origin:'top'});
ScrollReveal().reveal('.project1',{scrollbars});
ScrollReveal().reveal('.me-image',{origin:'right',interval:100});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.remove('hp')

        } else {
            entry.target.classList.add('hp')
        }
    });
});

const progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(el => observer.observe(el));