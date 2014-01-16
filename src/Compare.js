function compare_count_and_guess_number(guess) {
    localStorage.guess_time = parseInt(localStorage.guess_time) + 1
    var A = 0
    var B = 0
    var count
    if (JSON.parse(localStorage.test) == true) {
        count = localStorage.count
    }
    if (JSON.parse(localStorage.test) == false) {
        count = localStorage.test_count
    }
    for (var i = 0; i < 4; i++) {
        A = get_number_of_A(A, count, guess, i)
        B = get_number_of_B(B, count, guess, i)
    }
    return A + 'A' + B + 'B'
}

function get_number_of_A(A, count, guess, i) {
    if (count[i] == guess[i]) {
        ++A
    }
    return A
}

function get_number_of_B(B, count, guess, i) {
    if (count[i] != guess[i] && count.match(guess[i])) {
        ++B
    }
    return B
}

