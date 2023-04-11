import {useState, useEffect} from 'react'
import axios from 'axios'
import randomString from '../helpers'
import Spinner from './Spinner'

export default function Chat({waifu}) {
  const [messages, setMessages] = useState([{id: 1, data: "Escribeme"}])
  const [messagesBoy, setMessagesBoy] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  async function handleSubmit(e){
      e.preventDefault()
      if(!messagesBoy) return
      setMessages([...messages, {id: 2, data: messagesBoy}])
      setMessagesBoy([]);
    }
  useEffect(() => {
    async function consulta(mensaje){
      setIsLoading(true)
      const options = {
        method: 'POST',
        url: 'https://waifu.p.rapidapi.com/path',
        params: {
          user_id: 'sample_user_id',
          message: `${mensaje}`,
          from_name: 'Ian',
          to_name: 'Rebeca',
          situation: 'Rebeca loves Ian.',
          translate_from: 'es',
          translate_to: 'es'
        },
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '24a32d45e0msh43ddd6efd389b52p18c800jsnccfa0703dc54',
          'X-RapidAPI-Host': 'waifu.p.rapidapi.com'
        },
        data: '{}'
      };
      const {data} = await axios(options)
      setIsLoading(false)
      setMessages([...messages, {id: 1, data}])
    }
    const mensaje = messages.slice(-1)[0]
    if(mensaje.id === 2){
      consulta(mensaje.data)
    }
    // console.log("aqui tengo que scrollear")
    componentDidUpdate()
  }, [messages])

  function componentDidUpdate() {
    // Obtener el elemento contenedor de los mensajes
    const messageContainer = document.getElementById('message-container');
    // Bajar el scroll hasta el final del contenedor
    setTimeout(() => {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 10);
  }

  return (
    <section className="section-3">
        <div className='chat' id='message-container'>
            <div>
            {messages.map( message => (
              <div className={`message${message.id === 1 ? "Girl" : "Boy"}`} key={randomString(12)}>
                <h3 className={message.id === 1 ? "pink" : "blue"}>{message.data}</h3>
              </div>
            ))}
            </div>
            {isLoading && (
              <div className="messageGirl" key={randomString(12)}>
                <h3 className="pink">
                  <Spinner/>
                </h3>
              </div>
            )}
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <div className='cositas'>
            <input type="text" placeholder='Escribe un Mensaje' className='campo' required="true" value={messagesBoy}
            onChange={ e => setMessagesBoy(e.target.value)} />
            <input type="submit" value="Enviar" className='boton'/>
          </div>
        </form>
    </section>
  )
}
