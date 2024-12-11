const input = document.getElementById('userInput');
const showndata1 = document.getElementById('shownData');
const search = async () => {
    const url = `https://api.github.com/users/${input.value}` 
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    showndata1.innerHTML =`
    <div class="card-body">
               <img src="${data.avatar_url}" class="card-img-top" alt="${data.login}">
                <h1>${input.value}</h1>
              <p class="card-text">${data.bio}</p>
            </div>
          </div>
    `

  };

  search()