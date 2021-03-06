module.exports = {
    "parser": "babel-eslint", // uses babel-eslint transforms
    "settings": {
        "react": {
            "version": "detect" // detect react version
        }
    },
    "env": {
        "browser": true,
        "node": true, // defines things like process.env when generating through node
    },
    "extends": [
        "eslint:recommended", // use recommended configs
        "plugin:react/recommended"
    ],
    "rules": {
    }
}