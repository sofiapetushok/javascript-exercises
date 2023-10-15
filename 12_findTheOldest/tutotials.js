const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

console.log(people);
const surnames = ['Doe', 'Smith', 'Johnson'];
const peopleWithFullNames = people.map((person, index) => {
    const surname = surnames[index] || 'Unknown';
    return {...person, fullname: `${person.name} ${surname}`};
});
console.log(peopleWithFullNames);

  // DARK MODE PREFERENCE
  // const modeToggle = document.getElementById("modeToggle");
  // const body = document.body;
  
  // // Check if the user's preference is stored in localStorage
  // const userMode = localStorage.getItem("userMode");
  
  // if (userMode === "dark") {
  //   enableDarkMode();
  //   modeToggle.checked = true;
  // } else if (userMode === "light") {
  //   enableLightMode();
  //   modeToggle.checked = false;
  // } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //   // User prefers dark mode
  //   enableDarkMode();
  // } else {
  //   // User prefers light mode
  //   enableLightMode();
  // }
 
  
  // // Toggle mode when the switch is clicked
  // modeToggle.addEventListener("change", () => {
  //   if (modeToggle.checked) {
  //     enableDarkMode();
  //     localStorage.setItem("userMode", "dark");
  //   } else {
  //     enableLightMode();
  //     localStorage.setItem("userMode", "light");
  //   }
  // });
  
  // function enableDarkMode() {
  //   body.classList.add("dark-theme");
  // }
  
  // function enableLightMode() {
  //   body.classList.remove("dark-theme");
  // }


