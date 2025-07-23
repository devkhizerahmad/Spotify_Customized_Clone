let songsList = [
  {
    title: " khizer Ocean Breeze - Instrumental",
    info: "Feel the calmness of sea winds and melodies",
    img: "./assets/card4img.jpeg",
  },
  {
    title: "City Lights - Chillhop",
    info: "Urban vibes with soft beats",
    img: "./assets/card3img.jpeg",
  },
  {
    title: "Morning Rise - Acoustic",
    info: "Wake up with peaceful tunes",
    img: "./assets/card2img.jpeg",
  },
  {
    title: "Ocean Breeze - Instrumental",
    info: "Feel the calmness of sea winds and melodies",
    img: "./assets/card4img.jpeg",
  },
  {
    title: " khizer City Lights - Chillhop",
    info: "Urban vibes with soft beats",
    img: "./assets/card3img.jpeg",
  },
  {
    title: "Morning Rise - Acoustic",
    info: "Wake up with peaceful tunes",
    img: "./assets/card2img.jpeg",
  },
  {
    title: "Ocean Breeze - Instrumental",
    info: "Feel the calmness of sea winds and melodies",
    img: "./assets/card4img.jpeg",
  },
  {
    title: "City Lights - Chillhop",
    info: "Urban vibes with soft beats",
    img: "./assets/card3img.jpeg",
  },
  {
    title: "Morning Rise - Acoustic",
    info: "Wake up with peaceful tunes",
    img: "./assets/card2img.jpeg",
  },
  {
    title: "Ocean Breeze - Instrumental",
    info: "Feel the calmness of sea winds and melodies",
    img: "./assets/card4img.jpeg",
  },
  {
    title: "City Lights - Chillhop",
    info: "Urban vibes with soft beats",
    img: "./assets/card3img.jpeg",
  },
  {
    title: "City Lights - Chillhop",
    info: "Urban vibes with soft beats",
    img: "./assets/card3img.jpeg",
  },
];

const DuplicateOfSongsList = [...songsList];
//localStorage.setItem(songsList, songsList.title);
//localStorage.setItem(songsList, songsList.info);
//localStorage.setItem(songsList, songsList.img);
//let editBtn;

let editBtn;
indexii = 0;
let submitBtn;
let searchInput;
let showhideCard;

//submit new song form variables
let imgInput;
let titleInput;
let infoInput;

const container = document.getElementById("cards-container");

//show and hide button

const createShowHideButton = () => {
  const showhideButton = document.createElement("button");
  showhideButton.className = "show-hide-btn";
  showhideButton.textContent = "Hide Cards";
  showhideButton.style.cursor = "pointer";
  showhideButton.classList.add("badge");
  return showhideButton;
};

// Function to create the "Add Song +" button
const createAddButton = () => {
  const addButton = document.createElement("button");
  addButton.className = "add-Button";
  addButton.textContent = "Add Song +";
  addButton.style.cursor = "pointer";
  addButton.classList.add("badge");
  return addButton;
};
//-  button which is del the card

const createDelButton = () => {
  const delButton = document.createElement("button");
  delButton.className = "del-Button";
  delButton.textContent = "Del Song -";
  delButton.style.cursor = "pointer";
  delButton.classList.add("badge");
  return delButton;
};

const showhideButton = createShowHideButton();
const addButton = createAddButton();
const delButton = createDelButton();

//updated card to show in DOM
const updatedCards = () => {
  container.innerHTML = "";
  songsList.forEach((song) => {
    const card = document.createElement("div");
    card.className = "card";

    const renderImg = document.createElement("img");
    renderImg.className = "card-img";
    renderImg.src = song.img;

    const renderTitle = document.createElement("p");
    renderTitle.className = "card-title";
    renderTitle.textContent = song.title;

    const renderInfo = document.createElement("p");
    renderInfo.className = "card-info";
    renderInfo.textContent = song.info;

    editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.cursor = "pointer";
    editBtn.classList = "badge edit-Btn";

    editBtn.addEventListener("click", () => {
      console.log("Edit button clicked!");
      console.log("Song Title:", song.title);
      console.log("Song Info:", song.info);
      console.log("Song Image:", song.img);
    });

    card.appendChild(renderImg);
    card.appendChild(renderTitle);
    card.appendChild(renderInfo);
    card.appendChild(editBtn);

    container.appendChild(card);
  });
};


//add card button to add the card in songsList array from duplicate array
const addCardButton = () => {
  if (songsList[indexii]?.title !== DuplicateOfSongsList[indexii]?.title) {
    songsList.push(DuplicateOfSongsList[indexii]);
    indexii++;
    console.log("songs already");
  } else {
    indexii++;

    console.log("in esle block");
  }
  updatedCards();

  console.log("after songsList array + : ", songsList);
  console.log("after Duplicate array + : ", DuplicateOfSongsList);

  if (songsList.length == DuplicateOfSongsList.length) {
    console.log("you cannot added more song");
    addButton.disabled = false;
  }
};


