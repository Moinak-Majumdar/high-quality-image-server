async function verifier():Promise<string> {
    
    // add your custom logic here. like fetch user details, api key from db, check fetch limit etc.
    
    return process.env.SECRET ?? ''
}

export default verifier;