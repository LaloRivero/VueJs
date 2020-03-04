Vue.component('coinDetail',{
  props: ["coin"],/* ['changePercent','title','img','name','price'], */
  data(){
    return{
      showPrices : false,
      value: 0,
    }
  },
  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices;
      
      this.$emit('change-color', 
      !this.showPrices ? 'F4F4F4' : '252850'); //Creamos un evento nuevo para que el padre se actualice
    }
  },
  computed:{
    title () {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },
    convertedValue(){
      if(!this.value){
        return 0;
      }
      return this.value / this.coin.price; 
    }
  },
  template: `
  <div>
    <img v-on:mouseover = "toggleShowPrices" 
              @mouseout = "toggleShowPrices" 
         v-bind:src="coin.img" :alt="coin.name">
    
    <h1 :class = "coin.changePercent > 0 ? 'green' : 'red'"> {{ title }} 
      <span v-if="coin.changePercent > 0">cool <br> </span>
      <span v-else-if="coin.changePercent < 0">not cool<br></span>
      <span v-else>luky<br></span>
      <span @click="toggleShowPrices">{{showPrices ? '🙊':'🙈' }}</span>
    </h1>
    
    <input type="number" v-model="value">
    <span :style = "showPrices ? 'color: white':'color:black'">{{convertedValue}}</span>
    
    <slot name="text"></slot>
    <slot name="link"></slot>

    <ul v-show=showPrices>
      <li 
      class="uppercase"
      :class = "{ orange : coin.price === p.value , red : coin.price > p.value, green : coin.price < p.value}"
      v-for="(p,i) in coin.pricesWithDays" :key="p.day"> 
        {{ i }} - {{ p.day }} -- {{ p.value }} </li>
    </ul>
  </div>
  `
})

var app = new Vue({
  el:'#app',
  data(){
    return{
      btc: {
        name:'Bitcoin',
        symbol: 'BTC',
        img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent:10,
        prices: [8400,7900,8200,9000,9400,8700,8374],
        pricesWithDays:[
          {day:"Monday", value: 8400},
          {day:"Tuesday", value: 7900},
          {day:"Wednesday", value: 8544},
          {day:"Thursday", value: 9000},
          {day:"Friday", value: 9500},
          {day:"Saturday", value: 10000},
          {day:"Sunday", value: 10400},
        ],
        price : 8544,
      },
      color: 'f1f1f1',
    }
  },
  methods:{
    updateColor(color){
      this.color = color;
    }
  }
})