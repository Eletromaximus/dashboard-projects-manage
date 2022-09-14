import styled from '@emotion/styled'

export const CartStyle = styled('div')`
  align-self: center;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 0.5s ease;  
  
  .face {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
  }

  #front {
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;

      border: 1px solid;
    }
    
  }

  #back {
  }
`
