import styled from '@emotion/styled'

export const MainStyle = styled('main')`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5ff;
  padding: 2% 2% 0 2%;

  height: 98%;
  width: 96%;

  .flip{
    transform: rotateY(180deg);
  }
`

export const LinkButton = styled('div')`
  width: 120px;
  height: 50px;
  justify-content: center;
  align-items: center;

  background-color: #23aaf2;
  
  a {
    color: white;
    text-decoration: none;
  }
`
