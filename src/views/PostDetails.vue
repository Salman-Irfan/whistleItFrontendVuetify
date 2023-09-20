<template>
    <h1>post details</h1>
    <v-container>
        <v-row no-gutters="">
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <!-- actions -->
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <!-- post category -->
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{
                                    post.category
                                }}</v-btn>
                            </v-col>
                            <!-- edit del buttons -->
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn
                                    color="success"
                                    text
                                    :to="{
                                        name: 'EditPost',
                                        params: { id: post._id },
                                    }"
                                    >Edit</v-btn
                                >
                                <v-btn color="red" @click="removePost(post._id)" text>Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <!-- post title -->
                    <v-card-subtitle class="headline">
                        <h3>
                            {{ post.title }}
                        </h3>
                    </v-card-subtitle>
                    <!-- post content -->
                    <v-card-text>
                        <p>
                            {{ post.content }}
                        </p>
                        <p class="text-grey">{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "@/api/api";

export default {
    name: "PostDetails",
    data() {
        return {
            post: {},
        };
    },
    // create async life cycle method
    async created() {
        const response = await API.getPostById(this.$route.params.id);
        this.post = response;
        console.log(this.post);
    },
    // methods
    methods: {
        // remove post
        async removePost(id){
            const response = await API.deletePost(id)
            this.$router.push({
                name: 'HomeView',
                message: response.message
            })
        }
    }
};
</script>
