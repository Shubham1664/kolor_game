var n = document.querySelectorAll(".choices").length;
var colorarr = {};
var score = 0;
var round = 0;

function change() {

    
    for(var i =0;i<n;i++)
    {
    var r = Math.floor(256*Math.random());
    var g = Math.floor(256*Math.random());
    var b = Math.floor(256*Math.random());

    document.querySelectorAll(".choices")[i].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    colorarr[i] = "rgb(" + r + "," + g + "," + b + ")";
    }

var correct = Math.floor(6*Math.random());
document.querySelector(".banner").style.backgroundColor = colorarr[correct];
}

function timer() {
    var timeleft =  Math.floor(document.getElementById('timer').textContent);
    timeleft -= 1;
    document.getElementById('timer').textContent = timeleft;
    var round =  Math.floor(document.getElementById('round').textContent);

  if (timeleft == 0) {
    genrateColor();
    document.getElementById('timer').textContent = 5;
    round += 1;
  }
  document.getElementById('round').textContent = round;
}
change();
for(var i=0;i<n;i++)
{
      document.querySelectorAll(".choices")[i].addEventListener("click" , function(){
        
        var choose =  this.style.backgroundColor;
        var bannercolor = document.getElementsByClassName('banner')[0].style.backgroundColor;

        if(choose == bannercolor)
        {
            score += 30;
            document.getElementById("score").innerText = score;
            round += 1;
            document.getElementById("round").innerText = round;
            document.getElementById('timer').textContent = 5;
            change();
        }

        else
        {
            score -= 10;
            document.getElementById("score").innerText = score;
            round += 1;
            document.getElementById("round").innerText = round;
            change();
        }
        
          
    })
}
var game = setInterval(timer, 1000)
