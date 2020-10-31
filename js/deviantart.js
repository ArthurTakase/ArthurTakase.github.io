if (!window.location.hash.includes("access_token=")) {
    window.location = `https://www.deviantart.com/oauth2/authorize?response_type=token&client_id=13754&redirect_uri=${window.location.origin + window.location.pathname}&state=coucou&scope=browse`;
}

function get_token() {
    const match = window.location.hash.match("access_token=([^&]+)");
    return (match ? match[1] : match)
}

async function fetch_data(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function get_images() {
    const token = get_token();
    let offset = 0;
    const gallery = "BCFE40F1-C2FF-9DDA-30E5-B18D1C3695B4";
    const url = `https://www.deviantart.com/api/v1/oauth2/gallery/${gallery}?username=Takaaase&access_token=${token}&limit=24`;
    let picture;
    let img_url = [];
    do {
        picture = await fetch_data(url + `&offset=${offset}`);
        const results = picture.results;
        for (result of results) {
            if (result.content) {
                img_url.push(result.content.src);
            }
        }
        offset = offset + picture.next_offset;
    } while (picture.next_offset != null);
    return img_url;
}

async function create_img() {
    const gallery_line = document.querySelector(".gallery_line");
    const pictures = await get_images();

    for (picture of pictures)  {
        const gallery_solo = document.createElement("div");
        gallery_solo.className = "gallery_solo";
        const image = document.createElement("img");
        image.className = "draw";
        image.src = picture;
        gallery_solo.appendChild(image);
        gallery_line.appendChild(gallery_solo);
    }
}

create_img();
