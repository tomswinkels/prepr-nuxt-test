<!-- ./app.vue -->

<template>
    <div>
        <h1>My blog site</h1>
        <ul>
            <li :data="article" v-for="(article, index) in articles" :key="article._id">

                <!--
                  Add a link to each article title and
                  include the article slug in the path
                 -->
                <nuxt-link :to="`/${article._slug}`">
                    {{ article.title }}
                </nuxt-link>

            </li>
        </ul>
    </div>
</template>

<script setup>

// Load Prepr  Lib
import {Prepr} from "/lib/prepr.js";

// Import the query
import GetArticles from "/queries/get-articles.js";

// Request the data from Prepr
const response = await Prepr(GetArticles)

// Assign the articles variable to all the articles from Prepr
const articles = response.data.Articles.items;

</script>
