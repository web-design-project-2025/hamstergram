let users = [];
let posts = [];

async function loadData() {
  const userResponse = await fetch("data/users.json");
  const userJSON = await userResponse.json();
  users = userJSON.users;

  const postResponce = await fetch("data/posts.json");
  const postResponce = await postResponce.json();
  posts = postJSON.users;
}

loadData();
