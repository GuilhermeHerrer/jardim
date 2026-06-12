const openBtn = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const close = document.getElementById('close-popup');

openBtn.addEventListener('click', () => {
  popup.classList.add('ativo');
});

const closePopup = () => {
  popup.classList.add('fade-out')

  setTimeout(() => {
        popup.classList.remove('ativo'); 
        popup.classList.remove('fade-out'); 
    }, 500);
};

close.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
    if (e.target === popup){
        closePopup();
    }
})