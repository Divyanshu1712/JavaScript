const list = document.getElementById('myList');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});