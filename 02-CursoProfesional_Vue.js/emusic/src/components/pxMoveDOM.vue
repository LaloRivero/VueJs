<template lang="pug">
  #pxMoveDom
    h1 {{ name }}
    section.section
      p Ingresa el nombre de la Tarea
      input.input.is-medium( type="text"
      placeholder="Título"
      v-model="newTask.title")
      p Ingresa el tiempo para realizarla
      input.input.is-medium( type="number"
      placeholder="Tiempo"
      v-model="newTask.time")
      a.button.is-info.is-large(@click='addTask') Agregar
      a.button.is-danger.is-large(@click='cancel') &times
      div(v-show="tasks.length")
        ul
          li(v-for="(t,i) in tasks") {{ t.title }} - {{ t.time }}
            a.button.is-danger(@click='removeTask(i)') &times
        h1 Tiempo total trabjado: {{ totalTime }}
      div(v-show="!tasks.length")
        p No hay elementos en la lista
</template>
<script>
export default {
  name: 'pxMoveDOM',
  data() {
    return {
      name: 'Lalo Rivero',
      tasks: [],
      newTask: { title: '', time: null }
    }
  },
  methods: {
    addTask() {
      if (this.newTask.title != '' && this.newTask.time != null) {
        let newObj = JSON.parse(JSON.stringify(this.newTask))
        this.tasks.push(newObj)
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.newTask.title = ''
        this.newTask.time = null
      }
      console.log(this.tasks)
    },
    cancel() {
      this.newTask.title = ''
      this.newTask.time = null
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  },
  computed: {
    totalTime() {
      let time = null
      this.tasks.map(sum => {
        time += parseInt(sum.time)
      })
      return time
    }
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  }
}
</script>
<style lang="sass" scoped></style>
