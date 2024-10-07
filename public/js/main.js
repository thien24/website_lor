document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    fetch('/api/anime')
        .then(response => response.json())
        .then(animes => {
            const filteredAnimes = animes.filter(anime => anime.name.toLowerCase().includes(searchTerm));
            displayAnimeList(filteredAnimes);
        });
});

function displayAnimeList(animes) {
    // Hàm để hiển thị danh sách anime
}
