






const lengthOfLongestSubstring = require('./app.js')


describe('prueba de la funcion longuestSubstring', () => {

    it('should return 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })
    it('should return 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    })

    it('should return 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })

    it('should return 3', () => {
        expect(lengthOfLongestSubstring('')).toBe(0)
    })
})




