## Requirements
Below is the stack I used in this project. Please follow the getting started section in order to make this project run.

## Stack
 - create-react-app
 - React
 - React Hooks
 - React Context API
 - React Router Dom
 - Apollo Client
 - Apollo Client Hooks
 - JSX
 - CSS Grid
 - Styled-Components
 - CSS Animations
 - CSS Media Queries
 - Mobile first responsive
 - ES6+
 - Git
 - Gitflow
 - Github
 - JSDocs
 - NPM/Yarn
 - Sublime Text
 - Font Awesome
 - Mac OS X
 - Google Chrome Incognito
 - nodejs(16.9.1)

## Getting started
In order to run this project in the browser successfully, please follow the steps below!

    1. Clone this repository.
    2. cd into `/root` i.e. `anymnd/` directory.
    3. Run `yarn/npm install` command to download and install all dependencies.
    4. To run this project use `npm start` command in command line.
    5. To build the project for production run `yarn build` command. This will build the app for production and put all the files in `/build` folder.

## Description
Above steps, in getting started section, will install all the dependencies required for this project to run.

In this task I used `React 17.0.2`. I made use of `React Hooks`, `React Context API` and `React Router DOM` for routing. I developed the entire project inside `/anymnd` folder. All the components for this project resides in `/anymnd/src/components/` folder. Every component has its own folder with its file name and alongside dependent components folders. This folder contains all the common components that will be reused in entire codebase. I implemented routing in `/app/App.js` file.

### Architecture
I had some options regarding choosing the best architecture for this app. One option was to choose simple components base architecture. I did not choose that because it could turn the project into `speghatti code` which is hard to read, maintain and scale.

`Redux`, a most widely use state management library for react, was another option. However, I did not choose that because `redux` would have overkill for such a small project. I had to write a lot of boilerplate code.

Another option I had was to use `React Context API with useReducer hook`. For such a small project I did not see this a viable option by taking care of state at reducer level. Also scaling with this approach would be more cumbersome as everytime new page/component is added will have its own reducer to take care of the state.

Another option I had was to choose React Context API alone which I chose by keeping the maintainability and scalability in context. With this approach all components have access to the global state and manipulate is directly from the context. With this we only need to add new components and pages those pages will have access to the state in context.

### Performance
In terms of performance, as I mentioned I am using create-react-app to build the project for production. So it minifies all the resources which reduces it files sizes which loads faster on the network.

### Development process
The development process that I followed for this project is `Gitflow` work flow. That means, I have two git branches `master` and `develop`. So I created a `feature branch` from `develop` branch. I develop the whole feature in that branch. Once I am done with it. I `merge` that branch with `develop` branch and push it to remote repo with `develop` branch. When I need to release new feature, I create a new branch `release` with a version number on it. Then I merge that `release` branch into master branch and push it to remote repo's `master` branch.

### Deployment Server
I used netlify where I made continuous deployment to production. I set netlify CI/CD so that whenever, I push changes to `master` branch on gitlab it automatically gets deployed to netlify server. You can visit the production app here https://anymnd.netlify.app.

### Code Quality
I wrote the entire project in components and pages architecture which means there will be separate pages and those pages will contain components. I wrote all the code very readable and easy follow. I also used `JSDocs` to document the entire code. In addition, I `eslint` is used in create-react-app to keep the quality of the code intact.

## Notes
The design I was provided with was desktop friendly design only so I had no design for the mobile version of this project. Still I made this project `responsive` which means it works on both mobile phones and desktops.

Since I had to make requests to GraphQl end points however, I had difficulty in receiving responses from the server and I was always getting errors from the server for both getting the data and posting the data. Since the deadline was strict for that I reason I added all the static information in the app and nothing is dynamic. I could not figure out what exactly is going wrong with server and why it is keep returning me an error while I am implementing everything perfectly right.

I improved the design a bit, i.e. I removed the dropdown menu for user's list with this approach I reduced the number of clicks the user had to click.

I did not have the resources such as images and icons for this project for that reason I made use of Font Awesome instead.

If you have any question or having problem running this app then please let me know and I'll answer your questions help you out with running this project.
