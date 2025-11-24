let formToDelete = null; // Will hold the exact form that triggered the modal

// Create the modal instance once
const deleteModal = document.querySelector(".deletePopup");
const finalDeleteButton = document.querySelector(".finalDeleteButton");
const cancelDeleteButton = document.querySelector(".cancelDeleteButton");

// 1. Catch ANY delete form submission
document.addEventListener('submit', function (e) {
    console.log(e.target.classList.contains('delete-workout-form'));
    if (!e.target.classList.contains('delete-workout-form')) return;

    e.preventDefault(); // Stop the form
    
    formToDelete = e.target; // Remember exactly which form was clicked
    deleteModal.classList.add("show"); // Show our delete modal
});

finalDeleteButton.addEventListener('click', function () {
    if (formToDelete) {
        formToDelete.submit(); // Submit to delete the right element
        deleteModal.classList.remove("show");
    }
});

cancelDeleteButton.addEventListener("click", () => {
    deleteModal.classList.remove("show"); 
})