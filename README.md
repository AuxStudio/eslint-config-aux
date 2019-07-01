# eslint-config-aux

The ESLint and Prettier config that we use internally.

## Installation

1. Add dependencies:

```
yarn add --dev eslint babel-eslint eslint-config-aux eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-prettier
```

2. Create `.eslintrc` at `./` and add:

```json
{
  "extends": "aux"
}
```

## Development

1. Clone the project:

```
git clone https://github.com/AuxStudio/eslint-config-aux
```

2. Do some work.
3. Create a PR.

## Releases

1. Login to npm

```
npm login
```

2. Run the publish script.

```
npm publish
```
