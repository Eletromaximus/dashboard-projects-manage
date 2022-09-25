import { LinkButton } from './Styles'
import { ChangeEvent } from 'react'

interface IForm {
  categories: {
    id: number,
    name: string,
  }[] | [],
  handleSubmit: (e: ChangeEvent<HTMLInputElement>) => void,
  selectHandle: (e: ChangeEvent<HTMLSelectElement>) => void,
  values: {
    price: string,
    name: string,
    category: {
      id: string,
      name: string
    }
  }
}

export function FormProject ({
  categories,
  handleSubmit,
  selectHandle,
  values
}: IForm) {
  function submit (e: any) {
    e.preventDefault()
    console.log(values)
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor='nomedoprojeto'>
        <b>Nome do Projeto</b>
      </label>

      <input
        type='text'
        name='name'
        placeholder='Insira o nome do projeto'
        onChange={handleSubmit}
      />

      <label htmlFor='preco'>
        <b>Preço</b>
      </label>

      <input
        type='number'
        name='price'
        placeholder='Selecione uma opção'
        onChange={handleSubmit}
      />

      <label htmlFor='categoria'>
        <b>Selecione um categoria</b>
      </label>

      <select
        name='category'
        placeholder='Selecione a categoria'
        onChange={selectHandle}
      >
        <option>{'Selecione uma opção'}</option>
        {categories.length > 0 && categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <LinkButton
        type='submit'
        value='Criar Projeto'
      />
    </form>
  )
}
