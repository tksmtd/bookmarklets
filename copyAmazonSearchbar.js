(() => {
  // コピーの元にするtextareaを作成
  const textarea = document.createElement('textarea');

  // Amazonの検索バーの値を取得
  const aSearchBar = document.getElementById('twotabsearchtextbox');
  const aSearchTxt = aSearchBar.value;
  textarea.textContent = aSearchTxt;

  // bodyタグの最後にtextareaを追加
  document.body.appendChild(textarea);

  // textareaの内容をクリップボードにコピー
  textarea.select();
  document.execCommand('copy');

  // 最初に作成したtextareaをbodyから削除
  document.body.removeChild(textarea);

  //console.log(`Copyed this website title "${title}"`);
  console.log(`Copyed Amazon Searchbar Text "${aSearchTxt}"`);
})();