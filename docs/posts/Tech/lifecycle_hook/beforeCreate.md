
## beforeCreate

beforeCreateフックははインスタンスが生成され始めた直後に呼び出される。
つまりインスタンスが初期化される前に呼び出されるのでdataオプションに記述されてる
データの更新や参照はできない。
100分は一件にしかずということで実際にやってみた

以下のコードは単純でbeforeCreateでdataのmessageを呼び出している
↑のbeforeCreateフックの説明が正しけばdataオプションはまだ初期化されてないので
undefindが出力されるはず

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'test'
    };
  },
  // インスタンスが初期化する前に呼び出される
  beforeCreate() {    
    console.log(this.message)
  }
};
</script>
```
出力結果
```bash
undefined
```
想像の通りundefindが出力された

で、次は更新してみよう。<br />
beforeCreate内でmessageの値を'Test Message'に更新して出力してみる。
データ初期化前にデータを更新しようとしたら恐らくReferenceError、TypeError
等になるはず
実際に試し目見る

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'test'
    };
  },
  // インスタンスが初期化する前に呼び出される
  beforeCreate() {
    this.message = 'Test Message'
    console.log(this.message)
    
  }
};
</script>
```
出力結果
```bash
Test Message
```
ファ！？！？！？！？更新されてる！？！？

この現象について調べてみたけどあまりピンとくる記事がなかったのでChatGPTさんに質問した<br />
↓GPTさんによる考察

```
beforeCreate フック内で this.message の更新が実行されているように見えますが
それは Vue.js の内部的な仕組みやブラウザの実行環境により、意図せず動作している可能性があります。
これは、Vue の一部のバージョンや特定のブラウザ環境では発生する場合がありますが
Vue の仕様上は beforeCreate フック内で data プロパティに依存しないのが原則です。
```
とのことです。<br />
まあそもそもインスタンス初期化が完了する前にbeforeCreateでdataオプションの値を更新
することなんて滅多にないと思うのでdataオプションの更新は大人しくcreated以降のフックで
行うようにしましょう。


