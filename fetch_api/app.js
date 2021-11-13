document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPI);

// Get local text file data
function getText() {
  fetch('test1.txt')
    .then(function (response) {
      return response.text();
    })
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => {
      document.getElementById('output').innerHTML = err;
    });
}

// Get local json data
function getJSON() {
  fetch('posts.json')
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      let output = '';
      let list = document.createElement('ul');
      posts.forEach((post) => {
        output += `
          <li>${post.title}</li>
        `;
      });
      list.innerHTML = output;
      document.getElementById('output').appendChild(list);
    })
    .catch((err) => {
      document.getElementById('output').innerHTML = err;
    });
}

// Get API data
function getAPI() {
  fetch('https://api.github.com/users')
    .then((res) => {
      return res.json();
    })
    .then((users) => {
      let output = '';
      let list = document.createElement('ul');
      users.forEach((user) => {
        output += `
        <li>${user.login}</li>
      `;
      });
      list.innerHTML = output;
      document.getElementById('output').appendChild(list);
    })
    .catch((err) => {
      document.getElementById('output').innerHTML = err;
    });
}
