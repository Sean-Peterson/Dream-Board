# Dream Board

Dream Board is a place to dream new dreams, and write about your dream experiences. I made this website so that my girlfriend and myself could keep track of what we want to do in SE Asia and India and also be able to share our blog posts with friends and family while we are there.

Dream Board is hosted at [Dream Board](https://dreamboard-b5976.firebaseapp.com)

## To run Dream Board from a personal computer:

You will need the following properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular CLI](https://ember-cli.com/)
* [Bower](https://bower.io/)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/Sean-Peterson/Dream-Board
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).


## Planning

  1. Configuration/dependencies
    * Bootstrap: angular-cli.json
    * All other other dependencies are installed by Angular2 and located in angular-cli.json

  2. User stories to fulfill:

    * As a user, I'd like to be able to create, edit, and delete dreams
    * As a user, I'd like to be able to create, edit, and delete plans
    * As a user, I'd like to be able to create, edit, and delete blog posts
    * As a user, I'd like to be able to be able to associate each dream, plan, and blog post with a country
    * As a user, I'd like to be able to be able to see posts filtered by country

  3. What does this project require?

    * model for dreams
    * model for plans
    * model for blog posts
    * component for displaying dreams
    * component for displaying plans
    * component for displaying blog posts
    * component for creating a new dream
    * component for creating a new plan
    * component for creating a new blog post
    * pipe for filtering results by country
    * hook up firebase to store all of the data
    * services to grab the information from the database and inject all the information to the pages that need that info
    * dynamic routing for each dream, plan, and blog post

  4. UX/UI
    * Include and modify bootstrap
    * Develop custom style

  5. Polish
    * Refactor all files to include as little code as possible
    * Remove console.logs and commented out code
    * Make README awesome

## Technologies Used
  * **HTML**: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
  * **CSS**: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
  * **JavaScipt**: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
  * **Angular2**: Angular2 is a JavaScript framework for creating web applications.
  * **Typescript**: Typescript is a free and open-source programming language developed and maintained by Microsoft. It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language.
  * **npm**: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.
