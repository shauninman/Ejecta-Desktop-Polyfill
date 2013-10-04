# Ejecta Desktop Polyfill

[Ejecta](http://impactjs.com/ejecta) by Dominic Szablewski is a browserless canvas implementation for iOS. This polyfill allows you to run your Ejecta project in desktop Safari.

Implements `ejecta.include()`, `ejecta.openURL()`, `ejecta.getText()`, and `ejecta.loadFont()`. Includes [Touché](https://github.com/davidcalhoun/touche) by David Calhoun.

Just drop `index.html` and the `Desktop` folder into your Ejecta project's `App` directory and open `index.html` in Safari. Uses `eval()` for includes so do NOT use in a production environment!
