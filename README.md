<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email
-->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Intro to Web Components</h3>

  <p align="center">
    This repository can be use as an introduction to web components, it shows how each API is used and what it adds to the web component standard. 
    <br />
    <a href="#usage"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/igomezal/IntroToWebComponents/issues">Report Feature/Bug</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
  * [WebComponentsAPI](#WebComponentsAPI)
  * [LitElement](#LitElement)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

The purpose of this project is to give a easy and simple introduction to Web Components (their API), and to LitElement and how you can create new Web Components using this library.


### Built With

* [Node and NPM](https://nodejs.org/)
* [LitElement](https://lit-element.polymer-project.org/)
* [lit-html](https://lit-html.polymer-project.org/)
* [Web Components Introduction](https://www.webcomponents.org/introduction)
* [Open WC](https://open-wc.org/)


<!-- GETTING STARTED -->
## Getting Started

This project has two parts:

* Basic intro to web components.
* Creating web components using LitElement.

For the first you just need to clone the project and open the `index.html` file which you can find inside `WebComponentsAPI` folder.

In the case of the second part you will need `nodejs` installed in your machine, with this you will be able to install LitElement library and a dev server to be able to develop your web components easily.

### Prerequisites

1. Install nodejs for the second part, just go to https://nodejs.org/ and install it.
2. (Optional) Configure your .npmrc file in case you need to install packages using npm from a private repository (https://docs.npmjs.com/configuring-npm/npmrc.html).

### Installation

1. Clone the repo
```sh
git clone https://github.com/igomezal/IntroToWebComponents
```
2. Navigate to LitElement folder
```sh
cd LitElement
```
3. Install the dependencies
```sh
npm install
```


<!-- USAGE EXAMPLES -->
## Usage

Before using it you should check if the browser you plan to use supports web components, just check [Can I Use Custom Elements](https://caniuse.com/?search=custom%20elements), if your browser is not supported then you will have to add [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) in order for it to work in unsupported browser: [Web Component Polyfills](https://www.webcomponents.org/polyfills)

### WebComponentsAPI

Open the folder WebComponentsAPI with the IDE you prefer to use, a really good one you can is [vs code](https://code.visualstudio.com/), and then open the `index.html` file in a browser and you should be able to see one of the examples, if you want to test any other example just comment the previous web component and its import and uncomment the web component and the import you want to use and refresh the page.

### LitElement

Open the folder *LitElement* with the IDE you prefer to use and then run `npm start` to start the dev server, it should open the default browser and load the `index.html` located inside *LitElement* folder, each time you change anything inside the *LitElement* folder the page should reload itself.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Iván Gómez Alonso - [@ivanusatuiter](https://twitter.com/ivanusatuiter) - yvangomezalonso@gmail.com

Project Link: [https://github.com/igomezal/IntroToWebComponents](https://github.com/igomezal/IntroToWebComponents)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [LitElement](https://lit-element.polymer-project.org/)
* [lit-html](https://lit-html.polymer-project.org/)
* [Web Components Introduction](https://www.webcomponents.org/introduction)
* [Open WC](https://open-wc.org/)
* [Stencil](https://stenciljs.com/)
* [Lion Web Components](https://github.com/ing-bank/lion)
* [Polymer](https://www.polymer-project.org/)
* [Slim.js](http://slimjs.com/)
* [Shoelace](https://shoelace.style/)


