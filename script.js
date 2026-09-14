gsap.registerPlugin(ScrollTrigger);

const subjects = [
  ['Material', 'Why fibre?'], ['Process', 'The quiet choreography of a line'], ['People', 'Meet the night shift'], ['Detail', 'The anatomy of a pull tab'], ['Future', 'A lighter footprint'], ['Colour', 'When ink meets paper'], ['Object', 'Pack, considered'], ['Process', 'Inside the forming line'], ['Material', 'The second life of a pack'], ['People', 'A conversation with our founder'], ['Detail', 'The 0.2mm decision'], ['Future', 'Packaging after plastic'], ['Culture', 'The fridge as gallery'], ['Process', 'Three seconds of pressure'], ['Colour', 'A field guide to red'], ['Object', 'The humble cylinder'], ['People', 'The hands behind the finish'], ['Material', 'Fibre in the wild'], ['Future', 'Designing for return'], ['Detail', 'A good seam'], ['Process', 'From sheet to shelf'], ['Culture', 'What makes a classic?'], ['Object', '330ml, exactly'], ['Colour', 'Notes on shine'], ['People', 'The art of quality control'], ['Future', 'The refillable question'], ['Material', 'Weight is a feeling'], ['Process', 'Printing at speed'], ['Detail', 'The perfect neck'], ['Culture', 'Shelf presence'], ['Object', 'A study in proportion'], ['People', 'In conversation: Sway'], ['Future', 'Small batch, big idea'], ['Material', 'The surface tells all'], ['Process', 'A pack is born'], ['Colour', 'Beyond the palette'], ['Detail', 'The language of lids'], ['Culture', 'An object with a job'], ['People', 'The maker’s eye'], ['Future', 'Circular by design'], ['Material', 'The beauty of less'], ['Process', 'Inside our test lab'], ['Detail', 'A line worth following'], ['Object', 'The 500ml question'], ['Culture', 'Good things in small packs'], ['People', 'What craft means now'], ['Future', 'The next refill'], ['Material', 'A brighter surface'], ['Process', 'The final inspection'], ['Colour', 'Colour under cold light'], ['Detail', 'Every edge counts'], ['Object', 'A pack for the curious'], ['People', 'The brief behind Northstar'], ['Culture', 'Rituals of refreshment'], ['Future', 'Making room for optimism'], ['Material', 'A material with memory'], ['Process', 'The rhythm of repetition'], ['Detail', 'Open, pour, repeat'], ['Object', 'The shape of a sip'], ['People', 'The ones who notice'], ['Culture', 'A short history of the pack'], ['Future', 'Tomorrow, in fibre'], ['Material', 'The honest surface'], ['Process', 'The line goes on'], ['Detail', 'Small parts, big feeling'], ['Object', 'Form follows flavour'], ['People', 'Notes from the floor'], ['Future', 'A good thing, made well']
];
const notes = subjects.slice(0, 67);
const pageNumber = Number(new URLSearchParams(window.location.search).get('page'));
const detailTitle = document.querySelector('#page-title');

if (detailTitle && notes[pageNumber - 1]) {
  const detailNote = notes[pageNumber - 1];
  document.querySelector('#page-number').textContent = String(pageNumber).padStart(2, '0');
  document.querySelector('#page-type').textContent = detailNote[0];
  detailTitle.textContent = detailNote[1];
  document.title = `${detailNote[1]} | Craft Paperbridges`;
  document.querySelector('#previous-note').href = `page.html?page=${pageNumber === 1 ? 67 : pageNumber - 1}`;
  document.querySelector('#next-note').href = `page.html?page=${pageNumber === 67 ? 1 : pageNumber + 1}`;
  gsap.from('.note-hero > *', {y: 40, opacity: 0, duration: 1, stagger: .12, ease: 'power3.out'});
  gsap.from('.note-image', {y: 60, opacity: 0, duration: 1.2, delay: .25, ease: 'power3.out'});
}

