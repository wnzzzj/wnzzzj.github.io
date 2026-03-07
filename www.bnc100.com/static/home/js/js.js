// 入场动画函数
function animateDIY() {
  var hh = $(window).height();
  var a = $(this).scrollTop();
  //滚动到b-a<hh/1.1 && a-b<hh这个范围展示效果
  $(
    '.teaser, .lefter, .righter, .downer, .lter, .rter, .riser, .riser2, .emerge'
  ).each(function () {
    var b = $(this).offset().top;
    if (b - a < hh / 1.05 && a - b < hh) {
      $(this).addClass('is-visible');
    }
  });
}

// 页头吸顶 样式切换
function pageReady() {
  if ($(window).width() > 900) {
    if ($(document).scrollTop() == 0) {
      $('.md-head').removeClass('ceiling');
    } else {
      $('.md-head').addClass('ceiling');
    }
  }
}

// 顶部显示
function goTop() {
  var go = true;
  var t = 200;
  $(window).scroll(function () {
    var a = $(this).scrollTop();
    if (a >= t && go) {
      go = false;
      $('#goTop').addClass('show');
    }
    if (a < t && !go) {
      go = true;
      $('#goTop').removeClass('show');
    }
  });
}

// 移动端侧边栏导航添加加号
function hasNav() {
  $('.md-mob_sideNav .ul1 .li1').each(function (i, e) {
    if ($(e).children('.ul2').length > 0) {
      $(e).addClass('has_nav');
    }
  });
}

// 字符串拆分
function dataText() {
  $('[data-text]').each(function () {
    var Ostr = $(this).attr('data-text');
    var Arr = Ostr.split('');
    var Ohtml = '';
    $(this).html('');
    for (var i = 0; i < Arr.length; i++) {
      $(this).append($('<span>' + Arr[i] + '</span>'));
    }
  });
}

$(document).ready(function () {
  animateDIY();
  pageReady();
  goTop();
  hasNav();

  $(window).scroll(function (e) {
    animateDIY();
    goTop();
    pageReady();
  });
});

$(document).ready(function () {
  //让IE9支持placeholder
  $('input, textarea').placeholder();
});

$(function () {
  // 显示 移动端侧边导航
  $('.md-head   .hb_ri .more').click(function () {
    $('.md-head ').toggleClass('m_show');
  });

  $('.md-head .m_off').click(function () {
    $('.md-head  ').removeClass('m_show');
  });

  // 隐藏 移动端侧边导航
  $('.md-head .mob_mask').click(function () {
    $('.md-head  ').removeClass('m_show');
  });

  $('.md-head .lang').mouseenter(function () {
    $('.md-search_form ').removeClass('show');
  });

  // 移动端侧边导航 点击显示 二级导航
  $('.md-mob_sideNav  .ul1 .li1 ').click(function () {
    if ($(this).hasClass('show')) {
      $(this).removeClass('show');

      $(this).find('.ul2').slideUp('300');
    } else {
      $(this).addClass('show').siblings().removeClass('show');
      $(this).siblings().find('.ul2').slideUp('300');
      $(this).find('.ul2').slideDown('300');
    }
  });

  $('.md-mob_sideNav  .hmob_bot .btn ').click(function () {
    $('.hmob_lang').addClass('show');
  });

  $('.hmob_lang    .hmob_back ').click(function () {
    $('.hmob_lang').removeClass('show');
  });

  $('.md-head  .search').click(function () {
    $('.md-search_form ').addClass('show');
  });

  $('.md-search_form ').mouseleave(function () {
    $('.md-search_form ').removeClass('show');
  });

  $('.md-search_form  .mask').click(function () {
    $('.md-search_form ').removeClass('show');
  });

  $('.md-head  .search').click(function () {
    $('.md-search_form ').addClass('show');
  });

  $('.md-search_form  .mask').click(function () {
    $('.md-search_form ').removeClass('show');
  });

  $('#goTop').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  // $('.md-head .head_box .li1').mouseenter(function () {
  //   $(this).find('.ul2').stop().slideDown(400);
  // });
  // $('.md-head .head_box .li1').mouseleave(function () {
  //   $(this).find('.ul2').stop().slideUp(400);
  // });

  $('.foot-2 .f2_ti').click(function () {
    var ii = $('.foot-2 .f2_ti').index($(this));
    $(this).addClass('on').siblings().removeClass('on');
    $('.foot-2 .f2_bi').eq(ii).addClass('show').siblings().removeClass('show');
  });
});

function lazy() {
  var w = $(window);
  $('[data-img]').each(function () {
    var a = $(this);
    if (!a.attr('done') && w.scrollTop() + w.height() > a.offset().top) {
      a.attr('done', 'done');
      var src = a.attr('data-img');
      if (a[0].nodeName == 'IMG') {
        a.attr('src', src);
      } else {
        a.css('backgroundImage', 'url(' + src + ')');
      }
    }
  });
}
$(window).scroll(lazy);
lazy();
