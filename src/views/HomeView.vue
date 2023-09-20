<template>
    <h1>Home Page</h1>
    <v-container>
        <v-row no-gutters="">
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
                <v-card
                    class="pa-1"
                    :to="{ name: 'PostDetails', params: { id: post._id } }"
                >
                    <!-- post category -->
                    <v-btn class="ml-4 mt-3" small outlined color="indigo">
                        {{ post.category }}
                    </v-btn>
                    <!-- post title -->
                    <v-card-title class="headline">{{
                        post.title
                    }}</v-card-title>
                    <!-- post content -->
                    <v-card-text class="py-0">
                        <p>{{ post.content.substr(0, 100) + "..." }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api/api";

export default {
    name: "HomeView",
    data() {
        return {
            posts: [],
        };
    },
    // create a life cycle method
    async created() {
        this.posts = await API.getAllPosts();
        console.log(this.posts);
    },
};
</script>
