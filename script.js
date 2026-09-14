gsap.registerPlugin(ScrollTrigger);

const notes = [
  ['Material', 'Why aluminium?'], ['Process', 'The quiet choreography of a line'], ['People', 'Meet the night shift'], ['Detail', 'The anatomy of a pull tab'], ['Future', 'A lighter footprint'], ['Colour', 'When ink meets metal'], ['Object', 'Can, considered'], ['Process', 'Inside the bodymaker'], ['Material', 'The second life of a can'], ['People', 'A conversation with our founder'], ['Detail', 'The 0.2mm decision'], ['Future', 'Packaging after plastic'], ['Culture', 'The fridge as gallery'], ['Process', 'Three seconds of pressure'], ['Colour', 'A field guide to red'], ['Object', 'The humble cylinder'], ['People', 'The hands behind the finish'], ['Material', 'Aluminium in the wild'], ['Future', 'Designing for return'], ['Detail', 'A good seam'], ['Process', 'From coil to can'], ['Culture', 'What makes a classic?'], ['Object', '330ml, exactly'], ['Colour', 'Notes on shine'], ['People', 'The art of quality control'], ['Future', 'The refillable question'], ['Material', 'Weight is a feeling'], ['Process', 'Printing at speed'], ['Detail', 'The perfect neck'], ['Culture', 'Shelf presence'], ['Object', 'A study in proportion'], ['People', 'In conversation: Sway'], ['Future', 'Small batch, big idea'], ['Material', 'The surface tells all'], ['Process', 'A can is born'], ['Colour', 'Beyond the palette'], ['Detail', 'The language of lids'], ['Culture', 'An object with a job'], ['People', 'The maker’s eye'], ['Future', 'Circular by design'], ['Material', 'The beauty of less'], ['Process', 'Inside our test lab'], ['Detail', 'A line worth following'], ['Object', 'The 500ml question'], ['Culture', 'Good things in small cans'], ['People', 'What craft means now'], ['Future', 'The next refill'], ['Material', 'A brighter metal'], ['Process', 'The final inspection'], ['Colour', 'Colour under cold light'], ['Detail', 'Every edge counts'], ['Object', 'A can for the curious'], ['People', 'The brief behind Northstar'], ['Culture', 'Rituals of refreshment'], ['Future', 'Making room for optimism'], ['Material', 'A material with memory'], ['Process', 'The rhythm of repetition'], ['Detail', 'Open, pour, repeat'], ['Object', 'The shape of a sip'], ['People', 'The ones who notice'], ['Culture', 'A short history of the can'], ['Future', 'Tomorrow, in aluminium'], ['Material', 'The honest surface'], ['Process', 'The line goes on'], ['Detail', 'Small parts, big feeling'], ['Object', 'Form follows flavour'], ['People', 'Notes from the floor'], ['Future', 'A good thing, made well']
];
notes.length = 67;
const grid = document.querySelector('#journal-grid');
notes.forEach((note, index) => {
  const card = document.createElement('article');
  card.className = 'journal-card';
  card.innerHTML = `<span class="journal-id">${String(index + 1).padStart(2, '0')} / ${note[0]}</span><div><h3>${note[1]}</h3><p>Read the note <span>↗</span></p></div>`;
  grid.appendChild(card);
});

gsap.from('.hero-copy > *', {y: 60, opacity: 0, duration: 1.15, stagger: .12, ease: 'power4.out', delay: .2});
gsap.from('.hero-can-front', {y: 120, opacity: 0, rotate: 35, duration: 1.4, ease: 'power3.out', delay: .4});
gsap.from('.hero-can-back', {y: -80, opacity: 0, duration: 1.3, ease: 'power3.out', delay: .65});
gsap.utils.toArray('.hero-can').forEach((can) => {
  gsap.to(can, {yPercent: -22, rotation: '+=8', ease: 'none', scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.4}});
});
gsap.to('.image-band img', {yPercent: -15, ease: 'none', scrollTrigger: {trigger: '.image-band', start: 'top bottom', end: 'bottom top', scrub: true}});
gsap.from('.manifesto h2', {y: 80, opacity: 0, duration: 1, scrollTrigger: {trigger: '.manifesto-grid', start: 'top 75%'}});
gsap.from('.process-item', {y: 35, opacity: 0, duration: .8, stagger: .12, scrollTrigger: {trigger: '.process-list', start: 'top 75%'}});
gsap.from('.work-card', {y: 50, opacity: 0, duration: 1, stagger: .15, scrollTrigger: {trigger: '.work-grid', start: 'top 78%'}});
gsap.from('.journal-card', {y: 25, opacity: 0, duration: .7, stagger: .035, scrollTrigger: {trigger: '.journal-grid', start: 'top 80%'}});
gsap.to('.contact-orbit', {rotation: 80, ease: 'none', scrollTrigger: {trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: 1}});

const cursor = document.querySelector('.cursor-dot');
window.addEventListener('pointermove', (event) => { gsap.to(cursor, {x: event.clientX, y: event.clientY, duration: .35, ease: 'power2.out'}); });
document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('pointermove', (event) => { const rect = button.getBoundingClientRect(); gsap.to(button, {x: (event.clientX - rect.left - rect.width / 2) * .18, y: (event.clientY - rect.top - rect.height / 2) * .18, duration: .4}); });
  button.addEventListener('pointerleave', () => gsap.to(button, {x: 0, y: 0, duration: .5, ease: 'elastic.out(1, .4)'}));
});
document.querySelector('#load-more').addEventListener('click', (event) => { event.currentTarget.textContent = '67 notes, open'; gsap.to(event.currentTarget, {backgroundColor: '#f26b3a', color: '#172522', duration: .25}); });
