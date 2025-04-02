let users = [];
let posts = [];
const contentElement = document.getElementById("content");

async function loadData() {
  const userResponse = await fetch("data/users.json");
  const userJSON = await userResponse.json();
  users = userJSON.users;

  const postResponse = await fetch("data/posts.json");
  const postJSON = await postResponse.json();
  posts = postJSON.posts;

  renderContent();
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createPostElement(post, user) {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  const headerElement = document.createElement("div");
  headerElement.classList.add("padding", "header");
  postElement.appendChild(headerElement);

  const profileImage = document.createElement("img");
  profileImage.classList.add("profile-image");
  profileImage.src = user.profile_image;
  headerElement.appendChild(profileImage);

  const userNameElement = document.createElement("h4");
  userNameElement.classList.add("padding");
  userNameElement.innerText = user.name;
  headerElement.appendChild(userNameElement);

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  return postElement;
}

function renderContent() {
  contentElement.innerHTML = "";

  for (let post of posts) {
    const user = getUserById(post.user_id);
    const postElement = createPostElement(post, user);
    contentElement.appendChild(postElement);
  }
}

loadData();
