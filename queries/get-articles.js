// ./queries/getArticles.js

export const GetArticles = gql`
    query {
        Articles {
            items {
                _id
                _slug
                title
            }
        }
    }`
