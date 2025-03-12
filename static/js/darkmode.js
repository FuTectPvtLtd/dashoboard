let darkmode = localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch')

const enableDarkmode = ()  => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.removeItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeswitch.addEventListener("click", () =>{
  darkmode = localStorage.getItem('darkmode')
  darkmode !=="active" ? enableDarkmode() : disableDarkmode()
 })



 function toggleTheme() {
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    lightIcon.style.display = 'none';  // Hide sun icon
    darkIcon.style.display = 'inline'; // Show moon icon
  } else {
    lightIcon.style.display = 'inline'; // Show sun icon
    darkIcon.style.display = 'none';  // Hide moon icon
  }
}





// const disableDarkmode = () => {
//   document.body.classList.remove('dark-mode'); // Ensure consistency
//   localStorage.removeItem('darkmode'); // Correct storage removal
// }

// // Apply dark mode if previously enabled
// if (darkmode === "active") enableDarkmode();

// themeswitch.addEventListener("click", () => {
//   darkmode = localStorage.getItem('darkmode');
//   if (darkmode !== "active") {
//     enableDarkmode();
//   } else {
//     disableDarkmode();
//   }
//   toggleTheme(); // Call toggleTheme to update the icons
// });

// function toggleTheme() {
//   const lightIcon = document.getElementById('light-icon');
//   const darkIcon = document.getElementById('dark-icon');

//   if (document.body.classList.contains('dark-mode')) {
//     lightIcon.style.display = 'inline';  // Show sun icon
//     darkIcon.style.display = 'none';     // Hide moon icon
//   } else {
//     lightIcon.style.display = 'none';   // Hide sun icon
//     darkIcon.style.display = 'inline';  // Show moon icon
//   }
// }
