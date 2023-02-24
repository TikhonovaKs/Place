# Project: Web service "Place"

## Обзор
* Introduction
* Layout
* JavaScript
* Link to GitHub Pages

### Introduction
'Place' is an interactive page with the ability to post photos

### Layout
* The appearance of the site matches the layout: 
https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1
* Naming classes according to the rules of BEM and building the file structure of the project according to the rules of Nested BEM;
* Responsive layout: Minimum width: 320px (one card in a row). Maximum: 1280px (three cards in a row).

### JavaScript
Smooth opening and closing popups
* Profile editing form;
* Form for adding a new card;
* Opening a photo from the list of cards;
* The popup is closed by clicking on a dark background or pressing the Esc key;

Profile editing form fields
* When you open the form, the "Name" and "About Me" fields are filled with the values that are displayed on the page. If the user closes the popup by clicking on the cross, then the entered values are not saved.

Editing your name and information about yourself
* Popup can edit the corresponding page fields. After making changes and pressing the "Save" button, the information on the page will be updated, and the popup will automatically close.

Adding a card
* When you click the button to add a new card in the form that opens, you can write the name of the card and give a link to the picture.
* When you click on the "save" button, the new card goes to the beginning of the container with them. And the dialog box after adding automatically closes.

Like cards
* By clicking on the heart icon. If you like the card, the heart will change color.

Deleting a card
* The card is deleted when you click on the trash can icon.

Validation of the form "Edit profile" and "New location"
* all fields are required;
* Use standard browser error texts.

### Link to GitHub Pages:
* https://tikhonovaks.github.io/Place/
