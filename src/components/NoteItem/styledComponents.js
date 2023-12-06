import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 10px 20px;
  border: solid 1px #aab8c8;
  border-radius: 5px;
  margin: 10px;
  font-family: 'Roboto';
  width: 100%;
  @media screen and (min-width: 575px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 29%;
  }
`

export const NoteItemHeading = styled.h1`
  font-size: 15px;
  color: #1e293b;
  font-family: 'Bree Serif';
`

export const NoteItemDescription = styled.p`
  color: #334155;
  font-size: 12px;
`
