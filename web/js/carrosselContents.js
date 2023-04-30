const req = new XMLHttpRequest();

const slideList = document.querySelector('div.slides');

contents = [];

req.onload = () => {
    let res = JSON.parse(req.response);
    if (req.readyState === 4 && req.status === 200) {
        for (const value of Object.values(res)) {
            content = `
                <div class="slide">
                    <img src="${value.image}" alt="${value.imageAlt}">
                    <div class="describe">
                        <p class="title">${value.title}</p>
                        <p class="text">${value.text}</p>
                        <a href="${value.link}" target="_blank"><ion-icon name="arrow-redo-outline"></ion-icon></a>
                    </div>
                </div>
            `
            contents.push(content);
        };

        slideList.innerHTML = contents.join('');
    };
};

req.open('GET', 'contents.json');
req.send();
