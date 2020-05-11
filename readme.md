# Jot <!-- omit in toc -->



- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  <!-- - [Permissions](#Permissions) -->
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Jot** is a modern web app that allows users to take notes which they can then save for later or send to their friends._

### Core Features

_The core of Jot is to be easily accessable and as painless as possible._

- _Take notes_
- _Send notes to other users_
- _Save notes for later_
- _Platform agnostic_

### Goals

- _To allow users to create notes_
- _Notes to be stored under a user account_
- _Notes are grouped under categories which are also user created_


### Team

Created, designed, and developed by [Jackson Vu](https://github.com/jackson10467)

<!-- ### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur](). -->

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Jot** MVP is to have a functional product that allows users to create notes and have those notes viewable in a homepage._

### Client (Front End)

#### Wireframes



> Landing

![Imgur](https://i.imgur.com/BTVog0T.png)



> CATEGORIES

![Imgur](https://i.imgur.com/T0hFpvP.png)
![Imgur](https://i.imgur.com/WTs5wGe.png)
> JOTS 
![Imgur](https://i.imgur.com/j4U8vaC.png)
![Imgur](https://i.imgur.com/WTs5wGe.png)

> EDIT page 
![Imgur](https://i.imgur.com/xheE5Xo.png)
![Imgur](https://i.imgur.com/X8Bxr91.png)



#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ assets/
      |__ images
      |__ mockups
|__ components/
      |__ Categories.jsx
      |__ Category.jsx
      |__ Header.jsx
      |__ Jots.jsx
      |__ Jot.jsx
|__ services/
      |__ APIhelper.jsx

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|  Categories  |   class    |   y   |   n   | _The categories page will render the categories in flexbox._     |
|   Category   |   class    |   y   |   y   | _The category page will render the jots in cards using flexbox._ |
|   Jot Card   | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create CRUD Actions |    H     |     8 hrs      |     x hrs     |     TBD     |
| Create Header       |    M     |     1 hrs      |     x hrs     |    x hrs    |
| Create index page for categories    |    H    |     3 hrs      |     x hrs     |    x hrs    |
| Create index page for notes    |    H   |     6 hrs      |     x hrs     |    x hrs    |
| Create footer    |    L     |     1 hrs      |     x hrs     |    x hrs    |
| Styling (Incl. Media Queries) |    H    |     12 hrs      |     x hrs     |    x hrs    |
| TOTAL               |          |     6 hrs      |     x hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> ![Imgur](https://i.imgur.com/8IS4Q5v.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ categories/
|__ jots/

```

#### Data Heirarchy

> Use this section to display the expected endpoints from your API.

``` structure
/users
/users/:id
/categories
/categories/:id
/categories/:id/jots
/categories/:id/jots/:jotid
```


<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Technologies     | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end created in React._ |
|   React Router   | _React Router will be used for page routing._ |
|      Rails       | _Backend will be created using Ruby on Rails ._ |
|   Draft.js  (POST MVP)       | _React text editor framework that provices rich text editing._ |
|   react-hamburger-menu (POST MVP)       | _React library that provides an easy to use hamburger menu._ |


<br> 

***


# Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

## 3 Column Design
 - Convert the existing front end to a 3 column design
    - Column 1: Categories
    - Column 2: Jots
    - Column 3: Text-editor
##  Draft.js
 - Convert regular text edit to use Draft.js, which provides a LOT more functionality
## Better responsiveness
 - Convert navbar to be a hamburger menu 
## Share Notes
 - Being able to share notes to other users would be cool
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.