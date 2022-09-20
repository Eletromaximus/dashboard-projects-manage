import styled from '@emotion/styled'

export const HeaderStyle = styled('header')`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #23aaf2;
  justify-content: center;
  align-items: center;

`

export const MenuStyle = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  `

export const MainStyle = styled('div')`
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
