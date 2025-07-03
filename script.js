const pages = [
    // Title page (split: left = title, right = image + caption)
    [
        { title: true },
        { img: 'images/P10.jpg', caption: 'CONGRATULATIONS, LOVEEEE!', paragraph: 'Congratulations, love! I am very much proud of you already even though we have known each other for 2 months palang!' }
    ],
    // 6 pairs of scrapbook pages (12 pages)
    [
        { img: 'images/P13.jpg', caption: 'hello, my cute cute lovelove', paragraph: 'Your cute cutee smile makes my heart warm and makes my day bright' },
        { img: 'images/P12.jpg', caption: 'I lovee you so much, my love', paragraph: 'You being weird too is what I find attractive about you hehe' }
    ],
    [
        { img: 'images/P5.jpg', caption: 'mimimi', paragraph: 'These moments that we share, the silly faces, the corny and funny jokes... These are what makes our love a love story, together' },
        { img: 'images/P6.jpg', caption: 'I really love your smile', paragraph: 'your smile is very much contagious, I could spend forever just watching you smile, aleah' }
    ],
    [
        { img: 'images/P1.jpg', caption: 'my pretty pretty baby', paragraph: 'The most you thing I have ever seen you do is your little pretty smile and your cute cute poses' },
        { img: 'images/P11.jpg', caption: 'you are so cute here', paragraph: 'every photo of you, my love, gives of a moment of pure love and joy heh' }
    ],
    [
        { img: 'images/P2.jpg', caption: 'You and me.', paragraph: 'you make the simplest moment feel magical, that your hand in mine is the most comforting thing I have held' },
        { img: 'images/P3.jpg', caption: 'Forever', paragraph: 'I want to spend every lifetime with you, holding your hand through it all, my love.' }
    ],
    [
        { img: 'images/P4.jpg', caption: 'no matter what happens', paragraph: 'There might be a lot of challenges, but I hope that you will bear with me and be with me through it all' },
        { img: 'images/P9.jpg', caption: 'I will always be here for you', paragraph: 'I will always be your safe place, your comfort, your home :)).' }
    ],
    [
        { img: 'images/P8.jpg', caption: 'mwaaaa', paragraph: 'Your kisses are like lilll promises of forever. Each one reminds me how lucky I am to have you in my life, just like how lucky u are to me.' },
        { img: 'images/P9.jpg', caption: 'fls more pics of us na nakatalikod', paragraph: 'and even from behind, I can recognize your love.' }
    ],
    // Last right page (to make 14 pages)
    [
        { img: 'images/P7.jpg', caption: 'freaky forever', paragraph: 'naway kayanin natin ito hehe. I love you so much, Gin Aleah.' }
    ]
];

let currentPage = 0;

