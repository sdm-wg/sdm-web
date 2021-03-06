---
title:
  ja: "産学連携SDMコンソーシアムがLinked Open DataチャレンジJapan 2020の最優秀賞を受賞"
  en: "Industry-academia collaboration SDM consortium wins the highest award of Linked Open Data Challenge Japan 2020"
slug: "lodc2020-pr"
summary:
  ja: "超臨場SDM方式収録データセットとWeb3Dビューアをオープン化"
  en: "We released super-realistic SDM recording data set and Web3D viewer."
keywords:
  - ""
tags:
  - "press-release"
date: "2021-01-22T19:58:54"
archives:
  - "2021"
  - "2021-01"
  - "2021-01-22"
image: "/images/2021/lodc2020-pr/image6.png"
draft: false
---

<!-- 日本語記事ここから -->
<section lang="ja" v-if="$context.locale === 'ja-jp'">

# 産学連携 SDM コンソーシアムが Linked Open Data チャレンジ Japan 2020 の最優秀賞を受賞

## 〜超臨場 SDM 方式収録データセットと Web3D ビューアをオープン化〜

<figure>
  <div class="grid grid-flow-col grid-cols-2 gap-4">
    <a href="/images/2021/lodc2020-pr/image6.png"><img src="/images/2021/lodc2020-pr/image6.png" /></a>
    <a href="/images/2021/lodc2020-pr/image7.png"><img src="/images/2021/lodc2020-pr/image7.png" /></a>
  </div>
  <figcaption style="text-align: center;">
    <a href="https://sdm-wg.github.io/web360square-vue/" target="_blank" rel="noopener noreferrer">https://sdm-wg.github.io/web360square-vue/</a>
  </figcaption>
</figure>

## 1. 発表者

- 加藤 慎（東京大学大学院情報理工学系研究科 修士課程 2 年生）
- 曽根 卓朗（静岡大学自然科学系教育部 情報科学専攻 博士課程 2 年生／株式会社アプリックス技術顧問）
- 新 麗（株式会社 IIJ イノベーションインスティテュート 技術研究所 研究企画室室長）
- 川村 地平（東京大学大学院情報理工学系研究科 修士課程 1 年生）
- 井口 和真（東京大学工学部電気電子工学科 学部 4 年生）
- 塚田 学（東京大学大学院情報理工学系研究科 准教授）

## 2. 発表のポイント

- 東京大学大学院情報理工学系研究科の研究チームと SDM コンソーシアム（注１）のメンバが設計・開発しコンサート収録データをデータベース化した「超臨場 SDM 方式収録データセット」が、Linked Open Data チャレンジ Japan 2020（注２：以下 LOD チャレンジ） にて 最優秀賞及びオントロジー賞を獲得しました。
- このデータベースを参照して 3 次元映像・音響再現とインタラクティブな視聴体験を提供する Web アプリケーション「Web360square」を開発しました。
- 本収録データセットとアプリケーションは以下の URL にて公開されています。
  - 「超臨場 SDM 方式収録データセット」 : <https://tlab.hongo.wide.ad.jp/sdmo/>
  - 「Web360square」アプリケーション : <https://sdm-wg.github.io/web360square-vue>
  - 「Web360square」ソースコード : <https://github.com/sdm-wg/web360square-vue>

## 3. 発表概要

多人数を集めてのコンサートの開催が困難な社会情勢を背景に、リアルでインタラクティブな視聴体験を提供するサービスへの関心が非常に高まっています。インターネットを前提とした遠隔での視聴体験を提供するためには、収録側では空間に存在する収録対象を 3 次元モデルとして解釈し複数の視聴オブジェクトに分解して伝送します。再生側ではこれらのオブジェクトを用いて視聴空間を再合成するオブジェクト志向の方式が有効であると考えられています。

SDM コンソーシアムでは 2014 年からソフトウェア制御による視聴メディアの収録、編集・加工、再生に適した 3D オブジェクトベースの視聴データを定義しデータベースを構築する研究活動を行ってきました。
この研究活動を背景に東京大学大学院情報理工学系研究科の研究チームと SDM コンソーシアムメンバが「超臨場 SDM 方式収録データセット」及び「Web360square」アプリケーションを設計・開発し LOD チャレンジに応募した結果、最優秀賞及びオントロジー賞を獲得することができました。

