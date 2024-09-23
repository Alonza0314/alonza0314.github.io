// 這裡可以添加更多的交互效果
document.addEventListener('DOMContentLoaded', function() {
    const description = document.querySelector('.personal-description');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const topbar = document.querySelector('.topbar');
    
    function checkScroll() {
        if (description) {
            let descriptionPosition = description.getBoundingClientRect().top;
            let descriptionBottom = description.getBoundingClientRect().bottom;
            let screenPosition = window.innerHeight / 1.3;

            if(descriptionPosition < screenPosition && descriptionBottom > 0) {
                description.classList.add('visible');
            } else {
                description.classList.remove('visible');
            }
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
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topbar.classList.add('scrolled');
        } else {
            topbar.classList.remove('scrolled');
        }
    });

    // 移動端菜單切換
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-active');
            navToggle.classList.toggle('active');
            console.log('Nav toggle clicked'); // 保留這行來幫助調試
        });
    }

    // 其他現有的功能保持不變
    // ...（保留其他現有的代碼）

    console.log('DOMContentLoaded event fired'); // 添加這行來確認腳本已加載
});