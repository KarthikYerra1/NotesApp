import {useState} from 'react'

import {v4 as uid} from 'uuid'

import NoteItem from '../NoteItem'

import {
  NotesAppContainer,
  NotesAppHeading,
  InputsContainer,
  Input,
  TextArea,
  AddButton,
  NotesListContainer,
  NoListContainer,
  NoListImage,
  NoListHeading,
  NoListDescription,
} from './styledComponents'

const Notes = () => {
  const [notesList, makeNotesList] = useState([])
  const [title, setTitle] = useState('')
  const [notes, makeNotes] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    makeNotes(event.target.value)
  }

  const submitForm = event => {
    event.preventDefault()
    const newNote = {
      id: uid(),
      title,
      notes,
    }
    makeNotesList(prev => [...prev, newNote])
    setTitle('')
    makeNotes('')
  }

  return (
    <NotesAppContainer>
      <NotesAppHeading>Notes</NotesAppHeading>
      <InputsContainer onSubmit={submitForm}>
        <Input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
          required
        />
        <TextArea
          as="textarea"
          value={notes}
          onChange={onChangeNotes}
          placeholder="Take a Note..."
          required
        />
        <AddButton type="submit">Add</AddButton>
      </InputsContainer>
      {notesList.length !== 0 ? (
        <NotesListContainer>
          {notesList.map(each => (
            <NoteItem key={each.id} details={each} />
          ))}
        </NotesListContainer>
      ) : (
        <NoListContainer>
          <NoListImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoListHeading>No Notes Yet</NoListHeading>
          <NoListDescription>Notes you add will appear here</NoListDescription>
        </NoListContainer>
      )}
    </NotesAppContainer>
  )
}

export default Notes
