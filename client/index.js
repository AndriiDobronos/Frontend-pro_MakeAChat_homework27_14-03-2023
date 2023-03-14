"use strict";
import {nameIsValid} from  "./validator.mjs";

let userInput = ''
const input = document.querySelector('.name')
input.addEventListener('input',function (event) {
    userInput = event.target.value
})

document.querySelector('.connect').onclick = () => {
    if(nameIsValid(`${userInput}`)) {
        const button = document.querySelector('.connect')
        button.textContent = "Send"
        const label = document.querySelector('.label')
        label.textContent = `Message from : ${userInput}`
        input.value = ''
        const h3 = document.querySelector('.title')
        h3.textContent = ''

        const ws = new WebSocket('ws://localhost:5557')
        ws.onmessage = messageEvent => {
            const addH3 = document.createElement('h3')
            document.body.append(addH3)
            addH3.textContent =`${messageEvent.data} `
            console.log(messageEvent.data)
        }

        ws.onopen = () => {
            const arrData = []
            arrData.push(userInput)
            console.log(`${userInput}: Connected to web socket server`)
            document.querySelector('.send').onclick = () => {
                const message = document.querySelector('.message').value.trim()
                if(message) {
                    ws.send(`${arrData[0]} : ${message}`)
                    document.querySelector('.message').value = ''
                }
            }
        }
    }
}