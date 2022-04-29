function post (){
  const submit= document.getElementById("submit");  //クリックの対象となる投稿ボタンの要素を取得
  submit.addEventListener("click", (e) => {         //投稿ボタンをクリックしたときにイベント発火するように設定
    e.preventDefault();                             //投稿ボタンのクリックを無効化  //eはイベント発生時の情報を持ったオブジェクト   
    const formData = new FormData(form);            //フォームに入力された値を取得
    const XHR = new XMLHttpRequest();               //非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    XHR.open("POST", "/posts", true);               //openメソッドを用いて、リクエスト内容を指定
    XHR.responseType = "json";                      //サーバーからのレスポンスの形式を指定
    XHR.send(formData);   //フォームに入力された内容をサーバー側に送信
  });
};
 
 window.addEventListener('load', post);  //ページが読み込まれたときに実行される



 //アクションを記入したら、console.logを用いて、投稿ボタンがクリックされたときに正常にイベント発火しているかを確認する
 //console.log("イベント発火");
 //正常にイベント発火していることが確認できたら、console.log("イベント発火");は削除しておきましょう。

