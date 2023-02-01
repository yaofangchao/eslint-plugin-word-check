# check sensitive symbol (`sensitive-symbol-check`)

Please describe the origin of the rule here.

## Rule Details

This rule aims to check sensitive symbols set in file .eslintrc.js  

Examples of **incorrect** code for this rule:

```js

// fill me in

```

Examples of **correct** code for this rule:

```js

// fill me in

```

### Options

{
  sensitiveSymbols: []
}

SensitiveSymbols array contains the symbols you want to check in your project.

Configure this rule under the rules section

```json
{
    "rules": {
        "word-check/sensitive-symbol-check": [2, {
            "sensitiveSymbols": [""]
        }]
    }
}

## When Not To Use It



## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
