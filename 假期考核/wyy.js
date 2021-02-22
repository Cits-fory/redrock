window.onload = () => {
    const re_music = new XMLHttpRequest();
    re_music.open('get', 'http://musicapi.leanapp.cn/personalized?limit=8', true);
    re_music.onreadystatechange = () => {
        if (re_music.readyState === 4) {
            if ((re_music.status >= 200 && re_music.status < 300) || re_music.status == 304) {
                const res = JSON.parse(re_music.responseText);
                let music = res.result
                let img = new Array
                for (let a = 0; a < 30; a++) {
                    content.innerHTML +=
                        `<li class="gd">
                         <div>
                         <a href="https://music.163.com/#/playlist?id=${music[a].id}">
                        <img style = "width: 140px;" src="${music[a].picUrl}" href="https://music.163.com/#/playlist?id=${music[a].id}"><a>
                        <a title="${music[a].name}"  style = "width:140px;font-size:14px;display:block;height:38px;color: black;text-decoration:none;" href="https://music.163.com/#/playlist?id=${music[a].id}">${music[a].name}<a>
                        </div>
                       </li>`
                }
            }
        }
    };
    re_music.send();
    let banner = new Array;
    const re_banner = new XMLHttpRequest();
    re_banner.open('get', 'http://www.hjmin.com/banner?type=0', true);
    re_banner.onreadystatechange = () => {
        const rs = JSON.parse(re_banner.responseText);
        banner = rs.banners
    };
    ban.innerHTML +=
        `<li>
    <div>
    <a href="https://music.163.com/#/playlist?id=${banner[0].id}">
    <img style="width: 140px;" src="${banner[0].picUrl}">
    <a>
    </div>
    </li>`
    re_banner.send();
}