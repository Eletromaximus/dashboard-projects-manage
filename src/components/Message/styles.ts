import styled from '@emotion/styled'

interface IMessage {
  sucess?: boolean
}

export const MessageStyle = styled.div<IMessage>`
  width: 20em;
  height: 5em;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-botton: 2em;
  border-radius: 5px;

  color: ${({ sucess }) => sucess ? '#155724' : '#721C24'} ;
  background-color: ${({ sucess }) => sucess ? '#D4EDDA' : '#F8D7DA'};
  border-color: ${({ sucess }) => sucess ? '#C3E6CB' : '#F5C6DB'} ;
`
