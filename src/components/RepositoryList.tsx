import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  //useEffect = server para disparar uma função quando algo acontecer na app, ex: a variável mudou
  useEffect(() => {
    fetch('https://api.github.com/users/farnetani/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
    // .then((data) => console.log(data))
  }, []) // se passarmos o array vazio, ela irá executar somente quando o componete é carregado

  // console.log(repositories)
  // Não podemos deixar sem o ultimo parametro = entra em loop infinito

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {/* Sempre que fizermos um MAP temos que definir uma key */}
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
