var numberOfSile = 0;
var arraySlide = [];
var currentSlide = 0;
function Slide (title,content,text,image) {
    this.title = title;
    this.content = content;
    this.text = text;
    this.image = image;
    this.id = 'slide-'+numberOfSile;
    numberOfSile++;
    arraySlide.push(this);
}
var slide1 = new Slide (
'BỘ SƯU TẬP ĐỒNG HỒ',
'Trường tồn với thời gian',
'Đồng hồ được chế tác từ các nguyên liệu tốt nhất và lắp ráp tỉ mỉ đến từng chi tiết. Mỗi chi tiết được thiết kế, phát triển, và sản xuất với tiêu chuẩn chính xác nhất.',
'../Image/background1.jpg'
)
var slide1 = new Slide (
    'BỘ SƯU TẬP ĐỒNG HỒ 1',
    'Trường tồn với thời gian 1',
    'Đồng hồ được chế tác từ các nguyên liệu tốt nhất và lắp ráp tỉ mỉ đến từng chi tiết. Mỗi chi tiết được thiết kế, phát triển, và sản xuất với tiêu chuẩn chính xác nhất.',
    '../Image/background1.jpg'
)
var slide1 = new Slide (
    'BỘ SƯU TẬP ĐỒNG HỒ 2',
    'Trường tồn với thời gian 2',
    'Đồng hồ được chế tác từ các nguyên liệu tốt nhất và lắp ráp tỉ mỉ đến từng chi tiết. Mỗi chi tiết được thiết kế, phát triển, và sản xuất với tiêu chuẩn chính xác nhất.',
    '../Image/background1.jpg'
)
function buildSlide () {
    var html = `
    <div class="banner-item">
            <div class="banner-btn" id="prve" onclick = "prve()">
                <i class="fal fa-angle-left"></i>
            </div>
            <div class="banner-btn" id="next" onclick = "next()">
                <i class="fal fa-angle-right"></i>
            </div>
    </div>`
    for (var i=0 ; i<arraySlide.length;i++) {
        html += `
        <div class="body-banner" id="${arraySlide[i].id}" style="background-image: url(${arraySlide[i].image});left:-100%">
                <div class="banner-center">
                    <div class="body-banner-content">
                        <div class="banner-content-text">
                            <h3>${arraySlide[i].title}</h3>
                            <h1>${arraySlide[i].content}</h1>
                            <p>${arraySlide[i].text}</p>
                        </div>
                        <div class="banner-content-btn">
                            <button>
                                <a href="#">MUA NGAY</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    $('.body-banners').html(html);
    document.getElementById("slide-" + currentSlide).style.left = 0;
}
buildSlide();
function next () {
    var nextSlide
     if (currentSlide === arraySlide.length - 1) {
         nextSlide = 0;
     }
    else { nextSlide = currentSlide + 1;}
    document.querySelector('#slide-'+currentSlide).style.left = '0px'
    document.querySelector('#slide-'+nextSlide).style.left = '-100%';
    document.querySelector('#slide-'+currentSlide).setAttribute('class','body-banner slideOutRight');
    document.querySelector('#slide-'+nextSlide).setAttribute('class','body-banner slideInLeft');
    currentSlide = nextSlide;
}
function prve () {
    var nextSlide
     if (currentSlide == 0) {
         nextSlide = arraySlide.length -1 ;
     }
    else { nextSlide = currentSlide - 1;}
    console.log(nextSlide , currentSlide);
    document.querySelector('#slide-'+currentSlide).style.left = '0px'
    document.querySelector('#slide-'+nextSlide).style.left = '100%';
    document.querySelector('#slide-'+currentSlide).setAttribute('class','body-banner slideOutLeft');
    document.querySelector('#slide-'+nextSlide).setAttribute('class','body-banner slideInRight');
    currentSlide = nextSlide;
}
setInterval(next,5000)
function slideShow () {

}
slideShow ({
    seletor : '.body-banners',
    buildSlide : buildSlide(),
    
})