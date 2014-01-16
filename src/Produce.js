function reloadPage(){
    window.location.reload()
}
window.onload = function(){
    produce_random_number()
}

function produce_random_number() {
    var four_digit = ''
    for (var i = 0; i < 4; i++) {
        var random_number = Math.floor(Math.random() * 10)
        if (four_digit.match(random_number)) {
            i--
            continue
        }
        four_digit = four_digit + random_number
    }
    localStorage.test_count = four_digit
    localStorage.count = four_digit
    localStorage.guess_time = 0
    return four_digit
}

function judge_number_repeat(count) {
    var group = _.groupBy(count, function (num) {
        return num
    })
    if (_.find(group, function (value) {
        return value.length > 1
    })) {
        return true
    }
    return false
}

function judge_number_random() {
    var array = []
    for (var i = 0; i < 1000; i++) {
        var count = produce_random_number()
        array.push(count)
    }
    if (get_max_count_same(array).length < 10) {
        return true
    }
}

function get_max_count_same(array) {
    var group = _.groupBy(array, function (num) {
        return num
    })
    return _.max(group, function (value) {
        return value.length
    })
}

