'use strict';
window.addEventListener('DOMContentLoaded',(e) => {
    //nave menu
    const hamburger = document.querySelector('.navbar-toggle');
    const leftMenu = document.querySelector('.main-area');

    if(hamburger) {
        hamburger.addEventListener('click',(e) => {
            leftMenu.classList.toggle('active');
        });
    }

    window.addEventListener('scroll',(e) => {
        let navContainer = document.querySelector('.container-fluid');
        let mainArea = document.querySelector('.main-area-2');
        const navContainerHeight = parseFloat(getComputedStyle(navContainer).height);
    
        if (navContainerHeight > mainArea.clientHeight) {
            mainArea.style.minHeight = navContainerHeight + 700 + 'px';
        } else {
            mainArea.style.minHeight = navContainerHeight + 450 + 'px';
        }
    });
    window.addEventListener('click',(e) => {
        let navContainer = document.querySelector('.container-fluid');
        let mainArea = document.querySelector('.main-area-2');
        const navContainerHeight = parseFloat(getComputedStyle(navContainer).height);
    
        if (navContainerHeight > mainArea.clientHeight) {
            mainArea.style.minHeight = navContainerHeight + 700 + 'px';
        } else {
            mainArea.style.minHeight = navContainerHeight + 450 + 'px';
        }
    });
    window.addEventListener('resize',(e) => {
        let navContainer = document.querySelector('.container-fluid');
        let mainArea = document.querySelector('.main-area-2');
        const navContainerHeight = parseFloat(getComputedStyle(navContainer).height);
    
        if (navContainerHeight > mainArea.clientHeight) {
            mainArea.style.minHeight = navContainerHeight + 700 + 'px';
        } else {
            mainArea.style.minHeight = navContainerHeight + 450 + 'px';
        }
    });
    function pageUp() {
        const $up = document.querySelector('#page-up');
        if ($up) {
          document.addEventListener('scroll', function () {
            const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
            if (scrollPercentage >= 30) {
              $up.style.display = 'block';
            } else {
              $up.style.display = 'none';
            }
          });
          $up.addEventListener('click', () => {
            window.scrollTo(0, 0);
          });
        }
      }
      pageUp();
});
$(document).ready(function() {
var q=0;
    $("body > div.container.left-side.main-container > div.row.row-offcanvas.row-offcanvas-left.main-area > div.col-lg-9.col-md-9.col-sm-8.content-wrap.match-height.main-area-2 > div.row > div.art-Post > div > div.art-Post-inner.art-article > div > div.text-block > div.wrapper-test > label").click(function(){
    q=q+1;

    if (q%2)
    {
    $(".zadanie").css("height","auto");
    $("body > div.container.left-side.main-container > div.row.row-offcanvas.row-offcanvas-left.main-area > div.col-lg-9.col-md-9.col-sm-8.content-wrap.match-height.main-area-2 > div.row > div.art-Post > div > div.art-Post-inner.art-article > div > div.text-block > div.wrapper-test > label").text('Скрыть');
    }
    else
    {
        
    $(".zadanie").css("height","150px");
    $("body > div.container.left-side.main-container > div.row.row-offcanvas.row-offcanvas-left.main-area > div.col-lg-9.col-md-9.col-sm-8.content-wrap.match-height.main-area-2 > div.row > div.art-Post > div > div.art-Post-inner.art-article > div > div.text-block > div.wrapper-test > label").text('Развернуть');
    }
});
$('.toggler').click(function() {
    $(this).toggleClass('active');
    var wrap = $(this).closest('li');
    wrap.toggleClass('active');
    // $('.side-nav > li > ul').not(wrap).slideUp();
    wrap.find('ul').slideToggle();
    });
    toggleInit();
});
function toggleInit() {
    $('.side-nav > li.active > ul').slideDown(0);
}
$(document).on('click','.img_pag a', function(e) {
    e.preventDefault();
    $('.img_pag a').removeClass('active');
    var url = $(this).attr('href');
    var anchor = $(this).text();
    var self_eq = $(this).index('.img_pag a');
    var el_last_idx = $('.img_pag a').last().index('.img_pag a');
    var el_first_idx = $('.img_pag a').first().index('.img_pag a');
    
    var image = '<a id="reshebnik_swipebox" href="'+url+'"><img src="'+url+'" /></a>';
    if ($('#navs').length < 1) {
    var style_r;
        var style_l;
    if (self_eq<=el_first_idx) { style_l = 'style="display:none;"'; }
        var nav_prev = '<a class="l" '+style_l+' data-nav="left" href="#">< предыдущее</a>';
    if (self_eq>=el_last_idx) { style_r = 'style="display:none;"'; }
        var nav_next = '<a class="r" '+style_r+' data-nav="right" href="#">следующее ></a>';
        var navs = '<div id="navs">'+nav_prev+'&nbsp;'+nav_next+'</div><span class="abra">'+anchor+'</span>';
        var navs2 = '<div id="navs">'+nav_prev+'&nbsp;'+nav_next+'</div>';
    
        /*$('#image_placeholder').append(navs2);*/
        $('#image_placeholder').prepend(navs);
    } else {
    if (self_eq<=el_first_idx && $('a.l').is(':visible')) { $('a.l').hide() }
    else if (self_eq>=el_first_idx&&$('a.l').is(':hidden')) {$('a.l').show();}
        if (self_eq>=el_last_idx && $('a.r').is(':visible')) { $('a.r').hide() }
    else if (self_eq<=el_last_idx&&$('a.r').is(':hidden')) {$('a.r').show();}
    }
    $('#image_placeholder .img_inner').html(image);
    
    $('#reshebnik_swipebox').swipebox({hideBarsDelay:1});
    $(this).addClass('active');
    
    $('html, body').animate({
    scrollTop: $("#image_placeholder").offset().top
    }, 0);
    $('.abra').text($('.img_pag .active').text());
    //tb_reinit('a.thickbox, area.thickbox, input.thickbox');
});

$(document).on('click','#navs a', function(e) {
    e.preventDefault();

    var el_last_idx = $('.img_pag a').last().index('.img_pag a');
    var el_first_idx = $('.img_pag a').first().index('.img_pag a');
    var active_eq = $('.img_pag').find('.active').index('.img_pag a');
    var direct = $(this).data('nav');
    var direction = "";
    var item = "";
    if (direct == 'right') {
        direction = active_eq+1;
    item = $('.img_pag a').eq(direction);
    // console.log(item);
    }
    if (direct == 'left') {
    direction = active_eq-1;
        item = $('.img_pag a').eq(direction);
    }
    $('.abra').text($('.img_pag .active').text());

    // Remove navs and shadow

    if (direction <= el_first_idx) {
        $('a.l').hide();
    } else if ( direction > el_first_idx &&  $('a.l').is(':hidden') ) {
        $('a.l').show();
    }
    if (direction >= el_last_idx) {
        $('a.r').hide();
    } else if (direction < el_last_idx && $('a.r').is(':hidden')) {
        $('a.r').show();
    }

    item.trigger('click');
});

$(document).on('click','.slide.current', function() {
    $('#swipebox-close').trigger('click');
});

$(".qsearch-input").keyup(function() {
    var number = $(this).val();
    console.log(number);
    $("#zadaniya a").each(function(index, el) {
        console.log($(el).text());
        if($(el).text().indexOf(number) !== -1) {
            $(el).show();
        } else {
            $(el).hide();
        }
    });
});
$(".qsearch-input").keypress(function(event) {
    return event.charCode >= 48 && event.charCode <= 57;
});
    