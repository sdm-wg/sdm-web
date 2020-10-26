---
title:
  ja: "はじめに"
  en: "Introduction"
slug: "introduction"
summary:
  ja: ""
  en: ""
keywords:
  - ""
tags:
  - "event"
  - "press-release"
  - "award"
date: "2020-10-26T12:43:50"
archives:
  - "2020"
  - "2020-10"
  - "2020-10-26"
image: "https://raw.githubusercontent.com/gridsome/gridsome/master/.github/assets/logo.png"
draft: false
---

<!-- 日本語記事ここから -->
<section lang="ja" v-if="$context.locale === 'ja-jp'">

# はじめに

SDM コンソーシアムの Web ページサンプル

## コンテンツ編集について

### Post

- `content/posts`下にマークダウンファイル`.md`ファイルを作成することで公開されます
  - `content/posts`下であれば、どこのディレクトリに配置してもコンパイルされるのでうまく整理しましょう
  - 記事作成のためのコマンド`yarn new`を作ったので、これを使いましょう

#### Post チュートリアル

- ここでは`content/posts/test/test.md`を作成してみます

```
yarn new content/posts/test/test.md
```

- 以下のような記事が作成されます

  ```md
  ---
  title:
    ja: "Test"
    en: "Test"
  slug: "test"
  summary:
    ja: ""
    en: ""
  keywords:
    - ""
  tags:
    - ""
  date: "2020-10-26T13:18:11"
  archives:
    - "2020"
    - "2020-10"
    - "2020-10-26"
  image: ""
  draft: true
  ---

  <!-- 日本語記事ここから -->
  <section lang="ja" v-if="$context.locale === 'ja-jp'">

  # Test

  </section>
  <!-- 日本語記事ここまで -->

  <!-- English article start -->
  <section lang="en" v-else>

  # Test

  </section>
  <!-- English article end -->
  ```

- フロントマターについて

  | Front Matter | Description                                                                                               |
  | ------------ | --------------------------------------------------------------------------------------------------------- |
  | title        | 記事のタイトル（i18n 対応）                                                                               |
  | slug         | 記事の URL                                                                                                |
  | summary      | 記事の要約（i18n 対応）。トップページの記事リストの要約欄に表示されるのでなるべく書きましょう             |
  | keywords     | 記事のキーワード。meta タグに埋め込む                                                                     |
  | tags         | 記事のタグ。"event", "press-release", "award"をタグ付けするとトップページの適切なセクションに配置されます |
  | date         | 記事の作成日時                                                                                            |
  | archives     | 記事アーカイブ用タグ                                                                                      |
  | image        | 記事のカバーイメージ。設定すると記事リストや記事ページに表示されます                                      |
  | draft        | 下書きかどうか。デフォルトは`true`になっているので**公開する際は忘れずに`false`に変更すること！**         |

- 記事本体について
  - 日本語記事セクションと英語記事セクションに分かれているので、どちらも忘れずに書きましょう

---

### Notice

- `content/notices`下に Yaml ファイル`.yml`, `.yaml`ファイルを作成することで公開されます
  - `content/notices`下であれば、どこのディレクトリに配置してもコンパイルされるのでうまく整理しましょう
  - テンプレートファイル`content/notices/template.yml`を参考に作成しましょう

#### Notice チュートリアル

- ここでは`content/notices/test/test.yml`を作成してみます

- `content/notices/test/test.yml`を作成し、テンプレートファイル`content/notices/template.yml`から項目をコピーしてきます

```yml
- date: "2020-01-01"
  content:
    ja: お知らせ
    en: Notice
```

| Key     | Description                 |
| ------- | --------------------------- |
| date    | お知らせ日時                |
| content | お知らせの内容（i18n 対応） |

- サーバ起動時のみデータが収集されるので、**ホットリロードが効きません**
  - 開発サーバ実行中に編集した場合は開発サーバを再起動しましょう
- Notice はトップページ Notices セクションに日時が新しい順に配置され、現在日時より古い最大 3 つまでが表示されます
  - 過去の Notice を削除する必要はありません

---

### Media

- `content/media`下に Yaml ファイル`.yml`, `.yaml`ファイルを作成することで公開されます
  - `content/media`下であれば、どこのディレクトリに配置してもコンパイルされるのでうまく整理しましょう
  - テンプレートファイル`content/media/template.yml`を参考に作成しましょう

#### Media チュートリアル

- ここでは`content/media/test/test.yml`を作成してみます

- `content/media/test/test.yml`を作成し、テンプレートファイル`content/media/template.yml`から項目をコピーしてきます

```yml
- date: "2020-01-01"
  title:
    ja: タイトル
    en: Title
  type: TV, Newspaper, Web Article, ...
  url: https://example.com
```

| Key   | Description                         |
| ----- | ----------------------------------- |
| date  | メディア情報の日時                  |
| title | メディア情報のタイトル（i18n 対応） |
| type  | TV, Newspaper, Web Article など     |
| url   | メディア情報の URL（あれば）        |

- サーバ起動時のみデータが収集されるので、**ホットリロードが効きません**
  - 開発サーバ実行中に編集した場合は開発サーバを再起動しましょう
