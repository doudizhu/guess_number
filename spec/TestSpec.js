describe("test result", function () {
    beforeEach(function () {
        localStorage.count = '1235'
        localStorage.test = true
    })

    afterEach(function () {
        localStorage.guess_time = 0
        localStorage.count = ''
        localStorage.test = false
        display('')
    })

    it("should output 猜测正确 when the first time you are right'", function () {
        localStorage.guess_time = 1
        var compare_result = '4A0B'
        expect(judge_equal(compare_result)).toBe('猜测正确')
    })

    it("should output 猜测正确 when the sixth time you are right", function () {
        localStorage.guess_time = 6
        var compare_result = '4A0B'
        expect(judge_equal(compare_result)).toBe('猜测正确')
    })

    it("should output 猜测错误 when the sixth time you are wrong", function () {
        localStorage.guess_time = 6
        var compare_result = '3A0B'
        expect(judge_equal(compare_result)).toBe('猜错6次，正确答案：'+localStorage.count)
    })
})