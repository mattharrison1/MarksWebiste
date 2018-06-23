**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).


# Mark's website project!

This project is written in pure JS and SCSS with HTML5.   **Bootstrap** is chosen to be the library for ``JS`` and ``CSS``. If you want to learn more about Bootstrap, you can watch this youtube video.

[![Bootstrap](http://img.youtube.com/vi/hnCmSXCZEpU/0.jpg)](http://www.youtube.com/watch?v=hnCmSXCZEpU "Bootstrap")


# Installation
Install [NodeJS](https://nodejs.org/en/) if you have not already. You can if installed, the current version by typing command
```
node -v
```
If there is any issue with the installation, try to resolve it by searching online. May be it needs Ruby gem to be installed on your *laptop*.

# Folder structure
Names are self explanatory for putting the right resource file in there. This makes easier to manage and separate files.
```markup
/src
    /assets
    /css
    /js
    /scss
```

At this point you must have some idea of writing HTML tags with **Bootstrap** classes . We will uses **JQuery** as well but for now Bootstrap+markup is fine.

We will write all our markup in `src/index.html` file to begin with. In later stages all pages will have separate directory of their own. 

We are not going to write styles by hand. **SCSS** is very simple and similar to `CSS` and it is time to upgrade if required. For vector icons we are using **FontAwesome**. It is awesome and work well with Bootstrap.  SCSS also makes it easy to apply themes in Bootstrap. This is a simple example of changing main theme colours. It will apply to navigation bar, buttons, etc; 
```css
// Variable Overrides 
$theme-colors: (
  "primary": #d95700
);

$body-bg: #ededed;
// Bootstrap Sass Imports
@import "node_modules/bootstrap/scss/bootstrap";
```
## Build 
### Setup
1. Install gulp and other global tools `npm install -g gulp-cli`
2. Go to your project folder `cd to-project-folder/Website` 
3. Install build dependencies `npm install`

### Development
Run the `gulp` command. If it ran successfully then your default browser will open with address `http://localhost:3000` The page will load itself as you `edit+save` any file or add anything to the `./src` folder. You can add your JavaScript code to `./src/js/main.js` file. and SCSS to `styles.scss` file. There is a file for CSS libraries in `./src/css` folder.

If there are any issues then google the error description or ask for help!

### Deployment
```
Let's worry about tht letter
```# Welcome to Mark's website project!

This project is written in pure JS and SCSS with HTML5.   **Bootstrap** is chosen to be the library for ``JS`` and ``CSS``. If you want to learn more about Bootstrap, you can watch this youtube video.

[![Bootstrap](http://img.youtube.com/vi/hnCmSXCZEpU/0.jpg)](http://www.youtube.com/watch?v=hnCmSXCZEpU "Bootstrap")


# Installation
Install [NodeJS](https://nodejs.org/en/) if you have not already. You can if installed, the current version by typing command
```
node -v
```
If there is any issue with the installation, try to resolve it by searching online. May be it needs Ruby gem to be installed on your *laptop*.

# Folder structure
Names are self explanatory for putting the right resource file in there. This makes easier to manage and separate files.
```markup
/src
    /assets
    /css
    /js
    /scss
```

At this point you must have some idea of writing HTML tags with **Bootstrap** classes . We will uses **JQuery** as well but for now Bootstrap+markup is fine.

We will write all our markup in `src/index.html` file to begin with. In later stages all pages will have separate directory of their own. 

We are not going to write styles by hand. **SCSS** is very simple and similar to `CSS` and it is time to upgrade if required. For vector icons we are using **FontAwesome**. It is awesome and work well with Bootstrap.  SCSS also makes it easy to apply themes in Bootstrap. This is a simple example of changing main theme colours. It will apply to navigation bar, buttons, etc; 
```css
// Variable Overrides 
$theme-colors: (
  "primary": #d95700
);

$body-bg: #ededed;
// Bootstrap Sass Imports
@import "node_modules/bootstrap/scss/bootstrap";
```
## Build 
### Setup
1. Install gulp and other global tools `npm install -g gulp-cli`
2. Go to your project folder `cd to-project-folder/Website` 
3. Install build dependencies `npm install`

### Development
Run the `gulp` command. If it ran successfully then your default browser will open with address `http://localhost:3000` The page will load itself as you `edit+save` any file or add anything to the `./src` folder. You can add your JavaScript code to `./src/js/main.js` file. and SCSS to `styles.scss` file. There is a file for CSS libraries in `./src/css` folder.

If there are any issues then google the error description or ask for help!

### Deployment
```
Let's worry about tht letter
```
