const themeToggleBtn = document.getElementById('theme-toggle');
const allSwitches = document.querySelectorAll('.toggle-switch');


themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme')

  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }
});

allSwitches.forEach(singleSwitch => {
  singleSwitch.addEventListener('click', () => {
    const parentCard = singleSwitch.closest('.sections')
    const currentStatus = parentCard.getAttribute('data-status')
    if (currentStatus === 'active') {
      parentCard.setAttribute('data-status', 'inactive');
    } else {
      parentCard.setAttribute('data-status', 'active');
    }
  })
})

const allBtn = document.querySelector('[data-filter="all"]');
const activeBtn = document.querySelector('[data-filter="active"]');
const inactiveBtn = document.querySelector('[data-filter="inactive"]')
const allCards = document.querySelectorAll('.sections');


allBtn.addEventListener('click', () => {
  allCards.forEach(card => card.classList.remove('hidden'));
});


activeBtn.addEventListener('click', () => {
  allCards.forEach(card => {
    if (card.getAttribute('data-status') === 'active') {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

});


inactiveBtn.addEventListener('click', () => {
  allCards.forEach(card => {
    if (card.getAttribute('data-status') === 'inactive') {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});


const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(clickedButton => {
  clickedButton.addEventListener('click', () => {

    // --- STEP A: FIX THE BUTTON COLORS ---
    // 1. Strip the '.active-tab' sticker off ALL 3 buttons to make them all gray
    filterButtons.forEach(btn => btn.classList.remove('active-tab'));

    // 2. Put the '.active-tab' sticker ONLY on the one button we just clicked
    clickedButton.classList.add('active-tab');


    // --- STEP B: SORT THE CARDS ---
    // 1. Figure out what type of filter was clicked (all, active, or inactive)
    const filterType = clickedButton.getAttribute('data-filter');

    // 2. Walk through all 12 cards one by one
    allCards.forEach(card => {
      // Find out if this specific card is currently active or inactive
      const cardStatus = card.getAttribute('data-status');

      // The Simple Logic Check:
      if (filterType === 'all') {
        card.classList.remove('hidden'); // Show everything if "All" is clicked
      }
      else if (filterType === cardStatus) {
        card.classList.remove('hidden'); // Show card if it matches the button type
      }
      else {
        card.classList.add('hidden');    // Hide card if it doesn't match
      }
    });
  });
});

const RemoveAllBtn = document.querySelectorAll('.remove-btn')

RemoveAllBtn.forEach(removeBtn => {
  removeBtn.addEventListener('click', () => {
    const removeCard = removeBtn.closest('.sections')
    removeCard.remove();
  })
})






