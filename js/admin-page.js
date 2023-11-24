const addProjectButton = document.querySelector('.admin-panel__add-project-button');
const projectForm = document.querySelector('.project-form');
const closeProjectFormButton = document.querySelector('.project-form__close-button');
const changeProjectDataButtons = document.querySelectorAll('.project-card__edit-button');

function displayProjectForm() {
  projectForm.style.display = 'block';
}

function hideProjectForm() {
  projectForm.style.display = 'none';
}

addProjectButton.addEventListener('click', displayProjectForm);
closeProjectFormButton.addEventListener('click', hideProjectForm);

changeProjectDataButtons.forEach(function(button) {
  button.addEventListener('click', displayProjectForm);
});