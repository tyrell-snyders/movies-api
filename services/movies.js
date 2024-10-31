async function GetTrending(req, res) {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmVhNDU4ZjAzM2UwZDRlNDc4ODExY2Q0ODJlMzk1NCIsIm5iZiI6MTczMDM3NjYyNi44MTc3MjcsInN1YiI6IjY3MjM3MjRjZWViMGM1ZWYzYjliZDdhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXTu5SOTVTfRDaPJ49kDbQvZ44W_v2yP3RhBhClZgjk'
        }
    };

    const result = await fetch(url, options)
        .then(response => response.json());

    res.send(result);
}

//TODO: create a service that returns trending TV shows


module.exports = {
    GetTrending
}