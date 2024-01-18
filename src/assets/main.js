const container = document.querySelector('.container-info')

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCT9zcQNlyht7fRlcjmflRSA&part=snippet%2Cid&order=date&maxResults=9';
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
            <div>
            <iframe width="340" height="220" src="https://www.youtube.com/watch?v=${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            <h3>${item.snippet.title}</h3>
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
