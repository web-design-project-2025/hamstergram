let users = [];
let posts = [];

async function loadData() {
  const userResponse = await fetch("data/users.json"); //dont need to create variable, just for clarification
  const userJSON = await userResponse.json();
  users = userJSON.users; //separate content from your actual logic code
  //console.log(userJSON);

  const postResponse = await fetch("data/posts.json");
  const postJSON = await postResponse.json();
  posts = postJSON.posts;
  //console.log(postJSON);

  renderContent();
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function createPostElement(post, user) {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  const headerElement = document.createElement("div");
  headerElement.class.add("padding", "header");
  postElement.appendChild(headerElement);

  const profileImage = document.createElement("img");
  profileImage.src = user.profile - image;
  headerElement.appendChild(profileImage);

  const imageElement = document.createElement("img");
  imageElement.src = post.image;
  postElement.appendChild(imageElement);

  return postElement;
}

function renderContent() {
  contentElement.innerHTML = ""; //empty everything

  for (let post of posts) {
    const user = getUserById(post.user_id); //we can stick to lowerCamelCase but it common when json comer from servetr that its written differently
    const postElement = createPostElement(post, user);
    contentElement.appendChild(postElement);
  }
}

loadData();
