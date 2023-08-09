const PREPR_ENDPOINT = process.env.PREPR_ENDPOINT

export async function Prepr(query, variables) {
    const response = await fetch(`${PREPR_ENDPOINT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
    })

    return await response.json()
}