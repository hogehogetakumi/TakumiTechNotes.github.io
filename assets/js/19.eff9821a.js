(window.webpackJsonp=window.webpackJsonp||[]).push([[19,21],{304:function(t,e,i){},313:function(t,e,i){"use strict";i(304)},325:function(t,e,i){"use strict";i.r(e);var s={props:{article:{type:Object,required:!0}}},r=(i(313),i(25)),n=Object(r.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"article-card"},[t("h3",[t("a",{attrs:{href:this.article.link}},[this._v(this._s(this.article.title))])]),this._v(" "),t("p",[this._v(this._s(this.article.description))])])}),[],!1,null,"c05f4744",null);e.default=n.exports},345:function(t,e,i){"use strict";i.r(e);var s={components:{ArticleCard:i(325).default},data:()=>({articles:[{title:"ライフサイクルフックbeforeCreate編",link:"/posts/Tech/lifecycle_hook/beforeCreate",description:"継続的インテグレーションについての基礎知識。"},{title:"ライフサイクルフックcreated編",link:"/posts/Tech/lifecycle_hook/created",description:"継続的インテグレーションについての基礎知識。"},{title:"Options APIとComposition APIの比較",link:"/posts/Tech/options-vs-composition-api",description:"Vue.jsのOptions APIとComposition APIを比較します。"},{title:"初めての投稿",link:"/posts/first-post",description:"私の最初の投稿です。"}]})},r=i(25),n=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"おすすめ記事"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#おすすめ記事"}},[t._v("#")]),t._v(" おすすめ記事")]),t._v(" "),e("p",[t._v("アウトプット用にIT技術とキャリア関連の記事を掲載しています。")]),t._v(" "),[e("div",{staticClass:"articles"},t._l(t.articles,(function(t,i){return e("ArticleCard",{key:i,attrs:{article:t}})})),1)],t._v(" "),e("style",{attrs:{scoped:""}},[t._v("\n.articles {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n")])],2)}),[],!1,null,null,null);e.default=n.exports}}]);