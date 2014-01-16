describe("compare result", function() {
    beforeEach(function(){
        localStorage.count = '1357'
        localStorage.test = true
    })

    afterEach(function(){
        localStorage.guess_time = 0
        localStorage.count = ''
        localStorage.test = false
    })

    it("should be 0A0B when guess is '2469' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('2469')
        expect(compare_result).toBe('0A0B')
    })

    it("should be 0A1B when guess is '4169' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('4169')
        expect(compare_result).toBe('0A1B')
    })

    it("should be 1A0B when guess is '1469' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('1469')
        expect(compare_result).toBe('1A0B')
    })

    it("should be 2A2B when guess is '1375' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('1375')
        expect(compare_result).toBe('2A2B')
    })

    it("should be 0A4B when guess is '3175' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('3175')
        expect(compare_result).toBe('0A4B')
    })

    it("should be 4A0B when guess is '1357' and count is '1357'", function(){
        var compare_result = compare_count_and_guess_number('1357')
        expect(compare_result).toBe('4A0B')
    })
})