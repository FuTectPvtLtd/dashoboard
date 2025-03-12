// function setRandomPieChart() {
//   const color1 = getRandomColor('red');
//   const color2 = getRandomColor('yellow');
//   document.querySelector('.pie').style.backgroundImage = 
//     ` conic-gradient( from 30deg,
//     ${color1} 0% 40% ,
//     ${color2}40% 85%
//    );`;
// }

// setRandomPieChart(); 


  // document.addEventListener("DOMContentLoaded", function() {
  //   const startDate = document.getElementById("start-date");
  //   const endDate = document.getElementById("end-date");

  //   startDate.onfocus = () => startDate.type = "date";
  //   startDate.onblur = () => { if (!startDate.value) startDate.type = "text"; };

  //   endDate.onfocus = () => endDate.type = "date";
  //   endDate.onblur = () => { if (!endDate.value) endDate.type = "text"; };
  // });

 
 
 
 
//  function setActive(clickedItem) {
//     let items = document.querySelectorAll('ul li a');
//     items.forEach(item => item.classList.remove('active'));
//     clickedItem.classList.add('active');
// }




  // document.addEventListener('DOMContentLoaded', () => {
  //   const menuItems = document.querySelectorAll('.new2 ul li');

  //   menuItems.forEach(item => {
  //     item.addEventListener('click', () => {
  //       // Remove 'active' class from all items
  //       menuItems.forEach(i => i.classList.remove('active'));
        
  //       // Add 'active' class to the clicked item
  //       item.classList.add('active');
  //     });
  //   });
  // });

  // document.addEventListener('DOMContentLoaded', () => {
  //   const menuItems = document.querySelectorAll('.d ul li');

  //   menuItems.forEach(item => {
  //     item.addEventListener('click', () => {
  //       // Remove 'active' class from all items
  //       menuItems.forEach(i => i.classList.remove('active'));
        
  //       // Add 'active' class to the clicked item
  //       item.classList.add('active');
  //     });
  //   });
  // });

//   function toggleMenu() {
//     var menu = document.getElementById('sidebar');
//     menu.classList.toggle('open'); // Toggles the 'open' class
//   }
//   function toggleMenu() {
//     document.querySelector(".nav-menu").classList.toggle("active");
// };



// const hamburger = document.getElementById("hamburger");
// const menu = document.getElementById("menu");

// hamburger.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });


// ======================hamburger========================





// ========================hamburger closed==========================
   


document.addEventListener("DOMContentLoaded", function () {
        let startDate = document.getElementById("start-date");
        let endDate = document.getElementById("end-date");

        startDate.addEventListener("change", function () {
            endDate.min = startDate.value; // Prevents selecting an end date before start date
        });
    });




  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.new2 ul li');

    menuItems.forEach(item => {
      const link = item.querySelector('a');
      const currentUrl = window.location.href;

      // Check if the link's href matches the current URL
      if (currentUrl.includes(link.getAttribute('href'))) {
        item.classList.add('active');
      }

      item.addEventListener('click', () => {
        // Remove 'active' class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Add 'active' class to the clicked item
        item.classList.add('active');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.d ul li');

    menuItems.forEach(item => {
      const link = item.querySelector('a');
      const currentUrl = window.location.href;

      // Check if the link's href matches the current URL
      if (currentUrl.includes(link.getAttribute('href'))) {
        item.classList.add('active');
      }

      item.addEventListener('click', () => {
        // Remove 'active' class from all items
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Add 'active' class to the clicked item
        item.classList.add('active');
      });
    });
  });