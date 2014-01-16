function get_input() {
    return document.getElementById('input').value
}

function display(content) {
    return document.getElementById('output').innerHTML = content
//    return document.getElementById('guess').style.display = content
}

function inner_tip_to_html(content) {
    var board = document.getElementById('guess')
    var tip = document.createElement('div')
    tip.innerHTML = content
    board.parentNode.appendChild(tip)
}

document.onkeydown = function(){
    if(event.keyCode == 13){
        judge_start()
    }
}