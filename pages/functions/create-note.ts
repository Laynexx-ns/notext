import { $fetch } from "ofetch";
import Swal from "sweetalert2";

export const createNote = async (updateNotesData: Function) => {
    if (!process.client) return;

    const userId = useCookie('userId').value;
    if (!userId) {
        console.error('User ID not found');
        return Swal.fire({
            icon: 'error',
            text: 'User ID is missing',
        });
    }

    console.log(userId);
    console.log('qwe');

    try {
        const resp = await $fetch('/api/note', {
            method: 'POST',
            body: {
                userId: userId,
                title: "New note",
                text: "Your awesome text",
            },
        });
        updateNotesData();

    } catch (error) {
        Swal.fire({
            icon: "error",
            text: "Failed to create note",
        });
        console.error("Create note error:", error);
    }
};
