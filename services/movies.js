async function GetTrending(req, res) {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.ACCESS_KEY}`
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