「超臨場 SDM 方式収録データセット」は コンサート会場の映像・音響空間とその中の構成要素を相互に関連付けて包括的に記述した Linked Open Data（注３）形式のディジタルメディアです。

このデータセットは慶應義塾大学 コレギウム ムジクム古楽アカデミーによるクラシックコンサート及び六本木ミッドタウン内にある Billboard Live Tokyo で開催された Musilogue Band の Jazz コンサートをそれぞれ多数のマイク及び 360° カメラで収録しデータベース化したものです。

Web360square は「超臨場 SDM 方式データベース」を検索・参照して取得したメディアデータを元に 3 次元映像・音響の再現とインタラクティブな視聴体験を提供する Web アプリケーションです。

このアーキテクチャはデータベースを拡張していくことで様々なイベントの再現や新たな視聴体験の提供が可能となることが特徴です。この点において特定の視聴体験を再現するために専用に設計されていた従来からのアプリケーションと比べて大きく進歩していると言えます。

Web360square は Web アプリケーションとして実装されています。そのためインストール不要で即座に実行が可能であり、 PC 環境だけでなくモバイルデバイス上のでブラウザにおいてもアプリケーションを変更することなく実行できることも特徴です。

Linked Open Data 形式のディジタルメディアを元に 3 次元映像表現とインタラクティブな視聴体験を再生する仕組みを Web アプリケーションで実現したのは世界初の試みです。Web360square はオープンソース形式で公開しています。今後、リアルでインタラクティブな視聴体験を遠隔地で提供するサービス実現の加速に貢献することが期待できます。

## 4. 発表内容

多人数を集めてのコンサートの開催が困難な社会情勢を背景に、リアルでインタラクティブな視聴体験を提供するサービスへの関心が非常に高まっています。遠隔でのライブ中継が一般化し、 VR/MR を応用したより臨場感のあるサービスへの注目も集めています（注４）。

その一方で臨場感のある映像・音響体験を提供するためには取り扱うディジタルメディアの種類や規模を従来より格段に増やす必要があります。そのためコンテンツ制作に関わる難易度が上がると共に制作コストも急激に高くなってきています。収録されたディジタルメディアを元にコンテンツを制作するためには様々な機器やソフトウェアによって編集・加工する工程が不可欠です。高品質で多様なコンテンツを手軽に制作できるようにするためには、多様な機器やソフトウェアがネットワーク経由で自在に連携し、ディジタルメディアを収録、編集・加工、再生する仕組みを構築して一連の処理の自動化を推進することが極めて重要です。

2014 年１月より SDM コンソーシアムでは、東京大学、慶應義塾大学及び多数の民間企業のメンバが集まりインターネット環境を前提とした映像・音響空間を取り扱うオブジェクト志向のディジタルメディアとそれによるビジネス創造を目指した研究開発を進めてきました。

現在、高品質な映像、音声を記録できる映像、音声メディアファイルが標準化され広く使われています。一方、コンテンツ制作を行うためには収録対象、収録環境、収録意図といった多種多様な意味情報（以下メタデータ）をこれらのメディアファイルと関連付けて記録する必要がありますが、まだ一般的に普及した表現形式は存在しません。
SDM コンソーシアムでは映像・音声メディアの収録、編集・加工、再生までの一連のワークフローの自動化を視野に、多様なメディアデータとメタデータを包括的に記述するためのオープンで汎用的なデータ表現形式である SDM オントロジー（注５）の研究と実装を進めてきました。
SDM オントロジーを利用することで、収録したコンサートの場所、日時、名称、演奏者、楽器、曲目、収録時刻、収録時間等々、多種多様なメタデータを音声メディア、映像メディアと関連付け、整理したデータセットとして記録することができるようになります。こうして作られたデータセットは インターネット上に公開された SDM オントロジーの定義情報を参照することでデータベースの厳密な意味情報をソフトウェアが理解することができる Linked Open Data と呼ばれる形式をしています。

その結果、収録環境を熟知した運営主体者以外ではコンテンツとしての利用が困難であった素材メディアを第三者が取り扱うことが可能となります。これはインターネット上の様々な機器やソフトウェアがデータの意味を理解した上でメディアの収録、編集・加工、再生を行うことができるようになることを意味し、高品質で多様なコンテンツを手軽に扱える仕組みが構築されていくことが期待できます。

