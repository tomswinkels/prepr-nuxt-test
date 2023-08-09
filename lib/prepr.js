export async function Prepr(query, variables) {
    const response = await fetch(`https://graphql.prepr.io/7f05e9e2f17f1b3d5e08dab3a565acbea8b87745473917e159f70ae1cf0334b9`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })

    return await response.json()
}