function renderPages() {
    const leftPage = document.querySelector('.page.left');
    const rightPage = document.querySelector('.page.right');

    // Title page (first page)
    if (currentPage === 0) {
        leftPage.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:20px;text-align:center'>
            <span class='title-heart' style='text-align:center;width:100%;margin-bottom:20px'>My Love <span style='color:#e07a5f'>&hearts;</span></span>
            <p style='font-size:16px;line-height:1.6;color:#666;max-width:300px;margin:0 auto'>
                Every moment with you, my love, is a treasure I very much hold dear.. Your smile who brightens up even the darkest days. You really are something else, aleah, you have me, my heart, and my soul...
            </p>
        </div>`;
        rightPage.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:20px'>
            <img src="${pages[0][1].img}" alt="Title Photo" class="photo">
            <p class="caption" style="margin-top:18px;text-align:center;margin-bottom:15px;">${pages[0][1].caption}</p>
            <p style='font-size:14px;line-height:1.5;color:#666;text-align:center;max-width:250px;margin:0 auto'>${pages[0][1].paragraph}</p>
        </div>`;
    } else if (currentPage === pages.length - 1) {
        // Last page (single right page)
        leftPage.innerHTML = "";
        rightPage.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:20px'>
            <img src="${pages[currentPage][0].img}" alt="Memory" class="photo">
            <p class="caption" style="margin-top:18px;text-align:center;margin-bottom:15px;">${pages[currentPage][0].caption}</p>
            <p style='font-size:14px;line-height:1.5;color:#666;text-align:center;max-width:250px;margin:0 auto'>${pages[currentPage][0].paragraph}</p>
        </div>`;
    } else {
        leftPage.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:20px'>
            <img src="${pages[currentPage][0].img}" alt="Memory" class="photo">
            <p class="caption" style="margin-top:18px;text-align:center;margin-bottom:15px;">${pages[currentPage][0].caption}</p>
            <p style='font-size:14px;line-height:1.5;color:#666;text-align:center;max-width:250px;margin:0 auto'>${pages[currentPage][0].paragraph}</p>
        </div>`;
        rightPage.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:20px'>
            <img src="${pages[currentPage][1].img}" alt="Memory" class="photo">
            <p class="caption" style="margin-top:18px;text-align:center;margin-bottom:15px;">${pages[currentPage][1].caption}</p>
            <p style='font-size:14px;line-height:1.5;color:#666;text-align:center;max-width:250px;margin:0 auto'>${pages[currentPage][1].paragraph}</p>
        </div>`;
    }

    // Disable prev button on first page, next button on last
    document.getElementById('prevPage').disabled = currentPage === 0;
    document.getElementById('nextPage').disabled = currentPage === pages.length - 1;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderPages();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        renderPages();
    }
});

// Initial render
renderPages();

// Dual Curtain Opening Functionality
const leftCurtain = document.getElementById('leftCurtain');
const rightCurtain = document.getElementById('rightCurtain');
const centerText = document.getElementById('centerText');
const floatingLilly = document.getElementById('floatingLilly');
const minibookContainer = document.querySelector('.minibook-container');
let curtainsOpened = false;

// Function to open the curtains
function openCurtains() {
    if (!curtainsOpened) {
        curtainsOpened = true;
        
        // Animate left curtain sliding to the left
        leftCurtain.style.transform = 'translateX(-100%)';
        
        // Animate right curtain sliding to the right
        rightCurtain.style.transform = 'translateX(100%)';
        
        // Fade out center text
        centerText.style.opacity = '0';
        centerText.style.transform = 'translate(-50%, -50%) scale(0.8)';
        
        // Fade out floating Lilly
        floatingLilly.style.opacity = '0';
        floatingLilly.style.transform = 'translateY(-30px) scale(0.8)';
        
        // Show the minibook after animation
        setTimeout(() => {
            leftCurtain.style.display = 'none';
            rightCurtain.style.display = 'none';
            centerText.style.display = 'none';
            floatingLilly.style.display = 'block';
            floatingLilly.classList.add('show-lilly');
            minibookContainer.style.display = 'block';

            // Create multiple random floating lilies
            const lillyField = document.getElementById('lillyField');
            lillyField.innerHTML = '';
            const flyAnims = ['lillyFly1', 'lillyFly2', 'lillyFly3'];
            const lillyCount = 6;
            for (let i = 0; i < lillyCount; i++) {
                const lilly = document.createElement('div');
                lilly.className = 'lilly-float';
                lilly.textContent = '🌸';
                // Random position (avoid center area where minibook is)
                let left, top;
                let tries = 0;
                do {
                    left = Math.random() * 90; // percent
                    top = Math.random() * 80; // percent
                    tries++;
                } while (
                    left > 28 && left < 72 && top > 10 && top < 70 && tries < 10 // avoid center
                );
                lilly.style.left = left + '%';
                lilly.style.top = top + '%';
                // Random animation
                const anim = flyAnims[Math.floor(Math.random() * flyAnims.length)];
                const duration = (Math.random() * 2 + 4).toFixed(2); // 4-6s
                const delay = (Math.random() * 2).toFixed(2); // 0-2s
                lilly.style.animation = `${anim} ${duration}s ease-in-out ${delay}s infinite`;
                lillyField.appendChild(lilly);
            }

            // Start the music
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                musicToggle.textContent = '🔇 PAUSEE!!!!';
            }).catch(error => {
                console.log('Music auto-play prevented by browser');
            });
        }, 1200);
    }
}

// Add click events to both curtain panels
leftCurtain.addEventListener('click', openCurtains);
rightCurtain.addEventListener('click', openCurtains);

// Music Controls
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

// Function to toggle music
function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🎵 CLICK ME!!';
        isMusicPlaying = false;
    } else {
        bgMusic.play();
        musicToggle.textContent = '🔇 PAUSEE!!!!';
        isMusicPlaying = true;
    }
}

// Add click event to music toggle button 
musicToggle.addEventListener('click', toggleMusic); 