東京大学大学院情報理工学系研究科の研究チームと SDM コンソーシアムメンバは「超臨場 SDM 方式収録データセット」と「Web360square」アプリケーションを開発し、Linked Open Data チャレンジ Japan 2020 に応募しました。
LOD チャレンジ は Linked Open Data Consortium が Linked Open Data の普及と価値創造を目指して 2011 年から毎年開催しているコンテストです。今年は 2020 年 7 月 1 日から 10 月 18 日の募集期間内に計 67 作品の応募があり、「超臨場 SDM 方式収録データセット」が最優秀賞及びオントロジー賞を獲得しました。

「超臨場 SDM 方式収録データセット」は慶應義塾大学 コレギウム ムジクム古楽アカデミーによるクラシックコンサート及び六本木ミッドタウン内にある Billboard Live Tokyo で開催された Musilogue Band の Jazz コンサートをそれぞれ多数のマイク及び 360° カメラで収録したデータ及びメタデータを SDM オントロジーを利用してデータセット化したものです。

このデータセットは 2016 年に発表した「超臨場 SDM 方式データベース」（注６）を元に、より複雑かつ精密なメディアデータ表現とその収録、編集・加工,再生システムの記述ができるようにデータ構造の改良と拡張を行い再制作したものです。データセットには収録を行ったビデオカメラ、マイクの位置・時間情報、収録対象の楽器、演奏者、曲目、コンサート名称や会場情報等々、多様なメタデータが映像・音声メディアファイルと相互に関連付けられた形で格納されています。このデータセットは映像・音響空間とその中の構成要素をディジタル空間に投影したディジタルメディアと言えます。

Web360square はコンサート空間の 360 度映像の中に音声オブジェクトを配置し、インタラクティブに操作することができる 3D アプリケーションです。音声オブジェクトは収録時のマイク位置に表示されています。タッチパネル操作で音量を変えることができる他、3D 映像の向きに追従して音源の位置が移動するように立体音響再生技術も組み込まれています（図１〜図５）。

Web360square は、インターネット経由で「超臨場 SDM 方式収録データセット」を検索・参照することで必要な映像・音声メディアファイルと様々なメタデータの大部分を取得しています。データセットを拡張したり入れ替えれば再生できるイベントの種類を増やすことができるだけでなく、新たな視聴体験の提供が可能となるアーキテクチャです。特定の視聴体験を再現するために専用に設計されていた従来からのアプリケーションと比べて大きく進歩したアーキテクチャといえます。
Web360square 自体も Web アプリケーションとして記述されてます。そのため PC 環境だけでなくモバイルデバイス上のブラウザにおいても、インストール不要で即座に実行が可能となることも特徴です。

映像・音声空間とその構成要素を包括的に記録したディジタルメディアをインターネットを通じて共有することで、多様で魅力的な視聴体験を提供する仕組みができつつあります。コンサートを遠隔地で高い臨場感で再現するだけでなく、クラウド上に会場と遠隔の双方の情報を集約しインタラクションを行うことで、まるでコンサート会場にいるかのような一体感を提供することも可能になっていくと考えられます。
「超臨場 SDM 方式収録データセット」と「Web360square」は、オープンソースとして公開しており、本研究がリアルでインタラクティブな視聴体験を遠隔地で提供するサービス実現の加速に貢献することを期待しています。

## 5. 用語解説

（注 1）Software Defined Media コンソーシアム： 2014 年より、東京大学大学院情報理工学系研究科、慶應義塾大学大学院メディアデザイン研究科、 ヤマハ株式会社、株式会社アプリックス、株式会社 IIJ イノベーションインスティテュート、日本電信電話株式会社、株式会社 KDDI 研究所、ドルビージャパン株式会社、株式会社アルファコードなどのメンバーが集まり、オブジェクト志向のディジタルメディアと、ネイティブ・ディジタルなインターネット環境が前提の映像・音響空間を用いたビジネス創造を目指し、研究開発を進めてきた。

（注２）LOD チャレンジ Japan 2020
オープンデータに関する新たなデータづくりやアプリケーションに関する作品を募集し、コンテスト形式で評価しあうイベントです。<https://2020.lodc.jp/about.html>

