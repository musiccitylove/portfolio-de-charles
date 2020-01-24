/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

function greeting(){
  let myDate = new Date();
  let hrs = myDate.getHours();

  let greet='';

  if (hrs < 12)
    greet = 'Good Morning!';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon!';
  else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening!';

  document.getElementById('greeting').innerHTML =
      greet + '<br><img src="/images/ChaChaLogo.jpg" alt="Charles logo" id ="charlesLogo"><br> This is Charles.';
}

function clickCounter(){
  var button = document.getElementById('clickme'),
    count = 0;
  button.onclick = function() {
    count += 1;
    button.innerHTML = count;
  };

}

clickCounter();
greeting();



