$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時(クリックイベント)
  $(".toggle_btn").on("click", function () {

    // headerにopenクラスが付いてる場合
    if ($("#header").hasClass("open")) {
      // headerのopenクラス部分を削除する。⇒　※メニューが非表示になる
      $("#header").removeClass("open");

      // または
    } else {
      // headerのopenクラス部分を追加する。⇒　※openが付いたcssが適応される（メニュー表示される）
      $("#header").addClass("open");
    }
  });

  // 開いてるとき（メニュー画面・リンク）押したの時の　クリックイベント
  $(".mask , #navi, .menu a , .sns a").on("click", function () {

    // headerのopenクラス部分を削除する。⇒　※メニューが非表示になる
    $("#header").removeClass("open");
  });


  if (window.matchMedia('(min-width: 701px)').matches) {
    /*--------------------------------------------
    画面内に入ったら　フェードインさせる
    -------------------------------------------- */
    $(window).scroll(function () {
      // クラスに対して順に処理を行う
      $('.fadein-menu').each(function () {

        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + $(this).height() / 2) {
          $(this).addClass('active');
          // 表示したい要素が画面下にきてから 通過したタイミングで要素を表示

        }
      });
    });

  }


  $(".parent").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 700, // ブレイクポイントを指定
      settings: {
        slidesToShow: 3,
      },
    },
    ]
  });

  if (window.matchMedia('(max-width: 700px)').matches) {

    $('.fadein-menu').css('opacity', '1');

    /*=================================================
    menu スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/

    /* ウィンドウサイズ428以下の処理を記述 */
    $(".grid-parent").slick({
      arrows: false,
      // arrows: false：矢印ナビゲーションを非表示にします。
      // (dots: true,)
      // スライドショーにドットナビゲーション（現在のスライドを示すドット）が表示されます。
      centerMode: true,
      // centerMode: true：現在のスライドを中央に配置します。
      centerPadding: "20px",
      // centerPadding: "3px"：中央に配置されたスライドの左右の余白を指定します。
      slidesToShow: 3,
      // slidesToShow: 5：表示するスライドの数を指定します（1度に表示されるスライドの数）。
      autoplay: true,
      // autoplay: true：自動再生を有効にします。
      autoplaySpeed: 3000,
      // autoplaySpeed: 3000：自動再生の速度を指定します（ミリ秒単位）。
    })

  }
});

// 下にスクロール
$(function () {
  // $(window).on( function () {
    $('bt').on('click', function () {
      pagetop.click(function () {
        // イベントが親要素へ伝播しないための記述
        // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
        return false;
      });
    });

  });
