module.exports = {

    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": { 
        "es6": true,
        "node":true,
        "browser":true
    },
    "rules":{
        /*Possible Errors*/ 
        "no-console": 0,
        "no-cond-assign": 1,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-duplicate-case": 1,
        "no-empty": 1,  
        "no-ex-assign": 2,
        "no-extra-semi":1,
        "no-sparse-arrays":1,
        "no-unreachable":1,
        "valid-typeof":2, 
        "no-invalid-regexp":2,
        "no-irregular-whitespace":1,
        "no-obj-calls": 1,    
        "no-template-curly-in-string":1,
        "no-unexpected-multiline":1,   
        "no-unsafe-finally":1,
        "use-isnan":2,
        /*Best Practices*/
        "eqeqeq":1,
        "no-global-assign":1,
        "no-implied-eval":1,
        "no-redeclare":2,
        "no-self-assign":2,
        "no-self-compare":1,
        "no-useless-escape":1,
        /*Variables*/
        "no-shadow-restricted-names":2,
        "no-undef":2,   
        "no-unused-vars":["warn",{"varsIgnorePattern":"^([Rr]eact)|([A-Z]{1}\\w*Reducer)$"}], 
        "no-use-before-define":1,
        /*Stylistic Issues*/         
        "no-mixed-spaces-and-tabs":1,
        "no-trailing-spaces":1,
        /*ES 6*/   
        "no-const-assign":2,
        "no-dupe-class-members":2,
        "no-new-symbol":2,
        "no-this-before-super":2,
        "require-yield":1,
        /*React*/     
        "react/jsx-uses-vars": 2,    
        "react/jsx-uses-react": 2,    
        "react/no-unused-prop-types:": 0,    

        "react/prop-types":0,

    },
    //allow "no-undef"
    globals:{     
        console: true,
        alert: true,
        window: true,
        document: true
        
    },
    extends:[
        "plugin:react/recommended",
        //"airbnb"
    ],
    plugins:[
        "react"
    ]
};

//npm install eslint --save-dev                // ./node_modules/.bin/eslint --init
//npm install eslint-plugin-react --save-dev