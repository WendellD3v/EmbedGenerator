async function sendEmbed(){
    event.returnValue = false
    event.cancelable = true

    let username = null;
    let avatar = null;

    let webhook = document.querySelector('#WebhookURL').value;
    
    /* Webhook Perfil */

    if (document.querySelector('#user_name').value != ''){
        username = document.querySelector('#user_name').value;   
    }

    if (document.querySelector('#user_avatar').value != ''){
        avatar = document.querySelector('#user_avatar').value;
    }

    let mensagem = document.querySelector('#MenssageContent').value;

    /* Embed */ 

    let title = document.querySelector('#embedTitle').value;
    let description = document.querySelector('#embedDesc').value;

    fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            avatar_url: avatar,
            content: mensagem,
            embeds: [
                {
                    color: 0x0099ff,
                    title: title,
                    description: description,
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'Cyber Scripts - @2021',
                        icon_url: 'https://i.imgur.com/7AYU0VY.png',
                    },
                }
            ]
        })
    }).then(() =>{
        info('Enviado!', 'Seu anúncio foi enviado')
    })
}

function info(type, msg){
    let infobox = document.querySelector('#infobox');
    infobox.innerHTML = `
            <h2>${type}</h2>
            <p>${msg}</p>
        `;

    infobox.classList.add('show');
    setTimeout(() => {
        infobox.classList.remove('show');
        infobox.classList.add('close');
        setTimeout(() => {
            infobox.classList.remove('close');
        }, 1000);
    }, 2000);
}