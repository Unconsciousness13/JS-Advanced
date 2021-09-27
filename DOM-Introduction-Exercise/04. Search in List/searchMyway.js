function search() {
   let cities = Array.from(document.querySelectorAll('#towns li'));
   let search = document.getElementById('searchText');
   let searchedCity = search.value;
   for (let city of cities) {
      city.style.fontWeight = 'normal';
      city.style.textDecoration = 'none';
   }
   let filterCityes = cities
      .filter(x => x.textContent.includes(searchedCity));
   let mapedCity = filterCityes.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline'; 
   });

   let resultD = document.getElementById('result');
   resultD.textContent = `${filterCityes.length} matches found`;
}
