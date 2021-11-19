const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const name = 'Justin'
    const id = '1'
    const email = 'justin@yahoo.com'
    const github = 'justinm099'

    const employee = new Engineer(name, id, email, github)

    it('should return the engineer name when requested', () => {
        expect(employee.getName()).toBe('Justin');
    })
    it('should return the engineer id when requested', () => {
        expect(employee.getId()).toBe('1');
    })
    it('should return the engineer email when requested', () => {
        expect(employee.getEmail()).toBe('justin@yahoo.com');
    })
    it('should return the engineer github when requested', () => {
        expect(employee.getGithub()).toBe('justinm099');
    })
    it('should return the engineer role when requested', () => {
        expect(employee.getRole()).toBe('Engineer');
    })
})