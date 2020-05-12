module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "no-var": "error",
        "no-undef": "error",
        "semi-style": ["off", "last"],
        "indent": ["error", 4],
        "quotes": ["off", "double"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "block-scoped-var": "off",
        "block-spacing": ["off", "always"],
        "semi-spacing": ["off", {"before": false, "after": true}],
        "space-in-parens": ["off", "never"],
        "comma-style": ["error", "last"],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "eqeqeq": ["off", "always", {"null": "ignore"}],
        "func-call-spacing": "off",
        "function-paren-newline": ["off", "never"],
        "space-before-function-paren": ["off", {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "always"
        }],
        "space-infix-ops": ["off", {"int32Hint": false}],
        "switch-colon-spacing": ["off", {"after": true, "before": false}],
        "no-trailing-spaces": ["error", { "skipBlankLines": false }],
        "multiline-ternary": ["off", "never"],
        "curly": ["off", "all"],
        "object-curly-newline": ["off", { "consistent": true }],
        "template-tag-spacing": ["off", "never"],
        "no-multiple-empty-lines": ["off", {"max": 2}],
        "no-useless-escape": "off",
        "strict": ["off", "safe"],
        "no-use-before-define": ["off", { "variables": false, "functions": true, "classes": true }],
        "no-shadow": ["off", { "builtinGlobals": false, "hoist": "functions", "allow": ["resolve", "reject", "done", "cb"] }],
        "no-shadow-restricted-names": "off",
        "no-console": "off",
        "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
        "semi": "off",
        "no-extra-semi": "off",
        "no-alert": "off",
        "no-debugger": "error",
        "no-return-await": "off",
        "no-return-assign": "off",
        "require-await": "off",
        "complexity": ["error", 101],
        "array-callback-return": "off",
        "no-eq-null": "error",
        "no-control-regex":"off",
        "class-methods-use-this": ["off", { "exceptMethods": [] }],
        "no-loop-func": "off",
        "no-duplicate-imports": "error",
        "no-dupe-class-members": "error",
        "no-useless-call": "off",
        "no-lone-blocks": "error",
        "max-classes-per-file": ["error", 1],
        "default-case": "off",
        "no-magic-numbers": ["off", { "ignoreArrayIndexes": true, "ignore": [-1, 0, 1] }],
        "prefer-object-spread": "off",
        "id-blacklist": ["off", "i", "j", "k", "o", "h"], //fill in here...
        "valid-jsdoc": ["off", {
            "requireReturn": false,
            "prefer": {
                "arg": "param",
                "argument": "param",
                "returns": "return"
            },
            "preferType": {
                "Boolean": "boolean",
                "Number": "number",
                "String": "string",
                "object": "Object",
                "array": "Array"
            }
        }],
        "no-prototype-builtins": "off",
        "require-atomic-updates": "off"
    },
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "html",
        "json"
    ],
    "globals": {
        "customElements": true,
        "io": true,
        "IntlMessageFormat": true,
        "module": true,
        "moment": true,       
        "RUFUtilities": true,
        "Quill": true,
        "require": true,
        "process": true,
        "Buffer": true,
        "exports": true,
        "_": true,
        "log4javascript": true,
        "PebbleDialog": true,
        "__PRODUCTION__": true,
        "flatpickr": true,
        "__dirname": true
    }
};
