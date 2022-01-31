//I have written this Javascript code that will help you in scrolling down without using any keyboard button or mouse scroll and its quite fast.


//Open the profile you want to scroll down to the end in your browser.

// Then open inspect element mode (on chrome browser hit ctrl+shift+i to get into inspect mode)
//then click on console tab and paste this code and hit enter

scroll = window.setInterval(function () { window.scrollTo(0, document.body.scrollHeight); }, 1000);

//As soon you hit enter you will see a unique number below your posted code line it can be 139, 43, 123 any number.

//We will use this number to stop our scrolling once we reached to the profile end as the above code will keep executing even you reached at the last post.

//To stop scrolling down simply copy paste the below code in the console and hit enter.
//*Make sure to replace your number here with the number you get in your console when you hit enter for the first time.*

clearInterval(your number here);

example: clearInterval(3085);

//This code will scroll down to the end of the page automatically every 1 sec.
//Hence if profile have like 5000 + posts this code will take maximum of 15–20 minutes to take you to the end of profile.

//So just paste this code and come back after 15 minutes and you will see yourself at the last post ;)

