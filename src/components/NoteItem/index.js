import {
  NoteItemContainer,
  NoteItemHeading,
  NoteItemDescription,
} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, notes} = details

  return (
    <NoteItemContainer>
      <NoteItemHeading>{title}</NoteItemHeading>
      <NoteItemDescription>{notes}</NoteItemDescription>
    </NoteItemContainer>
  )
}

export default NoteItem
