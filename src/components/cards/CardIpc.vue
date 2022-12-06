<template>
  <div class="machine">
    <h1>{{this.title}}</h1>
    <img src="@/assets/img/controllers/CX5130.jpg">
    <div class="container-icon">
      <v-icon style=
          "font-size: 30px; 
          width:100%;
          display: flex;
          justify-content: center;
          font-size: 30px;
          margin: 0;"
          :color = "iconColor">
      {{this.icon}}
      </v-icon>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  props: {
    title: String,
    img: String,
    status: Number
  },
  watch: {
    status: function () {
      this.updateStatus()
    }
  },
  methods: {
    updateStatus() {
    }
  },
  created() {
    this.updateStatus()
  },
  data() {
    return {
      icon: String,
      iconColor: String
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.machine{
    left: 0; right: 0; top: 0; bottom: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: 30px 1fr 40px;
}
.machine h1 {
    width:100%;
    display: flex;
    justify-content: center;
    font-size: 20px;
}
img {
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: auto;
}
.container-icon {
    top: 0; bottom: 0;
    height: 100%;
    width: 100%;
    padding-left: 15%;
    padding-right: 15%;
}

</style>
