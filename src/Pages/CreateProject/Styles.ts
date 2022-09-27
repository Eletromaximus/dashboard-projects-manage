import styled from '@emotion/styled'

export const MainStyle = styled('div')`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5ff;
  padding: 2% 2% 0 2%;

  height: 98%;
  width: 96%;

  .flip{
    transform: rotateY(180deg);
  }
`

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
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;

      label {
        padding-top: 20px;
      }

      input, select{
        border: none;
        height: 40px;
        padding: 0 10px;
      }

      select {
        background-color: white;
      }
    }
  }

  #back {
  }
`

export const LinkButton = styled('input')`
  width: 120px;
  height: 50px;

  margin-top: 20px;
  font-size: 1em;
  font-weight: 900;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  background-color: #23aaf2;
`
