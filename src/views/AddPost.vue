<template>
    <v-container>
        <v-row no-gutters="">
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>
                    <!-- form -->
                    <v-form
                        @submit.prevent="submitForm"
                        ref="form"
                        class="pa-5"
                        enctype="multipart/form-data"
                    >
                        <!-- title -->
                        <v-text-field
                            label="Title"
                            v-model="post.title"
                            prepend-icon="mdi-note"
                            :rules="rules"
                        ></v-text-field>
                        <!-- Category -->
                        <v-text-field
                            label="Category"
                            v-model="post.category"
                            prepend-icon="mdi-view-list"
                            :rules="rules"
                        ></v-text-field>
                        <!-- Content -->
                        <v-textarea
                            label="Content"
                            v-model="post.content"
                            prepend-icon="mdi-note-plus"
                            :rules="rules"
                        ></v-textarea>
                        <!-- submit button -->
                        <v-btn type="submit" class="mt-3" color="primary"
                            >Add Post</v-btn
                        >
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '@/api/api';


export default {
    name: "AddPost",
    data() {
        return {
            rules: [(value) => !!value || "this filed is required"],
            post: {
                title: "",
                category: "",
                content: "",
            },
        };
    },
    // methods
    methods: {
        submitForm(){
            let postObject = {
                title: this.post.title,
                category: this.post.category,
                content: this.post.content
            }
            API.addPost(postObject)
            // reditrect to home
        }
    },
};
</script>
