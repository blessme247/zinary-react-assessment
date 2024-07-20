export const generateRandomKey = (keyLength: number)=>{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789_-*+'
    let key = ''

   for (let index = 0; index < keyLength; index++) {
        key+= generateRandomCharacter(characters)
   }

   return key
}

const generateRandomCharacter = (characters: string)=> {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}