const nome = document.getElementById("name").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telephone").value;
const menssagem = document.getElementById("message").value;
const button = document.getElementById("btn-send");

button.addEventListener('click', async (evnt) => {
    evnt.preventDefault()
    const date = {
        nome,
        email,
        telefone,
        menssagem
    }
    await sendForm(date)
})

async function sendForm(data) {
    const url = 'http://localhost:8080/form'
    const answer = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "acess-control-allow-origin": "*"
        }
    }).then(data => data.json())
    console.log(answer);
}