//del card button to delete card from only songsList
const delCardButton = () => {
  console.log("index value before click: ");

  if (songsList.length > 0) {
    console.log("song deleted");
    songsList.pop();

    // if (songsList.length === 0) {
    //   delButton.disabled = false;
    //   addButton.disabled = true;
    // }
  } else {
    console.log("shift to add button");
    // delButton.disabled = false;
    // addButton.disabled = true;
  }

  console.log("songsList in - : ", songsList);
  console.log("Duplicated - : ", DuplicateOfSongsList);
  updatedCards();
};


if (container) {
  container.before(showhideButton);
  container.before(addButton);
  container.before(delButton);
}


const showOrHideCards = () => {
  console.log("show hide card 1 : ", showhideCard);
  if (showhideCard) {
    //console.log("im aa if");
    container.style.display = "none";
    showhideButton.textContent = "Show Cards";
    showhideCard = false;
  } else {
    //console.log("im a else");
    container.style.display = "block";
    showhideButton.textContent = "Hide Cards";
    showhideCard = true;
  }
  console.log("show hide card 2: ", showhideCard);
};


//search bar to filter the card through tittle

// Now get the correct nav bar container
const getNavBarForSearchBar = document.getElementsByClassName("sticky-nav-icons")[0];



const createSearchBar = () => {
  const searchContainer = document.createElement("div");
  searchContainer.className = "nav-option search-bar";

  const searchIcon = document.createElement("i");
  searchIcon.className = "fa-solid fa-magnifying-glass";

  searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search song";

  // Append icon and input to container
  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);


  getNavBarForSearchBar.appendChild(searchContainer);

  
  //return { searchContainer, searchInput };
};

const getSearchBar = createSearchBar();

const searchSongsBar = (e) => {
  if (e.key === "Enter") {
    const searchTerm = e.target.value.trim().toLowerCase();
    console.log("User searched:", searchTerm);

    songsList = DuplicateOfSongsList.filter((card) =>
      card.title.toLowerCase().includes(searchTerm)
    );

    console.log("title find added ", songsList);
    updatedCards();
  }
};


// // to show all cards after the input bar clear by the use
// const updatingInput=(e)=> {
//   console.log("enter in updating input function");
//   if (e.target.value.trim() === "") {
//     console.log("enter in if statement of updating input function");
//     //DuplicateSongsList.length = 0;
//     //DuplicateSongsList.push(...songsList);
//     updatedCards();
//   }
// }

// searchInput.addEventListener("input", updatingInput);

//making form for user enter the songsList tittle and info and img upload

const sideBar = document.querySelector(".library");
console.log("library class : ", sideBar);



const createSongForm = () => {
  const form = document.createElement("form");
  form.className = "song-form";

  const imgLabel = document.createElement("label");
  imgLabel.textContent = "Upload Image:";
  imgLabel.className = "form-label image-label";

  const imgInput = document.createElement("input");
  imgInput.type = "file";
  imgInput.accept = "image/*";
  imgInput.className = "form-input image-input";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Enter Title:";
  titleLabel.className = "form-label title-label";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Song Title";
  titleInput.className = "form-input title-input";

  const infoLabel = document.createElement("label");
  infoLabel.textContent = "Enter Info:";
  infoLabel.className = "form-label info-label";

  const infoInput = document.createElement("input");
  infoInput.type = "text";
  infoInput.placeholder = "Song Info";
  infoInput.className = "form-input info-input";

  submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "form-submit-btn";
  submitBtn.textContent = "addCardButtonSong";
  submitBtn.placeholder = "Submit song";

  form.appendChild(imgLabel);
  form.appendChild(imgInput);
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(infoLabel);
  form.appendChild(infoInput);
  form.appendChild(submitBtn);

  sideBar.appendChild(form);

  //form.addEventListener("submit", submitNewSong);

  //return form;

};

const makeSongForm = createSongForm();


// Now 'form' is correctly referenced as the returned element

// Submit new song function
const submitNewSong = (e) => {
  e.preventDefault();
  
  if (imgInput.files.length === 0) {
    console.error("Image file is required.");
    return;
  }
  const newSong = {

    title: titleInput.value.trim(),
    info: infoInput.value.trim(),
    img: URL.createObjectURL(imgInput.files[0]),
  };
  DuplicateOfSongsList.unshift(newSong);
  updatedCards();
  imgInput.value = "";
  titleInput.value = "";
  infoInput.value = "";
};
// Call createSongForm to the form is created
createSongForm();

//document.addEventListener("DOMContentLoaded", () => { searchInput.addEventListener("keydown", searchSongsBar);  });
//document.addEventListener("DOMContentLoaded", () => { searchInput.addEventListener("keydown", searchSongsBar);  });
document.addEventListener("DOMContentLoaded", () => { searchInput.addEventListener("keydown", searchSongsBar);  });
document.addEventListener("DOMContentLoaded", () => { updatedCards();});
//document.addEventListener("DOMContentLoaded", () => {  updatedCards();});
showhideButton.addEventListener("click", showOrHideCards);
submitBtn.addEventListener("click", submitNewSong);
delButton.addEventListener("click", delCardButton);
addButton.addEventListener("click", addCardButton);
