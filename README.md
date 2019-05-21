# 💌 mailgo, a different mailto: more possibilities, less spam (WIP)

![mailgo screencast](/assets/video/mailgo-screencast.gif)

![npm](https://img.shields.io/npm/v/mailgo.svg?style=flat-square) [![mailgo.min.js size](https://img.shields.io/github/size/manzinello/mailgo/dist/mailgo.min.js.svg?label=mailgo.min.js&style=flat-square)](https://unpkg.com/mailgo@0.4.1/dist/mailgo.min.js) [![mailgo.min.js size](https://img.shields.io/github/size/manzinello/mailgo/dist/mailgo.min.css.svg?label=mailgo.min.css&style=flat-square)](https://unpkg.com/mailgo@0.4.1/dist/mailgo.min.css)

### docs: <a href="https://www.npmjs.com/package/mailgo">npm</a>

## what?

mailgo will substitute all the `mailto:` links with the **mailgo modal**

<img src="assets/img/screen-1.png" alt="mailgo modal" width="250"/>

---

## installation

add at the end of the `<body>`

```
<body>
...
<script src="https://unpkg.com/mailgo@0.4.1/dist/mailgo.min.js"></script>
</body>
```

you can also import mailgo in `<head>` using `defer`

```
<head>
...
<script src="https://unpkg.com/mailgo@0.4.1/dist/mailgo.min.js" defer></script>
</head>
```

(note: the GitHub `/dist` folder is totally unstable, use `unpkg` to test **mailgo**, thanks!)

---

## usage

**by default all the `mailto:` links will be enabled with mailgo automatically** and will appear also cc, bcc, subject and body parameter, if provided

<small>(to exclude a single mailto link add to the `<a>` element the class `no-mailgo`)</small>

**do you want to prevent the spam? Use a _spam-less usage_ instead the default usage**

### spam-less usage #1 (recommended)

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add `href="#mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### spam-less usage #2

`<a class="mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add `class="mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### spam-less usage #3

`<a mailgo data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add the attribute `mailgo` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### cc, bcc, body, subject and multiple email addresses

**mailgo** also supports cc, bcc, subject and body in spam-less installation using the parameters:

- `data-cc-address` and `data-cc-domain` to recreate cc: `data-cc-address@data-cc-domain`
- `data-bcc-address` and `data-bcc-domain` to recreate bcc: `data-bcc-address@data-bcc-domain`
- `data-subject` for the subject of the email
- `data-body` for the body of the email

for the default installation you can use the classic mailto parameters and they will appear in the modal

mailgo doesn't support multiple email addresses in to, cc and bcc at the moment, but there is an <a href="https://github.com/manzinello/mailgo/issues/19">issue</a> for this!

---

## keyboard commands

from mailgo 0.4.0, when a **mailgo** modal is showing, there are also keyboard commands that can perform different actions

- pressing **g** perform the **open in Gmail** action
- pressing **o** perform the **open in Outlook** action
- pressing **spacebar** or **enter** perform the **open default** action
- pressing **c** perform the **copy** action

---

## examples

this is a complete **mailgo** example with the spam-less usage #1 (and cc, bcc, subject and body):

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev" data-cc-address="matteomanzinello" data-cc-domain="gmail.com" data-bcc-address="hello" data-bcc-domain="matteomanzinello.com" data-subject="A strange email" data-body="This email is for me with me also in cc and in bcc">write me!</a>`

This is a more simple example (also with spam-less #1 usage):

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

---

## browsers support (WIP)

`"browserslist": "> 0.25%, not dead"`

see the compatibility of mailgo on <a href="https://browserl.ist/?q=%3E+0.25%25%2C+not+dead">browserl.ist</a>

---

## connected projects

### mailgo Chrome extension (WIP)

<https://github.com/manzinello/mailgo-chrome-extension>

### mailgo React component (WIP)

<https://github.com/manzinello/react-mailgo>

### mailgo WordPress plugin (WIP)

<https://github.com/manzinello/mailgo-wp-plugin>

---

## open source helpers

[![Open Source Helpers](https://www.codetriage.com/manzinello/mailgo/badges/users.svg)](https://www.codetriage.com/manzinello/mailgo)

---

[![NPM](https://nodei.co/npm/mailgo.png?stars=true)](https://www.npmjs.com/package/mailgo)
