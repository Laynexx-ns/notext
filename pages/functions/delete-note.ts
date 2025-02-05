import {$fetch} from "ofetch";

export const deleteNote = async (noteId: string, updateNotesData: Function) => {
    console.log('work');
    const resp = await $fetch('api/note', {
        method: 'DELETE',
        body: {
            noteId: noteId,
        }
    })
    updateNotesData();

    console.log(resp);
}