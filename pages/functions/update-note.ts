import {$fetch} from "ofetch";
import Swal from "sweetalert2";

export const updateNote = async (noteId: Number, noteTitle: String, noteText: String, updateNotesData: Function) => {
    try{
        const resp = await $fetch('/api/note', {
            method: 'PATCH',
            body:{
                noteId,
                title: noteTitle,
                text: noteText,
            }
        })
        updateNotesData();
    } catch(e){
        Swal.fire({
          text: "Failed to update note",
        })
    }

}