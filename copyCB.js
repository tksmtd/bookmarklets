(() => {
  // タイトルを参照
  const title = document.title;

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