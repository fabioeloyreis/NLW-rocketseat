import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/18537403?s=460&v=4" alt="Fábio Eloy Reis" />
        <div>
          <strong>
            Fábio Eloy Reis
          </strong>
          <span>
            Frontend
          </span>
        </div>
      </header>

      <p>
        Learning is a treasure that will follow its owner everywhere!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 99,99</strong>
        </p>
        <button type="button">
          <img
            src={whatsappIcon}
            alt="Whatsapp"
          />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
