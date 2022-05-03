const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit= document.getElementById("submit");  //クリックの対象となる投稿ボタンの要素を取得
  submit.addEventListener("click", (e) => {         //投稿ボタンをクリックしたときにイベント発火するように設定
    e.preventDefault();                             //投稿ボタンのクリックを無効化  //eはイベント発生時の情報を持ったオブジェクト   
    const formData = new FormData(form);            //フォームに入力された値を取得
    const XHR = new XMLHttpRequest();               //非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    XHR.open("POST", "/posts", true);               //openメソッドを用いて、リクエスト内容を指定
    XHR.responseType = "json";                      //サーバーからのレスポンスの形式を指定
    XHR.send(formData);                             //フォームに入力された内容をサーバー側に送信
    XHR.onload = () => {                            //レスポンスの受信に成功したときの処理
      if (XHR.status != 200) {                           //
        alert(`Error ${XHR.status}: ${XHR.statusText}`); //200以外のHTTPステータスコードが返された場合はエラーメッセージが表示される
        return null;                                     //return null;によってJavaScriptの処理から抜け出す//エラーが出た場合に、30行目以降に記述されている処理を行わないようにすることが目的
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content"); //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      list.insertAdjacentHTML("afterend", buildHTML(XHR));      
      formText.value = "";                           //フォームの値をリセット
    };
  });
};
 
 window.addEventListener('load', post);  //ページが読み込まれたときに実行される



 //アクションを記入したら、console.logを用いて、投稿ボタンがクリックされたときに正常にイベント発火しているかを確認する
 //console.log("イベント発火");
 //正常にイベント発火していることが確認できたら、console.log("イベント発火");は削除する。

