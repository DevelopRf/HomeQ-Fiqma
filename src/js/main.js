const favorites = document.querySelectorAll('.favorites')
const btnBlackMode = document.querySelector('.btnDarkMode')

for (const item of favorites) {
    item.addEventListener('click', () => {

        item.querySelector('.favorites .heartIcon path').classList.toggle('red')
    })
}