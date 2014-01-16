describe('integrate combine produce and compare test', function () {
    beforeEach(function () {
        localStorage.test = true
    })

    afterEach(function () {
        localStorage.guess_time = 0
        localStorage.test = false
    })

    it('should be 0A4B when produce_number has different position', function () {
        var count = produce_random_number()
        var guess = count.substr(2) + count.substr(0, 2)
        var compare_result = compare_count_and_guess_number(guess)
        expect(compare_result).toBe('0A4B')
    })
})