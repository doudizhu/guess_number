describe("produce a four-digit random number", function() {
    beforeEach(function(){})

    afterEach(function(){
        localStorage.guess_time = 0
        localStorage.count = ''
    })

    it("should be a number", function(){
        var count = produce_random_number()
        expect(isNaN(count)).toBe(false)
    })

    it("should be a four_digit number", function(){
        var count = produce_random_number()
        expect(count.length).toBe(4)
    })

    it("should be not repeat four_digit number", function(){
        var count = produce_random_number()
        var repeat = judge_number_repeat(count)
        expect(repeat).toBe(false)
    })

    it("should be random number", function(){
        var random = judge_number_random()
        expect(random).toBe(true)
    })
})