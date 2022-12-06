<template>
  <div class="container-login">
    <img id="wallpaper" src="@/assets/img/login-wallpaper.jpg"/>
    <div class="dialog-login">

      <v-carousel 
        v-model="model"
        style="background-color: rgb(0,0,0,0.5);">
        <v-carousel-item
          v-for="(image) in images"
          :key="image"
        >
          <h1 style="position: absolute;">{{image.title}}</h1>
          <img class="img-carousel" :src="image.url"/>
        </v-carousel-item>
      </v-carousel>

      <div class="login-form">
        <img id="logo" src="@/assets/logo/S4M Logo.png"/>
        <div class="login-info">
          <h2>
            Enter login credentials
          </h2>
          <v-text-field
            outlined
            dense
            label="Account"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            outlined
            dense
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>
          <v-btn 
            dark
            block depressed
            color="primary"
            @click="onLogin">
            LOGIN
          </v-btn>
        </div>

        <div class="social-media">
          <font-awesome-icon 
            :icon="['fas', 'globe']" 
            @click="openWebsite"
            style="font-size: 30; color: #34B7F1; margin: auto;"/>
          <font-awesome-icon 
            :icon="['fab', 'facebook-square']" 
            @click="openFacebook"
            style="font-size: 30; color: #4267B2; margin: auto;"/>
          <font-awesome-icon 
            :icon="['fab', 'linkedin']" 
            @click="openLinkedin"
            style="font-size: 30; color: #0e76a8; margin: auto;"/>
          <font-awesome-icon 
            :icon="['fab', 'youtube-square']" 
            @click="openYoutube"
            style="font-size: 30; color: #ff0000; margin: auto;"/>
          <font-awesome-icon 
            :icon="['fab', 'whatsapp-square']" 
            @click="openWhatsapp"
            style="font-size: 30; color: #25D366; margin: auto;"/>
        </div>

        <v-divider/>
        
        <a style="font-size: 12px;">Copyright © 2021 by S4M Engineering Co. Ltd. All rights reserved.</a>

      </div>

      
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faYoutubeSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faGlobe, faFacebookSquare, faLinkedin, faYoutubeSquare, faWhatsappSquare)

export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  props: {
  },
  watch: {
  },
  methods: {
    openWebsite() {
      window.open("https://s4mengineering.com/"); 
    },
    openFacebook() {
      window.open("https://www.facebook.com/s4mengineering"); 
    },
    openLinkedin() {
      window.open("https://www.linkedin.com/in/s4m-engineering-954b321ab/"); 
    },
    openYoutube() {
      window.open("https://www.linkedin.com/in/s4m-engineering-954b321ab/"); 
    },
    openWhatsapp() {
      window.open("https://www.linkedin.com/in/s4m-engineering-954b321ab/"); 
    },
    onLogin() {
      this.$router.push("/application")
    }
  },

  created() {
    // switch carousel on interval
    setInterval(() => {
      if (this.model > this.images.length-1) {
        this.model = 0
      }
      else this.model++
    }, 5000)
  },

  data() {
    return {
      model: 0,
      images: [
        {
          title: 'Hansford sensors',
          url: require("@/assets/img/hansford-sensors.png")                     
        },
        {
          title: 'Our offline & online solution',
          url: require("@/assets/img/cm-system.png"),
        },
        {
          title: 'Our partners',
          url: require("@/assets/img/partners.png")
        }
      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-login {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: grid;
}
.dialog-login {
    width: 70%;
    min-width: 800px;
    margin: auto;
    display: grid;
    grid-template-columns: 60% 40%;
    box-sizing: border-box;
    box-shadow: 5px 5px 10px #afafaf;
    z-index: 5;
}
.login-form {
    background: #f0f0f0;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: grid;
    grid-template-rows: 80px 1fr 60px 1px 40px;
    gap: 10px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
}
h1 {
  font-size: 30px;
  color: white;
  margin: 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 20px;
}
h2 {
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 15px;
  color: var(--v-primary-base)
}
.login-info {
  width: 100%;
  height: 100%;
}
.social-media {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  padding-left: 50px;
  padding-right: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
#wallpaper {
  position: absolute;
  width: 100%;
  height: 100%;
}
.img-carousel {
  margin: 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
#logo {
  width: 200px;
  overflow: auto;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}

</style>
