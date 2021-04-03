(function() {

  var url = 'https://api.github.com/search/repositories?q=';
  var msgIndex, key;
  var botui = new BotUI('yuki2434');


        botui.message.add({
          content: 'こんにちは！'
        });

        botui.message.add({
          delay:  1500,
          content: '勇気ちひろ紹介botへようこそ！'
        });
        botui.message.add({
          delay:  3000,
          content: 'ここでは、にじさんじ所属のVtuber、勇気ちひろさんについて紹介するよ！'
        });
        botui.message.bot({
              //埋め込み用のYouTubeコンテンツを表示する
          delay: 3000,
          type: 'embed',
          content: 'https://www.youtube.com/embed/BgQQ4QAzO60'
        }).then(function() {

          //「はい」「いいえ」のボタンを表示
          return botui.action.button({
            delay: 1000,
            action: [{
              text: 'にじさんじって？',
              value: true
            }, {
              text: 'ちーちゃんすき！',
              value: false
            }]
          });
        }).then(function(res) {

          //「続ける」か「終了」するかの条件分岐処理
          res.value ? nizi() : end();
        });


        function nizi() {
          botui.message.add({
            delay: 1500,
            content: 'にじさんじとは、バーチャルライバー(Vtuber)をはじめとしたプロジェクトで、現在約90名のライバーが個性を生かし活動しています！'
          });

          botui.message.add({
            delay: 3000,
            content: '所属ライバー紹介ページは [コチラ](https://nijisanji.ichikara.co.jp/member/)^'
          });
        }

        //プログラムを終了する処理
        function end() {
          botui.message.bot({
            delay:  1500,
            content: 'ちーちゃんすき！'
          })
        }

})();
