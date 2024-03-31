const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Change Favicon
function changeFavicon(mode) {
  const favicon = document.getElementById('favicon');
  if (mode === DARK_THEME) {
    favicon.href = 'img/squash.png';
  } else {
    // Use the light mode favicon by default
    favicon.href = 'img/squish.png';
  }
}

function toggleDarkLightMode(mode) {
  nav.style.backgroundColor = mode === DARK_THEME ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = mode === DARK_THEME ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // Selecting the toggle text element
  const toggleText = toggleIcon.querySelector('.toggle-text');

  // Update text content based on mode
  toggleText.textContent = mode === DARK_THEME ? 'Dark Mode' : 'Light Mode';

  // Selecting the toggle icon element
  const iconImg = toggleIcon.querySelector('.icon-theme-switcher');

  // Update icon source based on mode
  iconImg.src = mode === DARK_THEME ? 'img/squash.png' : 'img/squish.png';

  // Changing images
  mode === DARK_THEME ? imageMode('dark') : imageMode('light');
  
  // Change favicon
  changeFavicon(mode);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}