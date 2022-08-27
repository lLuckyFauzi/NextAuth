export async function useCreateUser(email?: string, password?: string) {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()

    if(!response.ok){
        throw Error(data.message || 'Something went wrong!');
    }

    return data
}