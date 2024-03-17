// Name
document.getElementById("alertName").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>HAMZA</h5>"

}
// Number
document.getElementById("alertNumber").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>8</h5>"
}
// Variable
document.getElementById("variables").onclick = function () {
    document.getElementById("originalStatement").innerHTML = ""
    document.getElementById("output").innerHTML = "<h5>There are three <span class='reserve'>Reserve Words</span> in <span class='reserve'>JS</span> to declare Variables</h5><br><h5><span id='let'>let:</span>Variable can't be re-declared but can be updated</h5><br><h5><span id='var'>Var:</span>Variable can be re-declared & updated</h5><br><h5><span id='const'>Const:</span>Variable can't be re-declared or updated</h5>"
}
// camel case
document.getElementById("showCamelCaseExamples").onclick = function () {
    document.getElementById("output").innerHTML = "<h5><span id='lowerCase'>Lower Case:</span><br>iamlearningjs</h5><br><h5><span id='upperCase'>Upper Case:</span><br>IAMLEARNINGJS</h5><br><h5><span id='camelCase'>Camel Case:</span><br>iAmLearningJS</h5><br>"
}
// sum
document.getElementById("sum").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>let a = 15;</h5><br><h5>let a = 3;</h5>"
    document.getElementById("output").innerHTML = "<h5> Sum = 18</h5>"
}
// subtraction
document.getElementById("subtract").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>let a = 11;</h5><br><h5>let a = 4;</h5>"
    document.getElementById("output").innerHTML = "<h5> Subtraction = 7</h5>"
}
// multiply
document.getElementById("multiply").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>let a = 12;</h5><br><h5>let a = 5;</h5>"
    document.getElementById("output").innerHTML = "<h5> Multiplicat = 60</h5>"
}
// divide
document.getElementById("devide").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>let a = 125;</h5><br><h5>let a = 5;</h5>"
    document.getElementById("output").innerHTML = "<h5> Subtraction = 25</h5>"
}
// claculation
document.getElementById("calculate").onclick = function () {
    document.getElementById("originalStatement").innerHTML = "<h5>36 / 6 * 3 + 2 ** 4 - (3 + 5)</h5>"
    document.getElementById("output").innerHTML = "<h5>26</h5>"
}
// Clear original statement
document.getElementById("clearOriginal").onclick = function () {
    document.getElementById("originalStatement").innerText = ""

}
// clear output
document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerText = ""

}