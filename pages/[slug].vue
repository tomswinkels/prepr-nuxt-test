<!-- ./pages/[slug].vue -->

<template>
    <!-- Display title -->
    <h1 >
        {{ article.title }}
    </h1>
    <!-- Loop through the article content -->
    <div :key="contentType._id" v-for="contentType in article.content">

        <!-- Display images if they exist -->
        <div v-if="contentType.__typename === 'Assets'" class="my-10">
            <img
                v-if="contentType.items.length"
                :src="contentType.items[0]?.url"
                width="300"
                height="250"
            />
        </div>

        <!-- Display the text in HTML format -->
        <div
            v-if="contentType.__typename === 'Text'"
            v-html="contentType.body"
        ></div>
    </div>
</template>

<script setup>

import { useRoute } from "vue-router";

// Load Prepr  Lib
import {Prepr} from "/lib/prepr.js";

// Import the query
import GetArticleBySlug from "/queries/get-article-by-slug.js";

// Use vue-router to determine the slug in the URL
const route = useRoute();
const slug = route.params.slug;

// Request an article by the slug
const response = await Prepr(GetArticleBySlug, {slug})

// Assign the article variable to the article content from Prepr
const article = response.data.Article;

</script>
