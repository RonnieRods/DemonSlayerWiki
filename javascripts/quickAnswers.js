document.querySelectorAll('.char-quick-answers-box-size').forEach((details) => {
    const summary = details.querySelector('summary');
    const content = details.querySelector('.char-answer-margin');
    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener('click', (e) => {
        e.preventDefault();
        details.style.overflow = 'hidden';

        if (isClosing || !details.open) {
            openDetails();
        } else if (isExpanding || details.open) {
            closeDetails();
        }
    });

    function closeDetails() {
        isClosing = true;
        const startHeight = `${details.offsetHeight}px`;
        const endHeight = `${summary.offsetHeight}px`;

        if (animation) animation.cancel();

        animation = details.animate(
            { height: [startHeight, endHeight] },
            { duration: 250, easing: 'ease-out' }
        );

        animation.onfinish = () => {
            details.open = false;
            animation = null;
            isClosing = false;
            details.style.height = '';
            details.style.overflow = '';
        };
        animation.oncancel = () => { isClosing = false; };
    }

    function openDetails() {
        details.style.height = `${details.offsetHeight}px`;
        details.open = true;
        window.requestAnimationFrame(() => {
            isExpanding = true;
            const startHeight = `${details.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

            if (animation) animation.cancel();

            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: 250, easing: 'ease-out' }
            );

            animation.onfinish = () => {
                animation = null;
                isExpanding = false;
                details.style.height = '';
                details.style.overflow = '';
            };
            animation.oncancel = () => { isExpanding = false; };
        });
    }
});