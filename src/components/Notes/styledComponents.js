import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const NotesAppHeading = styled.h1`
  font-family: 'Bree serif';
  color: #4c63b6;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`
export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
  box-shadow: 0px 4px 8px 2px #475569;
  border-style: none;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 80%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px 30px;
  font-family: 'Roboto';
  border-style: none;
  outline: none;
  color: #475569;
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const TextArea = styled(Input)`
  height: 100px;
  color: #1e293b;
`
export const AddButton = styled.button`
  height: 38px;
  width: 60px;
  padding: 10px;
  cursor: pointer;
  outline: none;
  background-color: #4c63b6;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin: 15px;
  @media screen and (min-width: 768px) {
    margin: 15px 30px;
  }
`
export const NotesListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 92%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    width: 81%;
  }
`
export const NoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  height: 100%;
  width: 90%;
  @media screen and (min-width: 767px) {
    width: 80%;
  }
`

export const NoListImage = styled.img`
  width: 100px;
  margin-bottom: 15px;
`

export const NoListHeading = styled.h1`
  color: #334155;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`

export const NoListDescription = styled.p`
  color: #aab8c8;
  font-size: 14px;
  margin-top: 15px;
`
