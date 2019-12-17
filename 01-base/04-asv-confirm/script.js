/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function UserInformation() {

    var userAgeAge = prompt("what is your age?");
    var userGender = prompt("what is your gender?");
    var userTown = prompt("where you do live?");

    if (confirm("Your age is " + userAge + ", your gender is" + ", your town is " + userTown + "?"));
    else {
            alert("Please enter information");

        }
})();
