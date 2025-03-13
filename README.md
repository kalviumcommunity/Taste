## Project Title: TasteTwist: Unlikely Food Combos

## Project Overview:

TasteTwist is a fun and interactive platform where users can share and discover bizarre food combinations that surprisingly taste great. From French fries dipped in ice cream to pickles paired with peanut butter, this project allows users to contribute their unique culinary creations and vote on others. It’s a lighthearted space to explore and discuss weird food pairings with a community of food lovers.

## Key Features:

## User Authentication: 

Users can create an account and log in to share their food combinations and vote on others.

## Submit Food Combinations: 

Users can submit their own weird food pairings with a description and optional image.

## Voting System: 

Users can upvote or downvote food combinations based on their interest or personal experience.

## User-Specific Lists: 

Each user has a personalized feed that displays combinations based on their interactions and votes.

## Comment Section: 

Users can comment on food combinations to share thoughts or suggestions.

## Search & Filter: 

Users can search for specific food pairings or filter by categories (e.g., sweet, savory, or snack combos).

## Profile Pages: 

Each user has a profile that shows their submitted food combinations, comments, and upvoted recipes.

## Tech Stack


## Frontend: 

React (Vite for faster build), Tailwind CSS (for styling), React Router (for navigation)

## Backend:

Node.js with Express (for API development)

## Database: 

MongoDB (for storing user data and food combinations)

**Authentication:**JWT (JSON Web Tokens) for secure user authentication

## Cloud Storage: 

Cloudinary (for storing images of food combinations)git remote add origin https://github.com/kalviumcommunity/S76_Taste.git

GitHub link => https://github.com/kalviumcommunity/Taste


## ASAP-iNITIALIZE WITH README

PULL REQUEST:
-------------

A Pull Request (PR) is a way of asking to merge the changes you made in your branch into the main project. It’s like saying, "I have finished my work, can you review it and add it to the main project?"


Assignment | ASAP Project - Initialize with Readme
---------------------------------------------------

Task
------
Create a Branch Locally
Create a File called 'README.md'
Write your project title, idea & features in the README
Commit Changes and Push the Branch to GitHub
Create a new PR with that Branch
Submit the PR Link
Request an AI review by @CodiumAI-Agent /review - you need to copy paste this in your PR comments, which will generate AI review.


cmd:
----

https://github.com/kalviumcommunity/TasteTwist 

need to create a main branch 1st

create a README.md file in that give text something 

README.md=> Hi


1. git clone https://github.com/kalviumcommunity/TasteTwist.git

2. cd TasteTwist

3. git branch

4. git checkout -b initialize-with-readme

5. git add README.md

6. git commit -m "added"

7. git push origin initialize-with-readme

then go to the GitHub (https://github.com/kalviumcommunity/TasteTwist) and  compare and new pull request has been created click that and give the title and description for that

ex 
Title:
    Added a  initialize-with-readme branch with the README.file

Descriptiion:
    In the README file it includes

Project Title
Project Overview
Key Features
Tech Stack

then give the command @CodiumAI-Agent /review
                      ------------------------
in the comment box (down of the page) after that add the link for submission

@CodiumAI-Agent /review:
-----------------------
  - The last 7th line, Request an AI review by @CodiumAI-Agent /review, means that you are asking an AI tool called CodiumAI-Agent to review your Pull Request (PR).

  -  We use CodiumAI in PRs because it reviews the specific code changes and gives helpful feedback before merging


Github PR link:

https://github.com/kalviumcommunity/TasteTwist/pull/4

Vedio link:

you can use goggle meet to record a vedio
 in the 3rd onr layouts if you go there is a option to record click that after few minutes you get that vedio in mail

 open the recording in that there will be share option click that and give share to kalvium.community and copy the link and paste it


Codium AI feedback:

⏱️ Estimated effort to review: 1 🔵⚪⚪⚪⚪
🧪 No relevant tests
🔒 No security concerns identified
⚡ No major issues detected

Actions taken on feedback:
nothing(feedback is good)
if there is no action taken give NA



## ASAP-SET UP DEV ENVIRONMENT

open already created folder for asap (ASAP TASTETWIST NEW DEMO)

cd Taste

git checkout -b dev

npm init

npm init -y

npm i express


create .gitigonre file and add these 2

node_modules/
package-lock.json


git add package.json

git commit -m "Added package.json file"


git add .gitignore

git commit -m "added .gitigonre file"

git push origin dev

## ASAP Project - Endpoint

open already created folder for asap (ASAP TASTETWIST NEW DEMO)

- cd Taste

- git checkout -b endpoint

create server.js

- git add server.js

- git commit -m "added server.js"

- git add .gitignore

- git commit -m "added .gitignore file"

- git push origin endpoint
## Deployment Link:
## https://asap-taste-twist.onrender.com/ping

## Assignment | ASAP Project - MongoDB client
## branch name (mongodbclient)
## Task 
- Create a Branch Locally
- Add the MongoDB client code (connection with your server.js)- (Don't forget to add MongoDB connection link in .env)
- Add the database connection status to the home route (the home page should respond with the database connection status)
- Commit the changes and Push the branch to github

## Deployment link using Cloudflare for frontend
## https://taste-6b3.pages.dev/

// "build": "tailwindcss -i ./src/index.css -o ./dist/output.css --minify"
