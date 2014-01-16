function judge_start() {
    if (judge_input_format(get_input()) && parseInt(localStorage.guess_time) < 6) {
        localStorage.guess = get_input()
        var compare_result = compare_count_and_guess_number(get_input())
        document.getElementById('input').value = ''
        document.getElementById('input').focus()
        return judge_equal(compare_result)
    }
    document.getElementById('input').value = ''
    document.getElementById('input').focus()
}

function judge_equal(compare_result) {
    if (JSON.parse(localStorage.test) == true) {
        return test_result(compare_result)
    }
    if (compare_result == '4A0B' && parseInt(localStorage.guess_time) <= 6) {
        return inner_tip_to_html('猜测正确: '+localStorage.guess)
    }
    return guess_fail(compare_result)
}

function guess_fail(compare_result) {
    if (parseInt(localStorage.guess_time) < 6) {
        return inner_tip_to_html(localStorage.guess_time + '次 ' + localStorage.guess + ':  ' + compare_result)
    }
    inner_tip_to_html('猜错6次，正确答案： ' + localStorage.test_count)
}


function test_result(compare_result) {
    if (compare_result == '4A0B' && parseInt(localStorage.guess_time) <= 6) {
        return display('猜测正确')
    }
    return test_guess_fail(compare_result)
}

function test_guess_fail(compare_result) {
    if (parseInt(localStorage.guess_time) < 6) {
        return display(localStorage.guess_time + '次' + localStorage.guess + ':' + compare_result)
    }
    return display('猜错6次，正确答案：' + localStorage.count)
}

function judge_input_format(input) {
    if (!isNaN(input) && input.length == 4 && !judge_number_repeat(input)) {
        return true
    }
}