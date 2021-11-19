const Intern = require('../lib/Intern');

describe('Intern', () => {
    const name = 'Justin'
    const id = '1'
    const email = 'justin@yahoo.com'
    const school = 'University of Washington'

    const employee = new Intern(name, id, email, school)

    it('should return the Intern name when requested', () => {
        expect(employee.getName()).toBe('Justin');
    })
    it('should return the Intern id when requested', () => {
        expect(employee.getId()).toBe('1');
    })
    it('should return the Intern email when requested', () => {
        expect(employee.getEmail()).toBe('justin@yahoo.com');
    })
    it('should return the Intern role when requested', () => {
        expect(employee.getRole()).toBe('Intern')
    })
    it('should return the school the Intern attends when requested', () => {
        expect(employee.getSchool()).toBe('University of Washington')
    })
})