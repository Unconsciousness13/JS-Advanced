function employees(arrJ, befCriteria) {
    const parsed = JSON.parse(arrJ);
    const [criteria,value] = befCriteria.split('-');

    return parsed
    .filter(x => x[criteria] === value)
    .map((x,i) =>  `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .join('\n') 
}
    // let printed = []
    // let counter = -1
    // const obj = JSON.parse(arrJ)
    // const [firstPart, criteria] = befCriteria.split('-')
    // for (const key of obj) {
    //     if (criteria === 'all') {
    //         counter++
    //         printed.push(`${counter}. ${key["first_name"]} ${key["last_name"]} - ${key["email"]}`)
    //     }
    //     if (key[firstPart] == criteria && criteria != 'all') {
    //         counter++
    //         printed.push(`${counter}. ${key["first_name"]} ${key["last_name"]} - ${key["email"]}`)
    //     }

    // }
    // return printed.join('\n')



console.log(employees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

));










