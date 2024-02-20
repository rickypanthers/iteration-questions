// document.querySelector('#category').addEventListener('click', function (e) {
//   console.log('Category parent clicked');
//   if (e.target.tagName === 'LI') {
//     window.location.href = '/' + e.target.id;
//   }
// });

document.querySelector('#form').addEventListener('keyup', function (e) {
  console.log('e.target', e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});
