
import { CartStyle } from './Styles'

export function FormAddProject () {
  return (
    <CartStyle
        className='flip'
        id='cart'
    >
      <div className='face' id='back'>
        <img
          src="icon.svg"
          alt="moeda"
          width='100em'
          height='100em'
        />
      </div>

      <div className="face" id='front'>
        <form action="">
          <label htmlFor="nomedoprojeto">
            Nome do Projeto
          </label>
          <label htmlFor="tempo">
            Tempo de Execução
          </label>
          <label htmlFor="preco">
            Preço
          </label>
        </form>
      </div>
    </CartStyle>
  )
}
