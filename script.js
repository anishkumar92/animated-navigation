const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
navItems = [nav1,nav2,nav3,nav4,nav5];
// toggle menu 
function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // animate in
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
        navItems.forEach((nav,i)=> {
            nav.classList.remove(`slide-out-${i+1}`);
            nav.classList.add(`slide-in-${i+1}`);
        });
    } else {
        // animate out
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        navItems.forEach((nav,i)=> {
            nav.classList.remove(`slide-in-${i+1}`);
            nav.classList.add(`slide-out-${i+1}`);
        });
    }
}
// event listners
menuBars.addEventListener('click',toggleNav);
navItems.forEach(nav => {
    nav.addEventListener('click',toggleNav);
});
