# VoteTracker

VoteTracker is designed to keep citizens informed about legislative activity by allowing them to browse, follow, and comment on legislators, bills, issues, and legislators' votes. 

Data for this project is pulled from the [Pro Public Congress API](https://projects.propublica.org/api-docs/congress-api/).

This repo is for the frontend ReactJS-based application. The backend, using Ruby, ActiveRecord, and Sinatra, is located [here](https://github.com/mattIshida/phase-3-project-backend).

## Launching the Backend
- Clone down the backend from the repo linked above.
- You will need a free API key to pull in the seed data. Get one [here](https://www.propublica.org/datastore/api/propublica-congress-api). 
- Create a file in the main project folder called "private.rb"
- The contents of the private.rb file should be the following, with the string in double-quotes replaced by your API key: 
```API_KEY = "yourNewProPublicaCongressAPIkey"```
- In the project folder:
    - Run ```bundle install``` to install Ruby dependencies
    - Run ```bundle exec rake db:migrate``` to set up SQLite dbs 
    - Run ```bundle exec rake db:seed```
    - Run ```bundle exec rake server``` to start the backend server

## Launching the Frontend
- Clone down the frontend from this repo.
- In the project folder:
    - Run ```npm install``` to install Node dependencies
    - Run ```npm server``` to start the frontend server.

## Features
Users can:
- Browse legislators, bills, and issues
- Follow legislators, bills, and issues
- Followed items show up on the user's MyVoteTracker page for quick reference
- Comment on bills

## Screenshots
Coming soon

## Tech

Frontend: ReactJS, React Bootstrap

Backend: Ruby, SQLite, ActiveRecord, Sinatra

## Created by
Matt Ishida
- [LinkedIn]()
- [Github]() 

