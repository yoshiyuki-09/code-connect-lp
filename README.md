# コードコネクト LP 運用メモ

## URLの差し替え方法

`js/main.js` の先頭にある以下の2行を修正して `firebase deploy` する。

```js
const LINE_URL = "ここにLINE公式アカウントのURL";
const FORM_URL = "ここに体験会申込フォームのURL";
```

この2行を変更するだけで、ページ上のすべてのCTAボタンに反映される。

---

## セクション6（成果証明）の差し替え方法

生徒の成果物が完成したら以下の手順で更新する。

1. `public/images/achievement/` フォルダに成果物のスクリーンショット画像を追加する
2. `public/index.html` の `id="section-proof"` のセクションを以下の内容に差し替える
   - 生徒の学年・受講期間・使用技術
   - 成果物のスクリーンショット（`<img src="images/achievement/xxx.jpg">`）
   - 実際に動作するWebアプリのURL

---

## デプロイ方法

```bash
firebase deploy
```

## ローカル確認方法

```bash
firebase serve
```

---

## ファイル構成

```
code-connect-LP/
├── public/
│   ├── index.html          # メインのLP
│   ├── css/
│   │   ├── reset.css       # CSSリセット
│   │   ├── variables.css   # CSS変数
│   │   ├── base.css        # 基本スタイル
│   │   ├── components.css  # ボタン・コンポーネント
│   │   └── sections.css    # セクション別スタイル
│   ├── js/
│   │   ├── main.js         # URLの動的セット・FAQアコーディオン
│   │   ├── scroll.js       # フェードイン・スムーズスクロール
│   │   └── floating-cta.js # フローティングCTAボタン
│   └── images/
│       └── achievement/    # 成果物の画像（公開後に追加）
├── firebase.json
├── .firebaserc
└── README.md
```
