function changebackground() {

    const images = [
        'url("schl1.jpg")',
        'url("schl2.jpg")',
        'url("schl3.jpg")', 
        'url("school_background.jpg")',
    ]
    
    const section = document.getElementById('school_background');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
    }
    
    setInterval(changebackground, 5000)