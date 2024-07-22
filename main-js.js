document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const dontKnowBtn = document.getElementById('dontKnowBtn');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close');
    const backBtn = document.getElementById('backBtn');

    let noClickCount = 0;

    yesBtn.addEventListener('click', () => {
        showPopup('شكرا لثقتك بي لم ولن تندمي ❤️😍🥰🎉🫂👊');
    });

    noBtn.addEventListener('click', () => {
        noClickCount++;
        if (noClickCount === 10) {
            showPopup('ألم تملي الضغط علي؟ جربي إخوتي الأزرار الأخرون 😭');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 10000);
        }
        moveButtonRandomly(noBtn);
    });

    dontKnowBtn.addEventListener('click', () => {
        showPopup('إن لم تكوني تعلمين 🤔 فجربي الضغط على الزر نعم 😅');
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    backBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    function showPopup(message) {
        popupMessage.textContent = message;
        popup.style.display = 'block';
    }

    function moveButtonRandomly(button) {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        button.style.position = 'fixed';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
});
