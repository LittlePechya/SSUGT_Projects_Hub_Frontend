document.addEventListener('DOMContentLoaded', function() {
  const addProjectButton = document.querySelector('.admin-panel__add-project-button');
  const projectForm = document.querySelector('.project-form');
  const closeProjectFormButton = document.querySelector('.project-form__close-button');
  const changeProjectDataButtons = document.querySelectorAll('.project-card__edit-button');
  const deleteProjectButtons = document.querySelectorAll('.project-card__delete-button');

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

  deleteProjectButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      showConfirmWndow(button);
    });
  });

  function showConfirmWndow(button) {
    const confirmMessage = 'Вы уверены, что хотите удалить проект?';
    if (confirm(confirmMessage)) {
      // Если пользователь нажал "ОК", происходит удаление проекта
      button.closest('.project-card').remove();
    } else {
      // Если пользователь нажал "Отмена", ничего не происходит
    }
  }

  const searchButton = document.querySelector('.search-section__button');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.querySelector('.search-section__input');

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  });

  function performSearch() {
    const searchText = searchInput.value.toLowerCase();

    projectCards.forEach(function(card) {
      const projectName = card.querySelector('.project-card__left-part').textContent.toLowerCase();
      if (projectName.includes(searchText)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }
});