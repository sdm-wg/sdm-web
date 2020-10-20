---
title:
  ja: "{{ name | unslug }}"
  en: "{{ name | unslug }}"
slug: "{{ name }}"
summary:
  ja: ""
  en: ""
keywords:
  - ""
tags:
  - ""
date: "{{ date | format 'YYYY-MM-DDTHH:mm:ss' }}"
archives:
  - "{{ date | format 'YYYY' }}"
  - "{{ date | format 'YYYY-MM' }}"
  - "{{ date | format 'YYYY-MM-DD' }}"
image: ""
draft: true
---

<!-- 日本語記事ここから -->
<section lang="ja" v-if="$context.locale === `ja-jp`">

# タイトル

</section>
<!-- 日本語記事ここまで -->

<!-- English article start -->
<section lang="en" v-else>

# Title

</section>
<!-- English article end -->
