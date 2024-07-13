document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        { title: 'Movie 1', image: 'https://via.placeholder.com/150', link: '#' },
        { title: 'Movie 2', image: 'https://via.placeholder.com/150', link: '#' },
        { title: 'Movie 3', image: 'https://via.placeholder.com/150', link: '#' },
        { title: 'Movie 4', image: 'https://via.placeholder.com/150', link: '#' },
        { title: 'Movie 5', image: 'https://via.placeholder.com/150', link: '#' },
        { title: 'Movie 6', image: 'https://via.placeholder.com/150', link: '#' },
    ];

    const movieList = document.querySelector('.movie-list');

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <a href="${movie.link}" download>Download</a>
        `;
        
        movieList.appendChild(movieDiv);
    });
});