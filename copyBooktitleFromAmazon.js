(() => {
  // タイトルを参照
  //const title = document.title;
  
  const title = document.getElementById('productTitle').textContent;

  // TODO: 記号を削除する処理を追加したい

  // コピーの元にするtextareaを作成
  const textarea = document.createElement('textarea');
  textarea.textContent = title;

  // bodyタグの最後にtextareaを追加
  document.body.appendChild(textarea);

  // textareaの内容をクリップボードにコピー
  textarea.select();
  document.execCommand('copy');

  // 最初に作成したtextareaをbodyから削除
  document.body.removeChild(textarea);

  console.log(`Copyed this website title "${title}"`);
})();