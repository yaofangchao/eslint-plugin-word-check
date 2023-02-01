# eslint-plugin-word-check

check word

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-word-check`:

```sh
npm install eslint-plugin-word-check --save-dev
```

## Usage

Add `word-check` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "word-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "word-check/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->

## Usage of 'sensitive-symbol-check' rule

```json
{
    "rules": {
        "word-check/sensitive-symbol-check": [2, {
            "sensitiveSymbols": []
        }]
    }
}
// put the symbols you want to check into array sensitiveSymbols

```


