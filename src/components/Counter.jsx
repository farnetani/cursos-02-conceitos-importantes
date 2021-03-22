import { useState } from 'react'

// Toda função que começa com use = Hook (= gancho)

// Conceito da Imutabilidade : não devemos alterar um valor na memória e sim criar um novo valor conforme explicado abaixo
// usuarios = ['junior', 'virginia', 'lucca']
// usuarios.push('miguel')

// # Conceito da Imutabilidade : pegamos e criamos um novo Array e aí sim adicionamos o que queremos
// novoUsuarios = [...usuarios, 'miguel']

export function Counter() {
  // useState(0) retorna um array com 2 posições
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h2>{counter} </h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
