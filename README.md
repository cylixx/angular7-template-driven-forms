# angular7-template-driven-forms

> This project is an example of implementing a basic authentication process with register, login and reset password using _template-driven form_ and two modules one for authentication and other to shared components.

### Install bootstrap

Execute the following command in the root of the project to add Bootstrap.

**Important**:  download latest versions to be able to show Navbars from version v4.1.1

    npm install --save bootstrap

Modify the file **angular.json** and put the following code.

    "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]

### Install Icons
```
npm install --save @fortawesome/fontawesome-free

```
Add the line below in `sr/styles.css`
```
@import "~@fortawesome/fontawesome-free/css/all.css";

```

--------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

