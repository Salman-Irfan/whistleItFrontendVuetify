<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <!-- inside side nav -->
            <VListItem>
                <VListItemContent>
                    <!-- header -->
                    <v-list-item-title>
                        Whistle It
                    </v-list-item-title>
                    <!-- description -->
                    <VListItemSubtitle>
                        Team Chatting System 
                    </VListItemSubtitle>
                    <VListItemSubtitle>
                        Within an Organization 
                    </VListItemSubtitle>
                </VListItemContent>
            </VListItem>

            <!-- divider -->
            <v-divider></v-divider>
            <!-- -------------- -->
            <v-list density="compact">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.link"
                    link
                    :value="item"
                    color="primary"
                >
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>
        <!-- main content -->
        <v-main>
            <!-- router view -->
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<!-- setup script -->
<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

// script
<script>
export default {
    name: "App",

    components: {},

    data: () => (
        { drawer: null },
        {
            items: [
                { title: "Home", icon: "mdi-home", link: "/" },
                { title: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
                { title: "About", icon: "mdi-help-box", link: "/about" },
            ],
        }
    ),
};
</script>
