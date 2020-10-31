async function fetch_data(url) {
    const response = fetch(url, {mode: 'no-cors'});
    const data = await response.json();
    return data;
}

async function get_images() {
    const token = fetch_data("https://www.deviantart.com/oauth2/token?client_id=13754&client_secret=61112f58a45d9c5ae98ff3bfbc29571d&grant_type=client_credentials").access_token;
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
