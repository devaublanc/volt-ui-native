/**
* Component Generator
*/

const componentExists = require('../utils/componentExists')

module.exports = {
    description: 'Add an unconnected component',
    prompts: [{
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Stateless Function',
        choices: () => ['Stateless Function', 'ES6 Class'],
    }, {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
        validate: (value) => {
            if ((/.+/).test(value)) {
                return componentExists(value) ? 'A component or container with this name already exists' : true
            }

            return 'The name is required'
        },
    }],
    actions: (data) => {
        let componentTemplate

        switch (data.type) {
            case 'ES6 Class': {
                data.isClass = true
                componentTemplate = './component/templates/index.tsx.hbs'
                break
            }
            case 'Stateless Function': {
                data.isClass = false
                componentTemplate = './component/templates/stateless.tsx.hbs'
                break
            }
            default: {
                data.isClass = true
                componentTemplate = './component/templates/index.tsx.hbs'
            }
        }

        const actions = [{
            type: 'add',
            path: '../src/components/{{properCase name}}/index.tsx',
            templateFile: componentTemplate,
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/components/{{properCase name}}/__tests__/index.test.tsx',
            templateFile: './component/templates/test.tsx.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: '../src/components/{{properCase name}}/types.ts',
            templateFile: './component/templates/types.ts.hbs',
            abortOnFail: true,
        }, {
            type: 'modify',
            path: '../src/index.lib.ts',
            templateFile: './component/templates/export*From.hbs',
            pattern: /\/\/ Insert components export here/,
            abortOnFail: true,
        }, {
            type: 'modify',
            path: '../typings/index.d.ts',
            templateFile: './component/templates/typingComponent.hbs',
            pattern: /\/\/ Insert components here/,
            abortOnFail: true,
        }, {
            type: 'modify',
            path: '../typings/index.d.ts',
            templateFile: './component/templates/typingImport.hbs',
            pattern: /\/\/ Import types here/,
            abortOnFail: true,
        }]

        return actions
    },
}
