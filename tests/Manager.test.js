const Manager = require('../lib/Manager');

describe('Manager', () => {
    const name = 'Justin'
    const id = '1'
    const email = 'justin@yahoo.com'
    const office = '212'

    const employee = new Manager(name, id, email, office)

    it('should return the Manager name when requested', () => {
        expect(employee.getName()).toBe('Justin');
    })
    it('should return the Manager id when requested', () => {
        expect(employee.getId()).toBe('1');
    })
    it('should return the Manager email when requested', () => {
        expect(employee.getEmail()).toBe('justin@yahoo.com');
    })
    it('should return the Manager role when requested', () => {
        expect(employee.getRole()).toBe('Manager')
    })
    it('should return the Manager office number when requested', () => {
        expect(employee.getOffice()).toBe('212')
    })
})