（注３）Linked Open Data
オープンライセンスのもとで公開され，無料での再利用が可能な Linked Data のことで、ティム・バーナーズ＝リー博士が提唱した概念です。ティム・バーナーズ＝リー博士は、「Web の父」とも呼ばれるイギリス人の計算機科学者です。彼は 1989 年にスイスにある CERN（セルン：欧州原子核研究機構）にて Web、URL、HTTP、HTML を考案、設計しました。

（注４）遠隔ライブ VR 配信プラットフォーム LiVRation を開発の 2018 年のプレスリリース <https://sdm.wide.ad.jp/news/news_20160721.html>

（注５）SDM オントロジー：
SDM コンソーシアムが提案する，メディアデータとともに様々な種類・粒度，かつ，膨大な量 のメタデータを階層構造に整理し管理することを可能とするオントロジー．
本発表内容の前身となる研究：
加藤慎, 曽根卓朗, 塚田学, 江崎浩, "再帰的記述を可能とする映像音声メディア・オントロジー", マルチメディア，分散，協調とモバイル（DICOMO2020）シンポジウム, 高知県安芸郡, 2020, （優秀プレゼンテーション賞）.

（注６）超臨場 SDM 方式オーケストラ収録をパブリックデータ化の 2016 年のプレスリリース
<https://sdm.wide.ad.jp/news/news_20160721.html>

## 6. 添付資料

<figure>
  <a href="/images/2021/lodc2020-pr/image2.png"><img src="/images/2021/lodc2020-pr/image2.png" /></a>
  <figcaption style="text-align: center;">図１） Web360squareのイベント選択画面</figcaption>
  <a href="/images/2021/lodc2020-pr/image1.png"><img src="/images/2021/lodc2020-pr/image1.png" /></a>
  <figcaption style="text-align: center;">図２）Web360square のイベント視聴画面。デバイスの向きに追従して360度の映像音声を視聴でき、右のボタンで再生のコントロールができます。</figcaption>
  <a href="/images/2021/lodc2020-pr/image5.png"><img src="/images/2021/lodc2020-pr/image5.png" /></a>
  <figcaption style="text-align: center;">図３）Web360square のイベント視聴画面。音声オブジェクトをタッチすることで、個別に聞きたい音声を選択できます。</figcaption>
  <a href="/images/2021/lodc2020-pr/image3.png"><img src="/images/2021/lodc2020-pr/image3.png" /></a>
  <figcaption style="text-align: center;">図４）Web360square のイベント視聴画面。右上のメニュから視聴位置を変更できます（実験的な機能）。</figcaption>
  <a href="/images/2021/lodc2020-pr/image4.png"><img src="/images/2021/lodc2020-pr/image4.png" /></a>
  <figcaption style="text-align: center;">図５）Web360square のイベント視聴画面。視聴位置変更後の様子。</figcaption>
</figure>

</section>
<!-- 日本語記事ここまで -->

<!-- English article start -->
<section lang="en" v-else>

# We released super-realistic SDM recording data set and Web3D viewer

A research team from the University of Tokyo’s Graduate School of Information Science and Technology and members of the SDM Consortium designed and developed the “Ultra-Realistic SDM Recording Data Set”, a database of concert recording data, and won the Grand Prize and the Ontology Prize at the Linked Open Data Challenge Japan 2020.

Using this database as a reference, we developed a web application “Web3602” that provides 3D video and audio reproduction and an interactive viewing experience.

In addition, we have released the ultra-realistic SDM recording data set and Web360square viewer. For more information, please refer to the SDM Consortium’s press release (in Japanese): <https://sdm.wide.ad.jp/ja/posts/2021/01/22/lodc2020-pr/>




<figure>
  <a href="/images/2021/lodc2020-pr/image2.png"><img src="/images/2021/lodc2020-pr/image2.png" /></a>
  <a href="/images/2021/lodc2020-pr/image1.png"><img src="/images/2021/lodc2020-pr/image1.png" /></a>
  <a href="/images/2021/lodc2020-pr/image5.png"><img src="/images/2021/lodc2020-pr/image5.png" /></a>
  <a href="/images/2021/lodc2020-pr/image3.png"><img src="/images/2021/lodc2020-pr/image3.png" /></a>
  <a href="/images/2021/lodc2020-pr/image4.png"><img src="/images/2021/lodc2020-pr/image4.png" /></a>
</figure>


</section>
<!-- English article end -->
