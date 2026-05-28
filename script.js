const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme')

  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }
});


//When the browser loads the light mode should be on by default without the sun icon

// when i clik on the moon it turns to dark mode

// when i click on the sun, it show turn back to light mode.

//when i click on the all button all the sections should show.

//when i click on the active the ones with the check buttons shows.

//when i click on the inactive the one with the unchecked buttons shows.
