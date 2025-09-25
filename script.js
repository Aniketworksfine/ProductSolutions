// Simulate real-time updates
setTimeout(() => {
    const notification = document.getElementById('notification');
    notification.style.display = 'flex';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}, 2000);

// Add interactive behavior
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.textContent = 'ADDED';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = 'ADD';
            this.style.background = '#e91e63';
        }, 2000);
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.background = '#f0f0f0';
        setTimeout(() => {
            this.style.background = 'white';
        }, 200);
    });
});
