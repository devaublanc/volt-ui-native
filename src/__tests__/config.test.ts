import config from '../config'

describe('config', () => {
    it('should have correct properties', () => {
        expect(Object.keys(config)).toEqual(['ENV', 'APP_NAME'])
    })
})
