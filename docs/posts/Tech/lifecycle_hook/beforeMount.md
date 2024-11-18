# beforeMount

beforeMountは、コンポーネントがマウントされる直前に呼び出されるライフサイクルフックです。
「ん？それじゃあcreatedと何が違うの？」と思ったので、GPTさんに聞いてみました。

## createdとbeforeMountの違い
| 特徴 | created | beforeMount |
|-----------|-----------|-----------|
| 呼び出しタイミング | インスタンス作成後、テンプレートがレンダリングされる前 |仮想DOMが実際のDOMにリンクされる直前|
| DOMアクセス |DOMにアクセスできない|$elや$refsでDOM要素にアクセス可能|
| 主な用途 | データの初期化、非同期処理の開始 |DOMが作成される直前の処理（特殊な場合）|

らしいです。
一番の違いはcreatedDOMにアクセスできないが、beforeMountはDOMにアクセスできる点ですね。

### 実際に検証してみよう
以下のコードでbeforeMountフックの挙動を確認してみました。

```vue
<template>
  <div id="app">
    <h1>Hello, Vue.js!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
    };
  },
  beforeMount() {
    console.log("beforeMountフック: ", this.$el); // DOMのルート要素にアクセス可能
    console.log("beforeMountフックでrefs: ", this.$refs.title); // undefinedになる
  },
};
</script>
```
出力結果
```bash
beforeMountフック:  null
beforeMountフックでrefs:  undefined
```

## 検証結果と考察

beforeMountフックでは、this.$elでDOM要素にアクセスできるはずなのに、nullが返ってきてしまいました。
this.$refs.titleは想定通りundefindになる

## 考えられる原因
実行環境の問題
今回使用している環境は、ブラウザで簡易的にVueを動かしているだけのもの（CDNなど）。この環境ではbeforeMountの挙動が正しく動作しない可能性があると考えられる。

設定ミスやプロジェクト構成の問題
Vue.jsのバージョンやテンプレート構造に依存して、期待通りに動作しないことも考えられます。

## まとめ
今回の検証では、beforeMountフックの正しい挙動を確認できませんでしたが、以下のポイントがわかりました：

beforeMountフックは仮想DOMが実際のDOMにリンクされる直前に呼び出される
this.$refsは初期化される前に参照するとundefinedになる
正しい環境での検証をリベンジします！次回の記事で結果をお届けするので、ぜひお楽しみに。

