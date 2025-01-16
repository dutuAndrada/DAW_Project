@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

nav {
  margin-bottom: 20px;
  background-color: #f8f9fa; 
  padding: 10px; 
  border-bottom: 1px solid #eee; 
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #673ab7; 
  font-family: 'Roboto Mono', monospace; 
  font-weight: 400; 
  transition: color 0.3s ease, font-weight 0.3s ease; 
}

nav a:hover {
  color: #512da8; 
}

nav a.router-link-active {
  font-weight: 700; 
  color: #311b92; 
}