const isHome = Boolean(document.querySelector('.hero'));
const grid = document.querySelector('#journal-grid');
if (grid) {
  notes.forEach((note, index) => {
    const card = document.createElement('article');
    card.className = 'journal-card';
    card.innerHTML = `<span class="journal-id">${String(index + 1).padStart(2, '0')} / ${note[0]}</span><div><h3>${note[1]}</h3><p><a href="page.html?page=${index + 1}">Inspect the note <span>↗</span></a></p></div>`;
    grid.appendChild(card);
  });
}

if (isHome) {
  const heroIntro = gsap.timeline({defaults: {ease: 'power4.out'}});
  heroIntro.from('.hero-kicker', {y: -18, opacity: 0, duration: .7})
    .from('.hero-overline', {y: 18, opacity: 0, duration: .5}, '-=.25')
    .from('.hero h1', {yPercent: 105, opacity: 0, duration: 1.15, clipPath: 'inset(0 0 100% 0)'}, '-=.25')
    .from('.hero-copy>p:last-child', {x: 35, opacity: 0, duration: .65}, '-=.55')
    .from('.hero-stamp', {scale: .7, opacity: 0, duration: .7}, '-=.5');
  gsap.from('.hero-can-front', {y: 120, opacity: 0, rotate: 35, duration: 1.4, ease: 'power3.out', delay: .4});
  gsap.from('.hero-can-back', {y: -80, opacity: 0, duration: 1.3, ease: 'power3.out', delay: .65});
  gsap.utils.toArray('.hero-can').forEach((can) => gsap.to(can, {yPercent: -22, rotation: '+=8', ease: 'none', scrollTrigger: {trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.4}}));
  gsap.to('.image-band img', {yPercent: -15, ease: 'none', scrollTrigger: {trigger: '.image-band', start: 'top bottom', end: 'bottom top', scrub: true}});
  gsap.from('.manifesto h2', {y: 80, opacity: 0, duration: 1, scrollTrigger: {trigger: '.manifesto-grid', start: 'top 75%'}});
  gsap.from('.process-item', {y: 35, opacity: 0, duration: .8, stagger: .12, scrollTrigger: {trigger: '.process-list', start: 'top 75%'}});
  gsap.to('.process-list', {y: -25, ease: 'none', scrollTrigger: {trigger: '.process', start: 'top bottom', end: 'bottom top', scrub: 1}});
  gsap.from('.work-card', {y: 50, opacity: 0, duration: 1, stagger: .15, scrollTrigger: {trigger: '.work-grid', start: 'top 78%'}});
  gsap.from('.journal-card', {y: 25, opacity: 0, duration: .7, stagger: .035, scrollTrigger: {trigger: '.journal-grid', start: 'top 80%'}});
  gsap.to('.contact-orbit', {rotation: 80, ease: 'none', scrollTrigger: {trigger: '.contact', start: 'top bottom', end: 'bottom top', scrub: 1}});
}

const cursor = document.querySelector('.cursor-dot');
if (cursor) window.addEventListener('pointermove', (event) => gsap.to(cursor, {x: event.clientX, y: event.clientY, duration: .35, ease: 'power2.out'}));
document.querySelectorAll('.magnetic').forEach((button) => {
  button.addEventListener('pointermove', (event) => { const rect = button.getBoundingClientRect(); gsap.to(button, {x: (event.clientX - rect.left - rect.width / 2) * .18, y: (event.clientY - rect.top - rect.height / 2) * .18, duration: .4}); });
  button.addEventListener('pointerleave', () => gsap.to(button, {x: 0, y: 0, duration: .5, ease: 'elastic.out(1, .4)'}));
});
const loadMore = document.querySelector('#load-more');
if (loadMore) loadMore.addEventListener('click', (event) => { event.currentTarget.textContent = '67 notes, open'; gsap.to(event.currentTarget, {backgroundColor: '#f26b3a', color: '#172522', duration: .25}); });
