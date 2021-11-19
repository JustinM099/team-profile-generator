const Employee = require('../lib/Employee');

describe('Employee', () => {
    const name = 'Justin'
    const id = '1'
    const email = 'justin@yahoo.com'

    const employee = new Employee(name, id, email)

    it('should return the employee name when requested', () => {
        expect(employee.getName()).toBe('Justin');
    })
    it('should return the employee id when requested', () => {
        expect(employee.getId()).toBe('1');
    })
    it('should return the employee email when requested', () => {
        expect(employee.getEmail()).toBe('justin@yahoo.com');
    })
    it('should return the employee role when requested', () => {
        expect(employee.getRole()).toBe('Employee')
    })
})