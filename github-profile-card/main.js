class GithubProfileCard extends HTMLElement {
  constructor() {
    super();
    console.log('GithubProfileCard');
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    const login = this.attributes.login.value;

    this.shadow.appendChild(GithubProfileCard.DOCUMENT.querySelector('template').content.cloneNode(true));
    this.fetchProfileData(login);
    this.fetchRepositoriesData(login)
  }

  fetchProfileData(login) {
    //const userURL = `https://api.github.com/users/${login}`;
    const userURL = 'mocks/profile.json';
    console.log('fetching profile', userURL);

    fetch(userURL, {method: 'GET'})
      .then(response => {
        return response.json();
      })
      .then(profile => {
        let $shadow = this.shadow;

        $shadow.querySelector('#avatar').src = profile.avatar_url;
        $shadow.querySelector('#name').innerHTML = profile.name;
        $shadow.querySelector('#bio').innerHTML = profile.bio;
        $shadow.querySelector('#location').innerHTML = profile.location;
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchRepositoriesData(login) {
    const reposURL = 'mocks/repos.json';
    console.log('fetching repos', reposURL);

    fetch(reposURL, {method: 'GET'})
      .then(response => {
        return response.json();
      })
      .then(repos => {
        repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
        repos = repos.slice(0, 9);
        const rr = repos.reduce((acc, item) => {
          acc.push(`<li><span class="stars">${item.stargazers_count}</span> <span class="repo-name">${item.name}</span></li>`);
          return acc;
        }, []);

        this.shadow.querySelector('#repos').innerHTML = rr.join(' ');

      })
      .catch(error => {
        console.error(error);
      })
  }
}

GithubProfileCard.DOCUMENT = document.currentScript.ownerDocument;

window.customElements.define('github-profile-card', GithubProfileCard);