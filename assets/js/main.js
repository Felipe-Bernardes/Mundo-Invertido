import { subscribeToHellfireClub } from "./firebase/hellfire-club.js"

const txtName = document.querySelector('#txtName')
const txtEmail = document.querySelector('#txtEmail')
const txtLevel = document.querySelector('#txtLevel')
const txtCharacter = document.querySelector('#txtCharacter')
const btnSubscribe = document.querySelector('#btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    
    
    const SubscriptionID = await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com Sucesso: ${SubscriptionID}`)

    txtName.value = '';
    txtEmail.value = '';
    txtLevel.value = '';
    txtCharacter.value = '';
})