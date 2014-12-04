# Localisation

## locale.json file

A JSON file with key value pair for each locale.

Examples:

/locales/en_US/locale.json
```
{
  "One-time": "One-time",
  "From-all-of-us-at-Mozilla": "From all of us at Mozilla",
  "Thank-you-for-your-donation": "<em>Thank you</em> for your donation",
  "Monthly": "Monthly",
  "Please-select-an-amount": "Please select an amount"
}
```

/locales/fr/locale.json
```
{
  "One-time": "Unique",
  "From-all-of-us-at-Mozilla": "De notre part à tous chez Mozilla",
  "Thank-you-for-your-donation": "<em>Nous vous remercions</em> pour votre don",
  "Monthly": "Mensuel",
  "Please-select-an-amount": "Veuillez sélectionner un montant"
}
```

## Webmaker locales node modules

Node modules that handling and automate as much as we can get it to.

Use `npm install` to get updates to modules and locale files.

## Transifex

We use [Transifex](https://www.transifex.com/projects/p/webmaker/) to translate all our strings.

Transifex is a cummunity of translators.

We supply an en_US locale file, which we can then request to be translated in the needed locales.

If you need to add a new string, add a key value pair to the en_US locale file and update it on Transifex.

## Templating

Add a `{{One-time}}` to you template that matches a key in the en_US locale file to replace it.

## l10n community

Transifex
IRC
Mailing lists
