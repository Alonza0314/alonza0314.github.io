function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var threshold = 100; // 設置閾值，使元素在進入視口前就開始變化
    return (
        rect.top >= -threshold &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + threshold &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var items = document.querySelectorAll('.timeline-item');
    items.forEach(function(item, index) {
        var rect = item.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var visiblePercentage = Math.min(Math.max((viewportHeight - rect.top) / viewportHeight, 0), 1);

        if (isElementInViewport(item)) {
            item.style.opacity = visiblePercentage.toFixed(2);
            item.style.transform = `translateY(${50 * (1 - visiblePercentage)}px)`;
        } else {
            // 確保第一個項目始終可見
            if (index === 0) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.opacity = '0.3';
                item.style.transform = 'translateY(50px)';
            }
        }
    });
}

// 初始檢查
document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.timeline-item');
    items.forEach(function(item, index) {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (index === 0) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        } else {
            item.style.opacity = '0.3';
            item.style.transform = 'translateY(50px)';
        }
    });

    handleScroll();
    // 監聽滾動事件
    window.addEventListener('scroll', handleScroll);
});