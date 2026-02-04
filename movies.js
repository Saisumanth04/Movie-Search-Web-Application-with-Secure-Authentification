const OMDB_API_KEY = "365d70cc";
const OMDB_BASE_URL = "https://www.omdbapi.com/";
function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

async function searchMovie() {
    const movieName = document.getElementById("searchInput").value;
    const resultDiv = document.getElementById("movieResult");

    if (!movieName) {
        resultDiv.innerHTML = "<p>Please enter a movie name</p>";
        return;
    }

    const url = `${OMDB_BASE_URL}?t=${encodeURIComponent(movieName)}&apikey=${OMDB_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {

        // YouTube trailer search URL
        const ytQuery = `${data.Title} official trailer`;
        const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ytQuery)}`;

        resultDiv.innerHTML = `
            <h3>${data.Title} (${data.Year})</h3>

            <a href="${ytUrl}" target="_blank">
                <img 
                    src="${data.Poster}" 
                    alt="Movie Poster"
                    title="Click to watch trailer on YouTube"
                >
            </a>

            <p><b>Genre:</b> ${data.Genre}</p>
            <p><b>IMDb Rating:</b> ${data.imdbRating}</p>
            <p><b>Plot:</b> ${data.Plot}</p>

            <p class="note">Click the poster to watch trailer 🎥</p>
        `;
    } else {
        resultDiv.innerHTML = `<p style="color:red">${data.Error}</p>`;
    }
}
