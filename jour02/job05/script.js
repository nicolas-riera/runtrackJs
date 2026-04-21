window.addEventListener('scroll', () => {
    
    const height = document.documentElement.scrollHeight;

    const clientHeight = document.documentElement.clientHeight;

    const totalScrollable = height - clientHeight;
    const percentage = (window.scrollY / totalScrollable) * 100;

    document.getElementById('barre').value = percentage;
});