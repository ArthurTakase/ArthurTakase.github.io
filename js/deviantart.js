if (!window.location.hash.contains("access_token=")) {
    window.location = `https://www.deviantart.com/oauth2/authorize?response_type=token&client_id=13754&redirect_uri=${window.location.origin + window.location.pathname}&state=coucou`;
}

function get_token() {
    const match = window.location.hash.match("access_token=([^&]+)");
    return (match ? match[1] : match)
}

async function fetch_data(url) {
    const response = fetch(url, {mode: 'no-cors'});
    const data = await response.json();
    return data;
}

async function get_images() {
    const token = get_token();
    const gallery = "BCFE40F1-C2FF-9DDA-30E5-B18D1C3695B4";
    const url = `https://www.deviantart.com/api/v1/oauth2/gallery/${gallery}?username=Takaaase&access_token=${token}&limit=24`;
    let picture = fetch_data(url);
    let img_url = [];
    while (picture.next_offset != null) {
        const results = picture.results;
        for (result of results) {
            picture.push(result.content.src);
        }
        picture = fecth(url + `&offset=${picture.next_offset}`);
    }
    return picture;
}

const gallery_line = document.querySelector(".gallery_line");
const pictures = get_images();

for (picture of pictures)  {
    const gallery_solo = document.createElement("div.gallery_solo");
    const image = document.createElement("img.draw");
    img.src = picture;
    gallery_solo.appendChild(image);
    gallery_line.appendChild(gallery_solo);
}
