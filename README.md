# Live Nation Entertainment Mock

#### Angular exercise, 10/19/2018

#### By _Hassan Al-khalifah_

## Description

This webpage is a mock from [Live Nation Entertainment's](http://www.livenationentertainment.com/) website. This is a project that was required from [Epicodus](https://www.epicodus.com/) as a way to showcase my understanding of setting up an Angular environment, using components, directives, modules and more. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

The current website is broken into three main components (sections): landing page which contains the main content body, the header (navigation bar) and the footer. Within these components, serves, directives, click bindings and routing have been used to add dynamic display/functionality to the website.

Images and two main static information have been store in Firebase and are retrieved using specific serves build in. Specific component use these serves to retrieve the required data from the database to render the relevant image/data in the DOM.

## Future Features

To include additional pages (components) with image carousels, parallax effects, zooming animations and fade-in/fade-out animations. Possibly design a admin page to allow custom edits to pages.

## Setup Instructions

* Open terminal
* Make sure your in the Desktop directory
```
~ $ cd desktop
```
* Clone the repo
```
~/Desktop $ git clone [REPO URL]
```
* Navigate into main directory of cloned REPO
```
~/Desktop $ cd directory-name
```
* Run npm install in terminal to install all required dependencies
```
~/Desktop/directory-name $ npm install
```
* Required to create a remote database application through Firebase's website
* In the dashboard area, select the _create a New Project_ option, provide name for new project
* You will be taken to an overview area where you will be offered three options above the _Add an app to get started_ message. Choose web app icon. A modal will pop up with your Firebase credentials. Keep these.
* In the project _src/app_ directory create a _api-keys.ts_ file.
* In the _src/app/api-key.ts_ file, add your Firebase credentials as follows, instead of the XXXX from the example below:
```
export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
* Back on your Firebase dashboard, click on _Database_ on the left navigation bar
* You will be directed to a window where you need to click on the _Create database_ button
* A modal will pop up, on the left side select the _Start in test mode_ option and click _Enable_ button. You will be directed to your Database dashboard
* Near the top of the Database dashboard, click on the _Cloud Firestore BETA_ dropdown and select _Realtime database_
* Select the _Rules_ tab on the top navigation of the dashboard
* change the rules array .read and .write to true, example below:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
* Click _Publish_ button
* Click _Data_ tab on the top navigation of the dashboard. Here, click the three dotted icon and select _Import JSON_
* A modal will pop up. Select the _Browse_ option, which you will need to direct yourself to the _firebase-database-mock.json_ file in the root of the project directory and click Open
* Back in the modal, click the _Import_ button
* The project is now linked with the Firebase database
* Run ng serve --open in your terminal to start local server
```
~/Desktop/directory-name $ ng serve --open
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you have any questions/concerns, I can be reached at **hassan.a.alkhalifah@gmail.com**

## Technologies Used

* JavaScript
* Typescript
* Angular
* Firebase
* HTML5
* CSS3
* Bootstrap
* Node.js

## Links
* Website to be mocked: [Live Nation Entertainment's](http://www.livenationentertainment.com/)
* Live mocked website: [Live Nation Entertainment Mock](https://live-nation-entertainment-mock.firebaseapp.com/);

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Hassan Al-khalifah**
