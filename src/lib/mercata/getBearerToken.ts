export default async function getBearerToken() {
    const realmName = process.env.NEXT_PUBLIC_MERCATA_RELM
    const clientId = process.env.NEXT_PUBLIC_MERCATA_CLIENT_ID
    const clientSecret = process.env.NEXT_PUBLIC_MERCATA_CLIENT_SECRET
  
    const basicToken = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const url = `https://keycloak.blockapps.net/auth/realms/${realmName}/protocol/openid-connect/token`
  
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${basicToken}`
    }
  
    const payload = new URLSearchParams({ 'grant_type': 'client_credentials' })
  
    try {
      console.info(`Requesting bearer token from: ${url}`)
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: payload
      })
  
      console.info(`Token request status code: ${response.status}`)
      const responseData = await response.json()
  
      if (response.status === 200) {
        console.info("Successfully obtained bearer token")
        return responseData.access_token
      } else {
        const errorMsg = `Failed to obtain bearer token: ${JSON.stringify(responseData)}`
        console.error(errorMsg)
        throw new Error(errorMsg)
      }
    } catch (error) {
      console.error(`Error in getBearerToken: ${error.message}`)
      throw error
    }
  }