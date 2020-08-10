# bookReviews
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)


## Overview

**bookReviews** is an online community of book reviews and ratings. Users could see a list of books with their authors, summaries, page numbers, genere, language, price, and etc, and read other people's reviews. But, users have to make accounts and be logged in to create, edit, and delete reviews and ratings.

## MVP

### Goals

### Server(Back End)
- Have a **RESTful JSON API**.
  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables:
     - users, books, and reviews/comments tables.
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between your non-User tables 
    - Those users who made the account and are logged in can create, update, and delete reviews.
  - API endpoint
    - resources :books do
	      resources :reviews
      resources :users 
      post ‘/auth/login’, to: 'authentication#login'
      get ‘auth/verify’, to: ‘authentication#verify’
  - Authentication 

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.
    - Users can view all the book lists, descriptions, and reviews whether they are logged in or not.
    - Only those ssers who made the account and are logged in can create, update, and delete reviews.

### Styling

- Be styled with CSS (or SCSS, if you'd prefer).
- Use Flexbox or Grid in your layout design.
- Implement 2 media queries for responsive design on 3 screen sizes (including desktop).

### Linting 

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are okay).

### Deployment 

- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Manages Front End |
|   React Router   | Is the process of resource navigation in a web app. This is how your app determines what to do with a client request. |
| Rails | Manages backend server. |
|     PostgreSQL   | Manages database. |
|  CSS             | Styling |

<br>

### Client (Front End)

#### Wireframes

[Desktop and Ipad Pro Wireframe Link](https://whimsical.com/8NiA4PHQBfYT525G9ReY36)

[iPhone X Wireframe Link](https://whimsical.com/5V6cjJic8foqnfYwQdPc75)

#### Component Tree
![Component Tree screenshot](https://github.com/kangja/bookReviews/blob/master/Component-Tree.png)


#### Component Hierarchy

``` structure

src
|__ components/
      |__ Login.jsx
      |__ Register.jsx
      |__ Header.jsx
      |__ Main.jsx
      |__ ShowBooks.jsx
      |__ BookDetails.jsx
      |__ ShowReviews.jsx 
      |__ UpdateReview.jsx
|__ services/
      |__ api-helper.js
      |__ auth.js
      |__ books.js
      |__ reviews.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Authentication   |    H     |     2 hrs      |      hrs     |    hrs    |
| Working on Backend   |    H     |     3 hrs      |     hrs     |    hrs    |
| Working on Frontend   |    H     |     5 hrs      |     hrs     |    hrs    |
| Working on Frond End Crud   |    H     |     4 hrs      |     hrs     |    hrs    |
| CSS |     H     |     3.5 hrs      |     hrs     |    hrs      |
| Media Queries |    H     |     3 hrs      |     hrs     |    hrs      |
| TOTAL               |          |     hrs      |      hrs     |     hrs     |


<br>

### Server (Back End)

#### ERD Model
![ERD screenshot](https://github.com/kangja/bookReviews/blob/master/ERD.png)

<br>

***

## Post-MVP
- Including star ratings and categorize books by highest to lowest ratings.
- Sorting books by categories. (by alphebetically order, price, ratings, page numbers, genere, etc)
- Implementing media queries for responsive design on other screen sizes.
- Ask UI/UX Designers for advice and insight.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
