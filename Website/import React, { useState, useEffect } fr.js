<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine's Day!</title>
    <style>
        :root {
            --pink-500: #ec4899;
            --pink-300: #f9a8d4;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #fce7f3, #fdf2f8);
            min-height: 100vh;
        }

        header {
            text-align: center;
            padding: 2rem;
            background: rgba(252, 231, 243, 0.8);
        }

        h1 {
            color: var(--pink-500);
            font-size: 2.5rem;
        }

        .timeline-container {
            position: relative;
            max-width: 900px;
            margin: 2rem auto;
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .timeline-line {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--pink-300);
            transform: translateY(-50%);
        }

        .timeline-events {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .timeline-event {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: white;
            border: 2px solid var(--pink-300);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
        }

        .timeline-event:hover {
            transform: scale(1.1);
            border-color: var(--pink-500);
        }

        .timeline-event.active {
            background: #fce7f3;
            border-color: var(--pink-500);
        }

        .timeline-event span {
            color: var(--pink-500);
            font-weight: bold;
        }

        #character {
            width: 48px;
            height: 48px;
            background: #60a5fa;
            border-radius: 50%;
            position: absolute;
            bottom: -24px;
            left: 0;
            transition: left 0.5s ease;
            z-index: 1;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 0.5rem;
            max-width: 500px;
            width: 90%;
            position: relative;
        }

        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }

        .heart {
            position: fixed;
            pointer-events: none;
            animation: fall linear forwards;
            color: var(--pink-500);
            font-size: 1.5rem;
        }

        @keyframes fall {
            from {
                transform: translateY(-20px);
                opacity: 1;
            }
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Happy Valentine's Day!</h1>
    </header>

    <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-events">
            <div class="timeline-event" data-event="meet">
                <span>Meet</span>
            </div>
            <div class="timeline-event" data-event="date">
                <span>Date</span>
            </div>
            <div class="timeline-event" data-event="trip">
                <span>Trip</span>
            </div>
            <div class="timeline-event" data-event="moment">
                <span>Moment</span>
            </div>
        </div>
        <div id="character"></div>
    </div>

    <div class="modal" id="modal">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h2 id="modal-title"></h2>
            <p id="modal-description"></p>
        </div>
    </div>

    <script>
        const events = {
            meet: {
                title: 'Our First Meeting',
                description: 'We met at that charming coffee shop, and I knew you were special from the start.'
            },
            date: {
                title: 'Our First Date',
                description: 'Our first date was magical and unforgettable.'
            },
            trip: {
                title: 'Our First Trip',
                description: 'Traveling with you was the adventure of a lifetime.'
            },
            moment: {
                title: 'Special Moment',
                description: 'This moment changed everything and filled my heart with joy.'
            }
        };

        const timelineEvents = document.querySelectorAll('.timeline-event');
        const character = document.getElementById('character');
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalClose = document.querySelector('.modal-close');

        timelineEvents.forEach((event, index) => {
            event.addEventListener('click', () => {
                // Update active state
                timelineEvents.forEach(e => e.classList.remove('active'));
                event.classList.add('active');

                // Move character
                const containerWidth = event.parentElement.offsetWidth;
                const position = (index / (timelineEvents.length - 1)) * (containerWidth - 48);
                character.style.left = `${position}px`;

                // Show modal
                const eventData = events[event.dataset.event];
                modalTitle.textContent = eventData.title;
                modalDescription.textContent = eventData.description;
                modal.style.display = 'flex';
            });
        });

        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Falling hearts animation
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (5 + Math.random() * 5) + 's';
            document.body.appendChild(heart);

            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        setInterval(createHeart, 500);
    </script>
</body>
</html>