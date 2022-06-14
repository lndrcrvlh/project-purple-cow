To set up the project - 
* make sure npm and node are installed 
* run git clone https://github.com/lndrcrvlh/project-purple-cow.git
* cd into cloned directory and run npm i

once everything is set up, you can run the project from within the directory by running 'npm start'

to edit the port, edit package.json scripts value from '"start": "react-scripts start",' to '"start": "PORT=<port> react-scripts start",' where <port> is your port number 

In the dev environment, the button click calls the API twice, to fix this, remove strict mode from src/index.js