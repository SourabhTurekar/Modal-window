'use strict';
// let modal = document.querySelector('.modal');
// let overlay = document.querySelector('.overlay');
// let btnCloseModal = document.querySelector('.close-modal');
// let btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);

// //console.log(modal.classList.remove('hidden'));
// console.log(modal.classList.add('hid'));
// console.log(modal.classList.remove('hidden'));
// console.log(modal.classList.remove('hid'));
// modal.classList.remove('modal');
// // for (let i = 0; i < btnOpenModal.length; i++) {
// //   console.log(btnOpenModal[i].textContent);
// // }
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelectorAll('.show-modal');
let body = document.querySelector('body');
//OPEN MODAL-------------------------------------------------------------
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//CLOSE MODAL------------------------------------------------------------
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//BUTTON EVENT-----------------------------------------------------------
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) 
  closeModal();
});


console.log(btnOpenModal.length);