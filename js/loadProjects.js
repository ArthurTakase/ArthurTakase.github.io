function createProject(project, div) {
    var proZone = document.getElementById(div);
    var tags = ''
    var links = ''
    var pictures = ''

    project.tech.forEach(tech => { tags += `<a title="${tech.name}">${tech.logo}</a>` });
    project.link.forEach(link => { links += `<a href="${link.url}" target="_blank">${link.logo}</a>` });

    if (project.gif != undefined) {
        pictures = `<img class="card-gif" src="${project.gif}"><img class="card-img-with-video" src="${project.img}" alt="">`
    } else {
        pictures = `<img class="card-img" src="${project.img}">`
    }

    proZone.innerHTML += `
    <article class="card">
        ${pictures}
        <div class="card-infos">
            <p class="card-header">${project.title}</p>
            <p class="card-desc">${project.description}</p>
        </div>
        <div class="card-tag">${tags}</div>
        <div class="card-link">${links}</div>
    </article>`
}


projets.forEach(function(project) {
    switch (project.type) {
        case "pro":
            createProject(project, "Pro");
            break;
        case "perso":
            createProject(project, "Perso");
            break;
    }
})