# SoftUni-React-Project-July24

# Overview

This is a front-end application (SPA) which was created as a Softuni ReactJS Course Final Project. The application structure consists of a Public and Private parts supported by Softuni`s practice server. The following pages have been created -> Home, Catalog, Details, Edit Item, List Item, Search, Profile, Contacts, Login, Register, Logout with different functionalities. More information can be read below.

# Public Part

The public part consists of the following: <br/>
<br/>
* Home page -> Background image with a button leading to the Catalogs page <br/>
* Catalog page -> Page where all currently listed cards can be viewed <br/>
* Details page -> Each listed car has a details page where you can view general information about the car and the current number of likes. <br/>
* Search page -> In this page all currently listed cars can be viewed with a button leading towards their details page. You can search for a listed car based on one of the criterias below. You can also reset the search value and criteria and show all currently listed cars by clicking on the "Clear" button. <br/> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Brand name -> This criteria searches in the db for all matches that include the searched value case insensitive <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Model name -> This criteria searches in the db for all matches that include the searched value case insensitive <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- More HP than the amount in the input -> This criteria searches in the db for all matches that are either more or equal to the value. <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Less HP than the amount in the input -> This criteria searches in the db for all matches that are either less or equal to the value. <br/> <br/>
* Contacts page -> Users can read Contact information about the company owning the website, a map showing where the company's HQ is (currently listed address for the map is Softuni`s address) and also working hours.<br/>
* Login/Register pages -> You can either login if you have an account or create a new one in order to use the functionalities in the private part.<br/>
<br/>

# Private Part

**Users**

* Details page -> Users can like or unlike each car <br/>
* List Your Car -> Users can list their cars with base level validation<br/>
* Profile page -> Users can see their email, liked and listed cars.<br/>

**Authors**

* Details page -> Can see a Edit and Delete buttons<br/>
* Edit page -> Can edit the listed car with base level validation<br/>
* Delete button -> Can remove the car and its likes from the db<br/>

# Technical Details

The client application has been build with React JS and HTML + CSS which were created by me with the help of Web3School and chatGPT (So far in the JS path we have not had the HTML + CSS course)<br/>

The server is Softuni`s practise server. Read more about it [HERE](https://github.com/softuni-practice-server/softuni-practice-server?tab=readme-ov-file)<br/>

The following adaptations have been made in regards to this project -> <br/> <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - A data collection has been created in order to use the authentication <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - A json store collection has been created for the likes <br/> <br/>
The server has cars and their likes as pre seeded data and the three users listed in the Softuni practise server github repository <br/>
<br/>
The three cars are:<br/> 
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Toyota with owner peter@abv.bg and 1 like from george@abv.bg <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - BMW with owner peter@abv.bg and 0 likes <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Mercedes with owner george@abv.bg and 1 like from peter@abv.bg <br/>
<br/>
If you want to run the project, you have package.json file in the main client folder.<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **npm install**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **npm start**<br/>
<br/>
In order to start the SPA Service you have to follow these two steps -> <br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Due to the hosting of the server, minor corrections were made. In order to start the server locally, you need firebase installed and after that open the server folder in your terminal and type **"firebase serve"**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Open the client folder in your terminal, then type **"npm run dev"** <br/>

