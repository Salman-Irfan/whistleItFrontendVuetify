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
                        <!-- file input with @change function=> selectFile() -->
                        <v-file-input
                            @change="selectFile"
                            label="Select Picture"
                            show-size
                            counter
                            multiple
                        ></v-file-input>
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

export default {
    name: "AddPost",
    data() {
        return {
            rules: [(value) => !!value || "this filed is required"],
            post: {
                title: "",
                category: "",
                content: "",
                image: "",
            },
            image: "",
        };
    },
    // methods
    methods: {
        // select file
        selectFile(file) {
            this.image = file[0];
        },
        // submit form
        async submitForm() {
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("title", this.post.title);
            formData.append("category", this.post.category);
            formData.append("content", this.post.content);
            // submit the form if validates properly
            
        },
    },
};
</script>
