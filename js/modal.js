// modal for all service pages (pop-up contact screen)

// modal items 
const modal = document.getElementById('emailModal');
const openBtn = document.querySelector('.mainBtn');
const closeBtn = document.querySelector('.closeBtn');

// click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (i) => {
    if(i.target === modal){
        modal.style.display = 'none';
    }
});