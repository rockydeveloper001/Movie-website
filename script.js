document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');

    // Example array of movies
    const movies = [
        { title: 'Movie 1', description: 'Description for movie 1' },
        { title: 'Movie 2', description: 'Description for movie 2' },
        { title: 'Movie 3', description: 'Description for movie 3' },
        // Add more movies as needed
    ];

    // Function to create a movie placeholder
    function createMoviePlaceholder(movie) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top placeholder';
        img.src = 'images/movie-placeholder.jpg'; // Path to your placeholder image
        img.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title placeholder-glow';
        cardTitle.innerHTML = `<span class="placeholder col-6">${movie.title}</span>`;

        const cardText = document.createElement('p');
        cardText.className = 'card-text placeholder-glow';
        cardText.innerHTML = `<span class="placeholder col-7">${movie.description}</span>`;

        const downloadButton = document.createElement('a');
        downloadButton.className = 'btn btn-primary disabled placeholder col-4';
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

    // Add placeholders to the movie list
    movies.forEach(movie => {
        const placeholder = createMoviePlaceholder(movie);
        movieList.appendChild(placeholder);
    });
});
