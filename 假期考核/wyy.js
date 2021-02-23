window.onload = function() {
    get0();
    get1();
}

let get0 = () => {
    const re_music = new XMLHttpRequest();
    re_music.open('get', 'http://musicapi.leanapp.cn/personalized?limit=8', true);
    re_music.onreadystatechange = () => {
        if (re_music.readyState === 4) {
            if ((re_music.status >= 200 && re_music.status < 300) || re_music.status == 304) {
                const res = JSON.parse(re_music.responseText);
                let music = res.result
                let img = new Array
                for (let a = 0; a < 8; a++) {
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
}

let get1 = () => {
        let banner = new Array;
        const re_banner = new XMLHttpRequest();
        re_banner.open('get', 'http://www.hjmin.com/banner?type=0', true);
        re_banner.onreadystatechange = () => {
            const rs = JSON.parse(re_banner.responseText);
            banner = rs.banners
            for (let b = 0; b < 10; b++) {
                swiper.innerHTML +=
                    `<div class="swiper-wrapper-box">
        <li class="swiper-item">
        <img class = "img${b}"src="${banner[b].imageUrl}" style = "height:284px" id="img${b}"></li>
    </div>`
            };
        };
        re_banner.send();
    }
    // let img0 = document.getElementById("img0");
    // let i = 0;
    // setInterval("lb()", 1000);

// function lb() {
//     img0.style.margintop = -i + "px";
//     i -= 730;
//     if (i == -730 * 10) { i = 0 }
// }