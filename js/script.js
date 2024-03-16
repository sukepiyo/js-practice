/* ハンバーガーメニュー
================================================== */
const navBtn = document.querySelector('.nav-btn');
const navBtnLine = document.querySelector('.nav-btn__line');
const navMenu = document.querySelector('.nav-menu');

navBtn.addEventListener('click', () => {
    navBtnLine.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/* モーダルウィンドウ
================================================== */
const modalOpen = document.querySelector('.modal-open');
const modalClose = document.querySelector('.modal-close');
const modalBody = document.querySelector('.modal-body');
const modalMask = document.querySelector('.modal-mask');

modalOpen.addEventListener('click', () => {
    modalBody.classList.add('active');
    modalMask.classList.add('active');
});

modalClose.addEventListener('click', () => {
    modalBody.classList.remove('active');
    modalMask.classList.remove('active');
});

modalMask.addEventListener('click', () => {
    modalBody.classList.remove('active');
    modalMask.classList.remove('active');
});

/* アコーディオンメニュー
================================================== */
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const content = accordionTitle.nextElementSibling;
        content.classList.toggle('active');
    });
});

/* スクロールアニメーション
================================================== */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                },
                {
                    duration: 2000,
                    delay: 1000 * index,
                    fill: 'forwards'
                }
            );
            // 一度ふわっと表示されたら監視をやめる
            obs.unobserve(entry.target);
        }
    });
};
// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});
