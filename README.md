__This is meltomir's portfolio site.__



# for ひーちゃん
## Get Started

#### 初めての場合はディレクトリを作成
```bash
mkdir meltomir
```

#### 作業したいディレクトリに移動
```bash
cd meltomir
```

#### このリポジトリをクローン
```bash
git clone https://github.com/Tsukichan555/meltomir.git
```

#### アプリのディレクトリに移動
```bash
cd meltomir
```

## ローカルサーバーを立てたい場合
以下の操作は、自分のPCでローカルサーバーを立ててサイトの見た目を確認したい場合にのみ行ってください.

Node.jsがインストールされていない場合は、まずNode.jsをインストールする
#### Node.jsのインストール
Windowsの場合
1. [Node.jsの公式サイト](https://nodejs.org/)にアクセスし、LTSバージョンをダウンロード
2. ダウンロードしたインストーラーを実行し、画面の指示に従ってインストール


#### プロジェクトの依存関係をインストール
```bash
npm install
```

#### ローカルサーバーの起動
依存関係がインストールされたら、以下のコマンドでローカルサーバーを起動
```bash
npm run dev
```
---
## ひーちゃんにまずやってほしいこと
外部サイトリンクの管理

__方法__： `src/const.js` を編集してください．
- このJavaScriptのファイルはJSON形式でデータを出力します．
- サイト内の他のページがこのデータを参照しています．
- 各項目の説明
    - `title` : サイトのメタデータなどに使用されます．
    - `desc` : 〃
    - `url`: 〃
    - `lang`: 〃
    - `link`: 外部サイトのリンクの一覧のページが参照しています．
        - `social`, `shop`, `writing`より下の階層は __自由に触ってもらって大丈夫__ です．以下の形式で書き込んでください．
        ```json
        <サービス名>: "<URL>",
        ```

## ひーちゃんに今後やってほしいこと
1. 自己紹介(未実装なので今後つたえます)
2. 作品を1個ずつ投稿

__方法__ : `src/contents/artworks/`ディレクトリにMarkDownファイルを作る

__メタデータについて__
- `work1.md` などを参考にしたりコピーしたりしてやってね
- `---`で囲われた部分は __メタデータ__ です．(`*`:必須)
    - `title`: 作品名を入力 __*__
    - `date`: 作品発表日時を入力 __*__
    - `thumbnail`: サムネイルの画像のパス __*__ 
        - パスについては後述
    - `tags`: 付けたいタグがあったら配列形式で入力．
        - 自分でタグ名の一覧を考えとくといいかも
        - 油絵の投稿には必ず`"oilpainting"`を付ける、など
    - `images`: 他にも掲載したい写真があれば配列形式で画像のパスを入力
- 画像のパスについて
    - 画像ファイルは`src/public/images/`に入れる
    - 特にサムネイルは`src/public/images/thumbnails/`に入れる
    - `images/`の中にさらにフォルダを作成してもOK
    - 投稿ごとにフォルダを作成するのもおススメ
        - 例: `src/public/images/artworks/work3/pic1.png`
        - 英数字のみの使用を推奨

__MarkDownについて__
- 以下のサイトなどを参考にして、作品を紹介する文章を作成してね
    - [【チートシート】Markdown記法一覧](https://zenn.dev/yadonn/articles/94f12b3c9dcbc6)
    - [Markdown Cheat Sheet](markdownguide.org/cheat-sheet)

```markdown
---
title: 'Horizontal Mirror'
date: '2022-01-01'
thumbnail: '/images/thumbnails/horizontalMirror.png'
tags: ["3DCG", "Unity", "Blender", "game"]
images: ['images/pic1.jpg','iamges/pic2.png']
---

# ゲーム概要
ここには __”現実世界”__ と __”死後の世界”__ があり、水面を介して行き来することができる。
世界の真相に足を踏み入れることになるーーーー

|  |  |
| :---: | :---: |
| プラットフォーム | Steam, iOS, Android |
| プレイ人数       | 1人                  |
| 開発者           | Studio ZeF          |
| 公式SNS          | [公式X(旧Twitter)](https://twitter.com/ZeF_games)      |
| 公式サイト       | [Unityroom](https://unityroom.com/users/zef) |

# 外部リンク
[Horizontal Mirror](https://unityroom.com/games/horizontalmirror)
```