- Media はトップページ Media セクションに日時が新しい順に配置され、最大 20 個までが表示されます

---

### Member

- `content/members`下に Yaml ファイル`.yml`, `.yaml`ファイルを作成することで公開されます
  - `content/members`下であれば、どこのディレクトリに配置してもコンパイルされますが、**表示順のコントロールが難しくなるので 1 つファイルに記述するとよいでしょう**
  - テンプレートファイル`content/members/template.yml`を参考に作成しましょう

#### Member チュートリアル

- ここでは`content/members/test/test.yml`を作成してみます

- `content/members/test/test.yml`を作成し、テンプレートファイル`content/media/template.yml`から項目をコピーしてきます

```yml
- name:
    ja: 名前
    en: Name
  roll:
    ja: 役職
    en: Roll
  home: https://example.com
  facebook: https://www.facebook.com/
```

| Key      | Description       |
| -------- | ----------------- |
| name     | 名前（i18n 対応） |
| roll     | 役職（i18n 対応） |
| home     | ホームページ URL  |
| facebook | Facebook URL      |

- サーバ起動時のみデータが収集されるので、**ホットリロードが効きません**
  - 開発サーバ実行中に編集した場合は開発サーバを再起動しましょう
- Member はトップページ Members セクションにファイルの記述通り、上から順に表示されます
  - 複数のファイルに分けて記述した場合、ファイル同士の読み取り順によって表示順が変動するので要注意

---

### Publication

- `content/publications/en`, `content/publications/ja`下に BibTex ファイル`.bib`ファイルを作成することで公開されます
  - `content/publications/en`, `content/publications/ja`下であれば、どこのディレクトリに配置してもコンパイルされるのでうまく整理しましょう
  - テンプレートファイル`content/publications/en/template`, `content/publications/ja/template`を参考に作成しましょう
    - BibTex のエントリー全体コメントアウトがうまくパースできなかったのでテンプレートファイルに拡張子がついていませんが、**作成するファイルには必ず拡張子`.bib`をつけてください**

#### Publication チュートリアル

- ここでは`content/publications/ja/test/test.bib`を作成してみます

- `content/publications/ja/test/test.bib`を作成し、テンプレートファイル`content/publications/ja/template`から項目をコピーしてきます

```bib
@article{test,
  author  = {姓 名},
  title   = {題名},
  journal = {ジャーナル},
  year    = {2020},
  month   = {1},
  % date    = (2020-01-01),
  number  = {2},
  volume  = {3},
  pages   = {456-789},
  note    = {備考},

  % I18N (CUSTOM FIELD)
  author_en  = {Author Name},
  title_en   = {The title of the work},
  journal_en = {The name of the journal},
  % ...

  % WEB, FILE, DOI
  url     = {https://website-or-pdf-url},
  doi     = {doi number},

  % CUSTOM FIELD
  youtube = {https://youtu.be/},
  github  = {https://github.com/sdm-wg/}
}

```

| Field             | Description                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **BASE**          |                                                                                                                        |
| title             | タイトル                                                                                                               |
| author            | 著者名                                                                                                                 |
| ...               | その他の論文情報（BibTex の記法に従います）                                                                            |
| **I18N**          |                                                                                                                        |
| {field}\_en       | BibTex のフィールドを i18n 対応させます                                                                                |
| **WEB/FILE, DOI** |                                                                                                                        |
| url, doi          | 論文の Web ページ URL や PDF の URL、DOI。もともと BibTex のフィールドとして定義されていますが特別扱いしてパースします |
| **CUSTOM FIELD**  |                                                                                                                        |
| youtube           | YouTube の URL（カスタムフィールド）                                                                                   |
| github            | Github の URL（カスタムフィールド）                                                                                    |

- サーバ起動時のみデータが収集されるので、**ホットリロードが効きません**
  - 開発サーバ実行中に編集した場合は開発サーバを再起動しましょう
- Publication はトップページ Publications セクションに日時が新しい順に配置されます

---

## セットアップ

### 依存パッケージインストール

```
yarn install
```

### ビルド

```
yarn build
```

- **記事の下書きはコンパイルされません**

### ホットリロードサーバ

```
yarn develop
```

- **記事の下書きもコンパイルされます**

### ビルドプレビューサーバ

```
yarn preview
```

- **記事の下書きはコンパイルされません**

### GraphQL playground

```
yarn explore
```

### Lint

```
yarn lint
```

### 記事作成

```
yarn new content/posts/path/to/post.md
```

</section>
<!-- 日本語記事ここまで -->

<!-- English article start -->
<section lang="en" v-else>

# Introduction

This repo is a web page sample of the SDM consortium.

## Project setup

### Install all dependencies for this project

```
yarn install
```

### Compiles and minifies for production (without drafts)

```
yarn build
```

### Compiles and hot-reloads for development (with drafts)

```
yarn develop
```

### Compiles and hot-reloads for development (without drafts)

```
yarn preview
```

### Start GraphQL playground

```
yarn explore
```

### Lints and fixes files

```
yarn lint
```

### Create a new post

```
yarn new content/posts/path/to/post.md
```

</section>
<!-- English article end -->
