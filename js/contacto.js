const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#truco')

$form.addEventListener('submit',handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href','mailto:mendozaedmilson9@gmail.com?subject='+form.get('asunto')+'&body='+'Hola soy'+' '+form.get('name')+' un gusto en comunicarme contigo ' +form.get('message'))
    $buttonMailto.click()
}
