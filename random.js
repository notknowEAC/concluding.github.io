const imgEl = document.getElementById('random-image')
const btn = document.getElementById('container-stars')
const srcArray = ['png/1.jpg','png/2.jpg','png/3.jpg','png/4.jpg','png/5.jpg',
    'png/6.jpg','png/7.jpg','png/8.jpg','png/9.jpg','png/10.jpg',
    'png/11.jpg','png/12.jpg','png/13.jpg','png/14.jpg','png/15.jpg',
    'png/16.jpg','png/17.jpg','png/18.jpg','png/19.jpg','png/20.jpg',
    'png/21.jpg','png/22.jpg','png/23.jpg','png/24.jpg','png/25.jpg',
    'png/26.jpg','png/27.jpg','png/28.jpg','png/29.jpg','png/30.jpg',
    'png/31.jpg','png/32.jpg','png/33.jpg','png/34.jpg','png/35.jpg',
    'png/36.jpg','png/37.jpg','png/38.jpg','png/39.jpg','png/40.jpg',
    'png/41.jpg','png/42.jpg','png/43.jpg','png/44.jpg','png/45.jpg',
    'png/46.jpg','png/47.jpg','png/48.jpg','png/49.jpg','png/50.jpg',
    'png/51.jpg','png/52.jpg','png/53.jpg','png/54.jpg','png/55.jpg',
    'png/56.jpg','png/57.jpg','png/58.jpg','png/59.jpg','png/60.jpg',
    'png/61.jpg','png/62.jpg','png/63.jpg','png/64.jpg','png/65.jpg',
    'png/66.jpg','png/67.jpg','png/68.jpg','png/69.jpg','png/70.jpg']
imgEl.src = srcArray[3];
    btn.addEventListener('click', ()=>{
        window.location.reload();
    });

    randomImage();
    function randomImage(){
        const randomIndex = Math.floor(Math.random()*srcArray.length)

        if (randomIndex !== Number(localStorage.getItem('index'))){

            imgEl.src = srcArray[randomIndex];

            localStorage.setItem('index', randomIndex);
        } else {
            randomImage();
        }
    }

