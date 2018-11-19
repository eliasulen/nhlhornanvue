

<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>NHL</span>
        <span class="font-weight-light">HORNAN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://www.nhl.com"
        target="_blank"
      >
        <span class="mr-2">API</span>
      </v-btn>
    </v-toolbar>

    <v-content> 
                                    <Navbar/>   
      <v-layout align-start justify-center fill-height>

                  <router-view/>
           
      </v-layout>
      <Footer/>
    </v-content>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
