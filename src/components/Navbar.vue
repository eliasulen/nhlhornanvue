<template>
  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    hide-overlay
    stateless
    dark
    app
    clipped
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://nhl.bamcontent.com/images/headshots/current/168x168/8476453.jpg">
          </v-list-tile-avatar>
          

          <v-list-tile-content>
            <v-list-tile-avatar>
                <img src="https://nhl.bamcontent.com/images/headshots/current/168x168/8474564.jpg">
            </v-list-tile-avatar>
          </v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-avatar>
                <img src="https://nhl.bamcontent.com/images/headshots/current/168x168/8478010.jpg">
            </v-list-tile-avatar>
          </v-list-tile-content>
         <v-list-tile-content>
            <v-list-tile-avatar>
                <img src="https://nhl.bamcontent.com/images/headshots/current/168x168/8476826.jpg">
            </v-list-tile-avatar>
          </v-list-tile-content>
 

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile dark ripple
        v-for="item in items"
        :key="item.title"
        :to="item.link"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Recent', icon: 'dashboard', link: '/'},
          { title: 'Odds', icon: 'dashboard', link: '/odds' },
          { title: 'Team odds', icon: 'question_answer', link: '/teamodds' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>