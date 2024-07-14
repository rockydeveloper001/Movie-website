document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');

    // Example array of movies
    const movies = [
        { title: 'Movie 1', description: 'Description for movie 1', img: '20240714_131541.jpg', rate: '8.0' },
        { title: 'Movie 2', description: 'Description for movie 2', img: '20240714_131541.jpg', rate: '8.0' },
        { title: 'Movie 3', description: 'Description for movie 3', img: '20240714_131541.jpg', rate: '8.0' },
        // Add more movies as needed
    ];

    // Function to create a movie card with actual content
    function createMoviePlaceholder(movie) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('div');
        img.className = 'card-img-top placeholder-glow';
        img.src = '...'
        img.style.height = '200px';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title placeholder-glow';
        cardTitle.innerHTML = `<span class="placeholder col-6"></span>`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text placeholder-glow';
        cardText.innerHTML = `<span class="placeholder col-7"></span>`;

        const downloadButton = document.createElement('a');
        downloadButton.className = 'btn btn-primary disabled placeholder col-6';
        downloadButton.href = '#';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(downloadButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        return col;
    }

    // Add placeholders to the movie list
    movies.forEach(() => {
        const placeholder = createMoviePlaceholder();
        movieList.appendChild(placeholder);
            });

    // Function to create a movie card with actual content
    function createMovieCard(movie) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = movie.img; // Path to your actual image
        img.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'h3';
        cardTitle.textContent = movie.title;

        const cardRate = document.createElement('p')
        cardRate.className = 'badge text-bg-success';
        cardRate.textContent = movie.rate;

        const cardText = document.createElement('small');
        cardText.className = 'h5';
        cardText.textContent = movie.description;

        const downloadButton = document.createElement('a');
        downloadButton.className = 'btn btn-primary';
        downloadButton.href = '#';
        downloadButton.textContent = 'Download';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(downloadButton);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

            return col;
        }

    // Simulate loading delay and replace placeholders with actual content
    setTimeout(() => {
        movieList.innerHTML = ''; // Clear placeholders
        
        movies.forEach(movie => {
                    const movieCard = createMovieCard(movie);
                    movieList.appendChild(movieCard);
                });
        
    }, 5000); // 2-second delay to simulate loading
});
