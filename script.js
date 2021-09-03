function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

function compute() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var principal = document.getElementById("principal").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  result = document.getElementById("result");

  if (isNaN(principal) || principal < 1 || principal > 1000000) {
    alert("Enter a positive number");
    result.innerHTML = "<br><mark>TRY AGAIN</mark><br>";
  } else {
    result.innerHTML = `<br>If you deposit <mark>${principal}</mark>, <br>at an interest rate of <mark>${rate}%</mark>. 
    <br>You will receive an amount of <mark>${interest}</mark>,<br>in the year ${year}.<br>`;
  }
}
