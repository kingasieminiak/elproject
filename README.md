# 1. Description

The project is an example of Github Issues App. To see the effect, please visit:

* [Final version](https://sieminiak.com/elproject/) for the release version with minified CSS
* [Debug version](https://staging.sieminiak.com/elproject) for the debug version with expanded CSS and SCSS


# 2. 'Pixel perfect'

* Due to the fact that the main goal of the task was to fulfill the  ‘pixel perfect’ approach, I decided to use pixels instead of relative units (ex. rem, em). In some cases I have decided to use percentages.

*  I have found two different kind of fonts in PSD project but I decided to add only Roboto Regular to index. Proxima Nova is not a free font.

* Sidebar has a different background than in PSD — I came up with the assumption that in PSD project is a *graphical representation* of the actual effect. That’s why i used *opacity* instead of  *background image* and *background blend mode*.

* Custom scroll bar is visible only in Google Chrome browser.

* I added mobile version which is not in PDF project.

* Star icon — at the beginning I used font awesome icons (You can check it in commits history), because is simple to change the color of them using JS toggle class. But then I decided to use SVG icon which was in assets folder. I used them as a path in SVG tag. The finnal result is not as pretty as it looks. The solution works a bit worse on mobile screens. I also had to changed path of icon (it was unclosed). 


# 3. Sass 

I used Sass and Gulp in the project to show example components of the application. Each Sass component represent component which I would create in React App.


# 4. JavaScript 

I made two functions — first represent ES6 usage, second represent jQuery usage. If you want to see the effect of ES6 function, please use Google Chrome browser. 

