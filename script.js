const swiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

  });


    //ドロワー
$('.dorawer-icon').on('click',function(e){
  e.preventDefault();//aタグなどをクリックした時の標準の動きを無効化するためのもの。クリックイベントとセット

  $('.dorawer-icon').toggleClass('is-active');
  $('.dorawer-content').toggleClass('is-active');
  $('.dorawer-background').toggleClass('is-active');

  return false;//aタグなどをクリックした時の標準の動きを無効化するためのもの。クリックイベントとセット
});

//topへ戻る
$(window).on("scroll",function(){
  if($(this).scrollTop() > 100) {
    $(".to-top").fadeIn();
  }else{
    $(".to-top").fadeOut();
  }
});

//topへ戻るのスピード
$(".to-top").on("click",function(){
  $("body,html").animate({
    scrollTop: 0
  },500);
  return false;
});


//スムーススクロール
// #から始まるURLがクリックされた時
$('a[href^="#"]').not('.inline').click(function(){
  // スムーススクロールの処理を書く
  let header = $('header').innerHeight();//ヘッダーの高さを取得
  let speed = 300;// 移動速度を指定（ミリ秒）
  let id = $(this).attr("href");// hrefで指定されたidを取得
  let target = $('#' == id ? "html" : id);// idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let position = $(target).offset().top - header;// ページのトップを基準にターゲットの位置を取得、かぶるのでヘッダーの高さ分引く
  $("html,body").animate({// ターゲットの位置までspeedの速度で移動
    scrollTop: position
  },
  speed
  );
  return false;
});

$(window).scroll(function (){
  $(".js-marker").each(function(){
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('inview'); //クラス「active」を与える
    }
  });
});

//wow.js
new WOW().init()

//modal
//$(function(){
  //var img = $(test()).children('img');
  //var src = $(img).getAttribute('src')
  $('.work-item-link').click(function(){
    var img = $(this).children('img');
    var src = $(img).attr('src');
    var caption = $(this).find(".caption");
    var subcaption = $(this).find(".subcaption");
    var title = $(caption).text();
    var text = $(subcaption).text();
    //alert(title);
    //alert(text);
    $(".modal-picture").attr('src',src);
    $(".modal-title").text(title);
    $(".modal-text").text(text);
  });
//});
$(".inline").modaal({
  content_source: '#inline'
});


//topbg-sp消す
$(window).on("scroll",function(){
  if($(this).scrollTop() > 100) {
    $(".top-title-bg-sp").fadeOut();
  }else{
    $(".top-title-bg-sp").fadeIn();
  }
});



//googlefome
let $form = $( '#js-form' )
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  //form入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change',function() {//#js-formのinputと#js-formのtextareaが変更されたら
    if(//全て入力されていたら
        $( '#js-form input[type="text"]' ).val() !== "" &&//#js-formのinput[type="text"]のvalが空(””)ではない(!==)かつ(&&)
        $( '#js-form input[type="email"]' ).val() !== "" &&//#js-formのinput[type="email"]のvalが空(””)ではない(!==)かつ(&&)
        $( '#js-form textarea' ).val() !== ""
    ) {
        //全て入力されたとき
        $submit.prop( 'disabled',false )//disabled(押せない)を外す
        $submit.addClass( '-active' )//$submitに-activeクラスをつける
    } else {
        //入力されていないとき
        $submit.prop( 'disabled',true )//disabled(押せない)をつける
        $submit.removeClass( '-active' )//$submitの-activeクラスをはずす
    }
  })




