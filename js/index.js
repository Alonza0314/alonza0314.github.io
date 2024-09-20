// 這裡可以添加更多的交互效果
document.addEventListener('DOMContentLoaded', function() {
    const description = document.querySelector('.personal-description');
    
    function checkScroll() {
        let descriptionPosition = description.getBoundingClientRect().top;
        let descriptionBottom = description.getBoundingClientRect().bottom;
        let screenPosition = window.innerHeight / 1.3; // 當元素進入視窗的 3/4 處時觸發

        if(descriptionPosition < screenPosition && descriptionBottom > 0) {
            description.classList.add('visible');
        } else {
            description.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初始檢查，以防描述已經在視圖中

    // 為技能項目添加隨機顏色
    const skillItems = document.querySelectorAll('.skill-item');
    const colors = ['color1', 'color2', 'color3', 'color4', 'color5'];

    skillItems.forEach(item => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        item.classList.add(randomColor);
    });

    // 添加滾動效果
    const topbar = document.querySelector('.topbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
    });

    // 添加移動端菜單切換功能
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 移動端菜單切換
    const navToggle = document.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});