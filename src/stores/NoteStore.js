import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

// this.bindAction(NoteActions.CREATE, this.create) - Bind a specific action to a specific method.
// this.bindActions(NoteActions)- Bind all actions to methods by convention.
//     I.e., create action would map to a method named create.
// reduce(state, { action, data }) - It is possible to implement a custom method known as reduce. This mimics the way Redux reducers work.
//     The idea is that you'll return a new state based on the given state and payload.

export default class NoteStore {
    constructor() {
        this.bindActions(NoteActions);

        this.notes = [
            {
                id: uuid.v4(),
                task: 'Learn React'
            },
            {
                id: uuid.v4(),
                task: 'Learn Alt'
            }
        ];
    }

    create(note) {
        console.log('create note', note);
    }
    update(updatedNote) {
        console.log('update note', updatedNote);
    }
    remove(id) {
        console.log('delete note', id);
    }
}