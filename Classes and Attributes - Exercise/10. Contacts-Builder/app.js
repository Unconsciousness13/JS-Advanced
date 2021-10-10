class Contact {
	constructor (firstName, lastName, phoneNumber, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phoneNumber;
		this.email = email;
		this._online = false;
	}

	get online () {
		return this._online
	}

	set online (value) {
		this._online = value

		if (this.onlineDiv) {
			this.onlineDiv.className = this._online ? 'title online' : 'title'
		}
	}

	eFactory (tag, content = '') {
		const e = document.createElement(tag)
		e.innerHTML = content

		return e
	}

	render (id) {
		this.templ = this.eFactory('article')
		this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`)
		this.infoBtn = this.eFactory('button', '&#8505;')
		this.infoDiv =
			this.eFactory(
				'div',
				`<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
			)


		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.infoDiv.className = 'info'
		this.infoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoBtn)
		this.templ.appendChild(this.onlineDiv)
		this.templ.appendChild(this.infoDiv)

		
		document.getElementById(id).appendChild(this.templ)


		this.infoBtn.addEventListener('click', () => {
			this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
		})
	}
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  