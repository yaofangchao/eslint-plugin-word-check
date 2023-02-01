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

Configure this rule under the rules section

```json
{
    "rules": {
        "word-check/sensitive-symbol-check": [2, {
            "sensitiveSymbols": [""]
        }]
    }
}
```

## When Not To Use It

If you want to turn the rule off ,set the rule ID equal to "off" or 0

```json
{
    "rules": {
        "word-check/sensitive-symbol-check": [0, {
            "sensitiveSymbols": [""]
        }]
    }
}
```

## Further Reading


