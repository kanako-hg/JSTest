/* eslint-disable no-unused-vars */
/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //ここに記述
  const searchElements = document.getElementsByTagName(elementId);

  if (searchElements.length !== 0) {
    searchElements[0].textContent = text;
  } else {
    if (elementId) {
      const newItem = document.createElement("div");
      newItem.setAttribute("id", elementId);
      document.body.appendChild(newItem);
      newItem.textContent = text;
    } else {
      const newItem = document.createElement("div");
      document.body.appendChild(newItem);
      newItem.textContent = text;
    }
  }
};
// console.log(document);
// changeElementText("", "OK");
