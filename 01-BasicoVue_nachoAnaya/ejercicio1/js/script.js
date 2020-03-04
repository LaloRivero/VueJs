var app = new Vue({
  el : "#app",
  data(){
    return {
      courses :[],
      title: '',
      time: '',
    }
  },
  computed:{
    totalTime(){
      const toNumber = this.courses.map(c => parseInt(c.time))
      const suma = toNumber.reduce((a,b) => a+b, 0);
      return suma;
    }
  },
  methods:{
    addCourse() {
      var newCourse = this.courses.push({
        title: this.title,
        time: this.time,
      });
      return this.courses;
    }
  }
})