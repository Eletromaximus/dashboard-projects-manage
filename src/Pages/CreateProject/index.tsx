import { useEffect, useState } from 'react'
import * as S from './Styles'

interface ICategory {
  id: number,
  name: string
}
export function CreateProject () {
  const [categories, setCategories] = useState<ICategory[] | []>([])

  const callApi = async () => await fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((data) => setCategories(data))
    .catch((err) => console.log(err))

  useEffect(() => {
    callApi()
  }, [])

  return (
    <S.MenuStyle>
      <S.HeaderStyle>
        <h1 style={{
          color: 'whitesmoke'
        }}>
          Gerenciador de projetos
        </h1>
      </S.HeaderStyle>

      <S.MainStyle>
        <h1>Crie um projeto</h1>

        <span>
          Crie seu projeto para depois adicionar os serviços
        </span>
        <br/>

        <S.CartStyle
          className='flip'
          id='cart'
        >
          <div className='face' id='back'>
            <img
              src='icon.svg'
              alt='moeda'
              width='100em'
              height='100em'
            />
          </div>

          <div className='face' id='front'>
            <form action=''>
              <label htmlFor='nomedoprojeto'>
                <b>Nome do Projeto</b>
              </label>

              <input
                type='text'
                name='name'
                placeholder='Insira o nome do projeto'
              />

              <label htmlFor='category'>
                <b>Selecione uma Categoria</b>
              </label>

              <input
                type='text'
                name='name'
                placeholder='Selecione uma opção'
                />

              <label htmlFor='preco'>
                <b>Preço</b>
              </label>

              <select
                name='categories'
                placeholder='Selecione a categoria'
              >
                <option>{'Selecione uma opção'}</option>
                {categories.length > 0 && categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}

              </select>

              <S.LinkButton
                type='submit'
                value='Criar Projeto'
              />
            </form>
          </div>
        </S.CartStyle>
      </S.MainStyle>
    </S.MenuStyle>

  )
}
