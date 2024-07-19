document.addEventListener('DOMContentLoaded', function () {

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Top';
    scrollTopButton.classList.add('scroll-top');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Modal Title</h2>
            <p>This is a simple modal window.</p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalButton = document.createElement('button');
    modalButton.textContent = 'Open Modal';
    modalButton.classList.add('modal-button');
    document.body.appendChild(modalButton);

    modalButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    
    const style = document.createElement('style');
    style.textContent = `
        html {
            scroll-behavior: smooth;
        }
        .scroll-top {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #ff69b4;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
            z-index: 1000;
        }
        .scroll-top.visible {
            display: block;
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        .modal-content {
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            position: relative;
            width: 80%;
            max-width: 500px;
        }
        .modal .close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 24px;
            color: #333;
        }
        .modal-button {
            background: #ff69b4;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 16px;
        }
    `;
    document.head.appendChild(style);
});
