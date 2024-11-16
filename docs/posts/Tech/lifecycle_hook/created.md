
# create

createdフックは、Vueインスタンスの初期化後に実行されるライフサイクルフックです。このフックでは、dataプロパティにアクセスできますが、DOMにはまだアクセスできません。<br />
この記事では、createdフックの使い方を確認し、業務でよく使うケースも紹介します。

### createdフックでdataにアクセス
まずは、createdフックでdataプロパティにアクセスできることを確認します。以下のコードでは、createdフック内でcolorプロパティを更新し、コンソールに出力します。
```vue
<template>
  <div id="app">
    <h1 ref="title">Hello Vue!</h1>
    <button @click="changeColor">Change Color</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'blue',
    };
  },
  methods: {
    // this.$el を使ってルート要素にアクセス
    changeColor() {
      // ルート要素の背景色を変更
      this.$el.style.backgroundColor = 'lightyellow';

      // $refs を使って特定の要素にアクセス
      this.$refs.title.style.color = this.color;

      // 色をトグル
      this.color = this.color === 'blue' ? 'green' : 'blue';
    },
  },
  created () {
    this.color = 'red'
    console.log(this.color)
  }
};
</script>
```
出力結果
```bash
red
```
createdフック内でcolorの値をredに変更し、コンソールに出力できました。期待どおりですね！

### createdフックでDOMにアクセスできないことを確認
次に、createdフックではDOMにアクセスできないことを確認します。以下のコードでは、createdフック内で$refs.titleを使用してDOM要素にアクセスしようとしています。

```vue
<template>
  <div id="app">
    <h1 ref="title">Hello Vue!</h1>
    <button>Change Color</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 'blue',
    };
  },
  methods: {
  },
  created () {
    console.log(this.$refs.title.style.color)
  }
}
</script>
```
出力結果
```bash
TypeError: Cannot read properties of undefined (reading 'style')
```
$refs.titleがundefinedになり、エラーが発生しました。これは、createdフックの段階ではまだDOMが生成されていないためです。

### 業務でのcreatedフックの活用例
業務でよく使うパターンとして、propsを受け取り、その値をもとにdataを初期化するケースがあります。以下の例では、propsで受け取ったstatusを判定し、is_displayを更新しています。
```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Number,
      required: true,
    },
    status: {
      type: Integer,
      required: true,
    }
  },
  data() {
    return {
      is_display: 'false',
    };
  },
  created() {
    // createdフック内でpropsを参照
    if (status) {
      this.is_display = true
    }
  },
};
</script>
```
このように、propsを使った条件分岐はcreatedフックでよく利用される実装の1つです。

### まとめ
createdフックは、Vueインスタンスの初期化後に実行され、以下の特徴があります：

dataやpropsにアクセス可能。
DOMにはアクセスできない（エラーになります）。
業務では、propsを元にdataを初期化するのに便利。
この記事でcreatedフックの基本的な使い方と注意点を理解していただけたら幸いです。ぜひ、あなたのプロジェクトでもcreatedフックを活用してみてください！


