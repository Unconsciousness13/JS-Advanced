function solve() {
  //1. Select element
  let textElement = document.querySelector("#text")
  let nameCOnventionElement = document.querySelector('#naming-convention')
  //2. Parse data
  let text = textElement.value;
  let namingConvention = nameCOnventionElement.value;
  //3. Main logic

  let result = applyNamingCOnvention(text,namingConvention);
  //4. Display result in DOM
  let spanElement = document.getElementById('result')
  spanElement.textContent = result;

  function applyNamingCOnvention(text, convention){
    const  conventionSwitch = {
      'Pascal Case': () => text
      .toLowerCase()
      .split(' ')
      .map(x => x[0].toUpperCase() + x.slice(1))
      .join(''),

      'Camel Case': ()=> text
      .toLowerCase()
      .split(' ')
      .map((x,i) => x = i !==0 ? x[0].toUpperCase() + x.slice(1): x)
      .join(''),
      default: () =>  'Error!'
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
}