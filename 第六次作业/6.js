let get0 = () => {
    const re_music = new XMLHttpRequest();
    re_music.open('get', 'http://musicapi.leanapp.cn/personalized?limit=21', true);
    re_music.onreadystatechange = () => {
        if (re_music.readyState === 4) {
            if ((re_music.status >= 200 && re_music.status < 300) || re_music.status == 304) {
                const res = JSON.parse(re_music.responseText);
                let music = res.result
                let img = new Array
                for (let a = 0; a < 30; a++) {
                    content.innerHTML +=
                        `<div class="muc">
                        <img style = "width: 140px;" src="${music[a].picUrl}">
                        <p  style = "width:140px;font-size:14px">${music[a].name}</p>
                       </div>`
                }
            } else {
                console.log('请求失败');
            }
        }
    };
    re_music.send();
}