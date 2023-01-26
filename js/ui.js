class UI {


    // Show any message in HTML
    printMessage(message, className){

    // Create div tag

        const div = document.createElement('div')

    // Append text message to the div tag
        div.appendChild(document.createTextNode(message))
    //Append class name to the tag
        div.className = className

    //Show message into the HTML
    document.querySelector('#message').appendChild(div)
   

    }

    removeMessage()



}