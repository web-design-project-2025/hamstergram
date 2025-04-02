let users = [];
let posts = [];

async function loadData() {
  const userResponse = await fetch("data/users.json");
  const userJSON = await userResponse.json();
  users = userJSON.users;

  const postResponse = await fetch("data/posts.json");
  const postJSON = await postResponse.json();
  posts = postJSON.posts;
}

function getUserById(id) {
  return users.find((user) => user.id === id);
}

loadData();
