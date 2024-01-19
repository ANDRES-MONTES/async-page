const container = document.querySelector('.container-info')

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCT9zcQNlyht7fRlcjmflRSA&part=snippet%2Cid&order=date&maxResults=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '89885d9adcmsh9283c06af9f6e3dp1d48b8jsn791af86e32c5',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetch_data(url_api) {
    const get_data = await fetch(url_api, options)
    const translate_data = await get_data.json()
    return translate_data
}


async function have_info () {
    try {
        const info = await fetch_data(url)
        const prove = `
        ${info.items.map(item =>
            `
            <div class="info-video">
                <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
                    <img src="${item.snippet.thumbnails.high.url}" alt="">
                    <h3>${item.snippet.title}</h3>
                 </a>
            </div>
            `
            ).join('')}
        `
        container.innerHTML = prove

    } catch (error) {
    console.error(error)
    }
}

have_info()
