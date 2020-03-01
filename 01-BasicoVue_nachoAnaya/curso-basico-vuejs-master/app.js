var app = new Vue({
  el:'#app',
  data(){
    return{
      name:'Bitcoin',
      symbol: 'BTC',
      img:'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent:10,
      prices: [8400,7900,8200,9000,9400,8700,8374],
      pricesWithDays:[
        {day:"Monday", value: 8400},
        {day:"Tuesday", value: 7900},
        {day:"Wednesday", value: 8800},
        {day:"Thursday", value: 9000},
        {day:"Friday", value: 9500},
        {day:"Saturday", value: 10000},
        {day:"Sunday", value: 10400},
      ],
      showPrices : false,
      price : 8544,
      color: 'f1f1f1',
      value: 0,
    }
  },
  computed:{
    title () {
      return `${this.name} - ${this.symbol}`;
    },
    convertedValue(){
      if(!this.value){
        return 0;
      }
      return this.value / this.price; 
    }
  },
  watch:{
    showPrices(newVal,oldVal){
      console.log(newVal,oldVal);
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse('').join('');
    }
  }
})