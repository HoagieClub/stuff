# HoagieStuff
![Showcase of Hoagie Stuff](https://stuff.hoagie.io/showcase.gif)

Everything on campus, from bulletin to sales, in one place. 

## Setup
NOTE: You will need a `.env.local` file from a Hoagie Project coordinator to run most of the features. Place it in your main directory. You will also need Node.js, NPM, and Yarn, there are plenty of tutorials online on how to install these.
Assuming you have those tools and files, do the following to install dependencies:
```
yarn
```
and finally, run the server with:
```
yarn dev
```
As simple as that! We use `yarn` for everything related to dependencies so **do NOT use `npm install`** when you are trying to add new packages. Instead use `yarn add`.

## VSCode
We use VSCode for development. Please install the following packages:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

ESLint is particularly important, if everything is installed correctly, it will allow you to see style errors inside the editor which we use to make sure our code is tidy and consistent throughout the codebase (same as output from `yarn lint`).
## Contribution
**Always create new branches when adding new features.** For example, let's say I am adding a delete button. I would do:
```
# Switch to new branch called delete-button
git checkout -b delete-button
```

When the main branch get updated, you want to run the following:
```
# If there were any new commits, rebase your development branch, for example delete-button
git checkout delete-button
git pull --rebase main
```
You may have to deal with merge conflicts; this will be visible and easier to deal with in VSCode. Here's a [short video about how to do it](https://www.youtube.com/watch?v=QmKdodJU-js).
