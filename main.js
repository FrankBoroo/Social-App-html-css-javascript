//SIDEBAR 
const menuItems = document.querySelectorAll('.menu-item');

//remove active class from all items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem(); 
        item.classList.add('active');

        if (item.id === 'notifications') {
            document.querySelector('.notification-popup').style.display = 'block';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
        }
    });
});
