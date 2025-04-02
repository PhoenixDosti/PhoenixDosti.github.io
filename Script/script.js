document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        alert('این عمل محدود شده است و دسترسی به کدهای سایت امکان‌پذیر نیست!');
    }
});

if (window.innerWidth < 700) {
  window.location.href = "mobile.html";
}

