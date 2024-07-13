document.addEventListener('DOMContentLoaded', function() {
    const movieList = document.getElementById('movie-list');

    // Example array of movies
    const movies = [
        { title: 'Movie 1', description: 'Description for movie 1' },
        { title: 'Movie 2', description: 'Description for movie 2' },
        { title: 'Movie 3', description: 'Description for movie 3' },
        // Add more movies as needed
    ];

    // Function to create a movie card with actual content
    function createMovieCard(movie) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = 'images/movie-placeholder.jpg'; // Path to your actual image
        img.alt = movie.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = movie.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
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
    }, 2000); // 2-second delay to simulate loading
});
