# stylelint-config-get-off-my-lawn

> A highly opinionated, [sharable config](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#extends) of [stylelint](http://stylelint.io) rules to produce beautiful, readable CSS and Sass.

![stylelint-config-get-off-my-lawn](assets/logo.jpg)

As developers, we spend more time reading code than writing it. These rules aim to make reading CSS and Sass a priority.

That means some rules will feel oppressive or "over the top" for many developers, which is fine. If you don't like it, you can get off my lawn! ... Or extend the rules and override them with the ones that bother you. Either way.

This config also comes with the following plugins, and corresponding rules, baked in.

* [stylelint](https://www.npmjs.com/package/stylelint)
* [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

Each and every single rule has been meticulously poured over and purposefully hand picked or excluded.

## Install

```
$ npm i --save-dev stylelint-config-get-off-my-lawn
```

## Usage

Create an stylelint config in your `package.json` or `.stylelintrc.js` file.

### package.json

```json
{
	"name": "my-awesome-project",
	"stylelint": {
		"extends": "stylelint-config-get-off-my-lawn"
	}
}
```

### .stylelintrc.js

```js
module.exports = {
    extends: 'stylelint-config-get-off-my-lawn'
};
```

## License

MIT © [Michael Novotny](http://manovotny.com)
