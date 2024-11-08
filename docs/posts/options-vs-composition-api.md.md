# Vue.jsにおけるOptions APIとComposition APIの違い

Vue 3の登場により、Vueには新しい記述方法であるComposition APIが追加されました。これまで使われてきたOptions APIと比較して、どのように違うのかを解説します。

## Options APIの特徴

- **dataオプション内でデータを定義**  
  データは`data`オプションでまとめて管理し、初期値を設定します。
  
- **オプションごとに役割が分かれる**  
  `methods`、`computed`、`watch`、`created`、`mounted`などのオプションを用意し、それぞれの役割に応じた処理を記述します。各オプションで`data`で定義した変数を参照・更新できます。
  
- **コードが機能ごとに分離される**  
  データ、メソッド、ライフサイクルフック（`created`、`mounted`など）がオブジェクト形式で分かれて記述されるため、ある程度の規則性があり、Vueに慣れていれば読みやすい構成になっています。

### サンプルコード (Options API)

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue 2 Options API Counter',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
  },
  created() {
    // 初期化時に実行するロジックを記述
  },
  mounted() {
    // DOMがマウントされた後に実行するロジックを記述
  }
};
</script>
```

### 説明
このように、**`data`オプションで定義したデータを`methods`やライフサイクルフック（`created`や`mounted`）で更新**できます。各要素が独立してオブジェクト内に記述されるのが特徴です。

## Composition APIの特徴

- **`setup`内でデータと関数を定義**  
  `setup`関数はコンポーネントが初期化される際に一度だけ呼び出され、ここでリアクティブなデータや関数を定義します。データとロジックを1つの場所に集約でき、柔軟に管理できます。

- **リアクティブなデータの定義**  
  `ref`や`reactive`を使ってリアクティブなデータを設定します。例えば、プリミティブな値には`ref`を、オブジェクトには`reactive`を使うのが一般的です。

- **関連するロジックをまとめて管理**  
  Options APIとは異なり、データとそれに関連するメソッドを同じスコープで管理できるため、特に複雑なコンポーネントでは見通しが良くなります。

### サンプルコード (Composition API)

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // リアクティブデータの初期化
    const title = ref('Vue 3 Composition API Counter');
    const count = ref(0);

    // メソッドの定義
    const increment = () => {
      count.value += 1;
    };

    const decrement = () => {
      count.value -= 1;
    };

    // `setup`で定義した変数を返すことで、テンプレートからアクセス可能に
    return {
      title,
      count,
      increment,
      decrement
    };
  }
};
</script>
```
### 説明
Composition APIでは、`setup`関数内でデータとメソッドを定義し、テンプレートから直接利用可能にします。`ref`や`reactive`を使ってリアクティブデータを定義し、柔軟に構成できるのが特徴です。

## Options APIとComposition APIの違いまとめ

- **Options API**: データとロジックがオプションごとに分かれて記述され、コードが機能別に整理される。
- **Composition API**: 関連するデータとロジックを1つの`setup`関数内に集約し、より柔軟なコード設計が可能。

### まとめ
Options APIは分かりやすく、Composition APIは柔軟です。用途やプロジェクトの規模に応じて適切なAPIを選択しましょう。
