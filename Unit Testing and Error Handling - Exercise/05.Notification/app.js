function notify(message) {
  const hideIt = () => { divNotification.style.display = 'none' }
  const divNotification = document.getElementById('notification')
  divNotification.textContent = message
  divNotification.style.display = 'block'
  divNotification.addEventListener('click', hideIt)

}