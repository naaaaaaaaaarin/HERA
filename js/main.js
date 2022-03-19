let TEST = 'a';
// 최상단 배너의 x를 클릭하면 배너가 사라짐
$('aside .close').click(function(){
    $(this).parent().slideUp(300);
});

// gnb메뉴에 마우스를 올리면 하단 메뉴가 나옴
$('.gnb li').mouseenter(function(){
    $(this).children('.submenu').stop().slideDown(300);
});
$('.gnb li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp(300);
});

// 햄버거 메뉴를 누르면 모든 메뉴가 하단에 나옴
$('.global label').click(function(){
    $('.gnb li .hammenu').stop().slideToggle(300);
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


// 사이드페이지
// 아래로 스크롤 시 사이드햄버거 사라짐
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    if(scrollTop>10){
        $('label[for="sideHam"]').css({'opacity':0});
    }else{
        $('label[for="sideHam"]').css({'opacity':1});
    };
});
// 사이드 햄버거 클릭 시 사이드페이지 나오면 body 고정
/* const sideHam = document.querySelector('#sideHam');
const body = document.querySelector('body');
const openSide = () => {
    body.style.overflow = 'hidden';
    body.classList.add('body_active');
};
sideHam.addEventListener('click', openSide); */
$('#sideHam').click(function(){
    $('.side_menu_page').animate({left:'0px'},{duration:300});
    $('body').css({overflow:'hidden'});
    $('body').addClass('body_active');
});

// 사이드메뉴 클릭 시 + -> - 회전
$('.s_top').click(function(){
    $(this).children('.plus').children().first().toggleClass('plus_active');
    $(this).children('.plus').children().last().toggleClass('plus_active2');
    // $(this).children('.plus').children().last().toggle(); <-사라지기는 하나 어색함
    // 사이드메뉴 하단메뉴 출력
    $(this).next().stop().slideToggle(300);
});

// 사이드메뉴 X 클릭 시 사이드페이지 사라짐
$('.side_close').click(function(){
    $('.side_menu_page').animate({left:'-100%'},{duration:700});
    $('body').css({'overflow':'visible'});
    $('body').removeClass('body_active');
    });

// 블랙패밀리 
let tab = $('.black_family .left ul').find('li');
// console.log(tab);
// console.log(tab.length);
function tab_menu(num){
    for(let i=0;i<tab.length;i++){
        if(num==i){
            tab.eq(i).addClass('active');
            $('.b_content'+i).show();
        }else{
            tab.eq(i).removeClass('active');
            $('.b_content'+i).hide();
        }
    };
};