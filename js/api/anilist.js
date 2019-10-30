const fetch = require('node-fetch');
//var animelist = null;

function currentManga(res) {
    var query = `query($name: String!, $listType: MediaType, $status: MediaListStatus){
        MediaListCollection(userName: $name, type: $listType, status: $status) {
            lists {
                entries {
                    media {
                        title {
                            romaji
                        }
                        coverImage {
                            large
                        }
                    }
                }
            }
        }
    }
`;

    // Define our query variables and values that will be used in the query request
    var variables = {
        "name": "Chandandharana",
        "listType": "MANGA",
        "status": "CURRENT"
    };

    // Define the config we'll need for our Api request
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    // Make the HTTP Api request
    fetch(url, options).then(handleResponse)
        .then(data => {
            res.send(data)
        })
        .catch(handleError);

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    function handleError(error) {
        alert('Error, check console');
        console.error(error);
    }
}

function currentAnime(res) {
    var query = `query($name: String!, $listType: MediaType, $status: MediaListStatus){
        MediaListCollection(userName: $name, type: $listType, status: $status) {
            lists {
                entries {
                    media {
                        title {
                            romaji
                        }
                        coverImage {
                            large
                        }
                    }
                }
            }
        }
    }
`;

    // Define our query variables and values that will be used in the query request
    var variables = {
        "name": "Chandandharana",
        "listType": "ANIME",
        "status": "CURRENT"
    };

    // Define the config we'll need for our Api request
    var url = 'https://graphql.anilist.co',
        options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

    // Make the HTTP Api request
    fetch(url, options).then(handleResponse)
        .then(data => {
            res.send(data)
        })
        .catch(handleError);

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }

    function handleError(error) {
        alert('Error, check console');
        console.error(error);
    }
}

/*
var dayInMilliseconds = 1000 * 60 * 60 * 24;
setInterval(getCurrentAnime, dayInMilliseconds);
*/

exports.getCurrentAnime = currentAnime
exports.getCurrentManga = currentManga