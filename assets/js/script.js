let button_search = document.getElementById("button_search");

button_search.addEventListener("click", () => {
    let search = document.getElementById("search");

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGUzN2Y1YTU4ZTQ3ZGIwMGY4NTkyODU3OWY5MDBmOCIsInN1YiI6IjY0NmUxNjEzMzNhMzc2MDE1OGRjMDRhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10TTdpPPusGwjBn81duAdGN3P84qd250flrJJOeCyEs'
        }
    };


    fetch(`https://api.themoviedb.org/3/search/movie?query=${search.value}&include_adult=false&language=fr-FR`, options)
        .then(response => response.json())
        .then(movies => {
            movies.results.forEach(movies => {
                if(movies.poster_path == null) {
                    contain.innerHTML += `
                    <div class="card bg-secondary card2" style="width: 18rem;">
                        <div class="empty_img">
                            <div class="text_empty_img">No poster</div>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ${movies.original_title}
                            </button>
                            <p class="card-text">${movies.overview}</p>
                        </div>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="card" style="width: 18rem;">
                                <img src="..." class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                </div>
                            </div>

                        </div>
                    </div>
        `
                        } else{
                            contain.innerHTML += `
                    <div class="card bg-secondary card2" style="width: 18rem;">
                        <img src="https://image.tmdb.org/t/p/w500/${movies.poster_path}" class="card-img-top" alt="Affiche">
                        <div class="card-body">
                            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                ${movies.original_title}
                            </button>
                            <p class="card-text">${movies.overview}</p>
                        </div>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="card" style="width: 18rem;">
                                <img src="https://image.tmdb.org/t/p/w300/${movies.poster_path}" class="card-img-top" alt="Affiche">
                                <div class="card-body">
                                    <h5 class="card-title">${movies.original_title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                        of the card's content.</p>
                                </div>
                            </div>

                        </div>
                    </div>
        `
                        }
                        })

        })
        // .catch(err => console.error(err));
})

fetch(`https://api.themoviedb.org/3/search/movie?query=${search.value}&include_adult=false&language=fr-FR`, options)

