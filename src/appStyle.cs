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
.course-card {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.course-card {
    transition: transform 0.2s; /* Adaugă o tranziție pentru efectul hover */
}
.course-card:hover {
    transform: scale(1.05); /* Mărește cardul cu 5% la hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adaugă o umbră mai pronunțată */
}