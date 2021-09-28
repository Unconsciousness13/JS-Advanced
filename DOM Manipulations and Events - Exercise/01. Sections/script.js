function create(words) {
   let content = document.getElementById('content');

   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';

      div.addEventListener('click', () => {
         p.style.display = 'block';

      })
      div.appendChild(p);
      content.appendChild(div);
   });
}