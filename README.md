# 💌 mailgo - a different mailto (WIP)

![mailgo screencast](/assets/video/mailgo-screencast.gif)
(see it in action! <https://mailgo.js.org>)

See the <a href="https://www.npmjs.com/package/mailgo">docs</a> on npm for a more stable version of mailgo, the README of GitHub is referencing to the latest WIP **mailgo**: 0.3.0.

## what?

mailgo will substitute all the `mailto:` links with the **mailgo modal**

[![mailgo.min.js size](https://img.shields.io/github/size/manzinello/mailgo/dist/mailgo.min.js.svg?label=mailgo.min.js&style=flat-square)](https://unpkg.com/mailgo@0.3.0/dist/mailgo.min.js)

<img src="assets/img/screen-1.png" alt="mailgo modal" width="250"/>

---

## installation

add at the end of the `<body>`

```
<body>
...
<script src="https://unpkg.com/mailgo@0.3.0/dist/mailgo.min.js"></script>
</body>
```

you can also import mailgo in `<head>` using `defer`

```
<head>
...
<script src="https://unpkg.com/mailgo@0.3.0/dist/mailgo.min.js" defer></script>
</head>
```

(note: the GitHub `/dist` is totally unstable, use `unpkg` or `npm` to test **mailgo**, thanks!)

---

## usage

### default

**by default all the `mailto:` links will be enabled with mailgo automatically** (and with the default usage in the modal will appear also cc, bcc, subject and body parameter, if provided)

**Do you want to prevent the spam? Use a _no-spam usage_ instead the default usage**

to exclude a single mailto link add to the `<a>` element the class `no-mailgo` like in this example

```
<a class="no-mailgo" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

### no-spam usage #1 (recommended)

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add `href="#mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### no-spam usage #2

`<a class="mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add `class="mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### no-spam usage #3

`<a mailgo data-address="matteo" data-domain="manzinello.dev">write me!</a>`

- add the attribute `mailgo` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

### cc, bcc, body and subject

**mailgo** also supports cc, bcc, subject and body in no-spam installation using the parameters:

- `data-cc-address` and `data-cc-domain` to recreate cc: `data-cc-address@data-cc-domain`
- `data-bcc-address` and `data-bcc-domain` to recreate bcc: `data-bcc-address@data-bcc-domain`
- `data-subject` for the subject of the email
- `data-body` for the body of the email

---

## examples

This is a complete **mailgo** example with the no-spam usage #1:

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev" data-cc-address="matteomanzinello" data-cc-domain="gmail.com" data-bcc-address="hello" data-bcc-domain="matteomanzinello.com" data-subject="A strange email" data-body="This email is for me with me also in cc and in bcc">write me!</a>`

This is a more simple example (also with no-spam #1 usage):

`<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

---

## browsers support

// WIP

---

[![NPM](https://nodei.co/npm/mailgo.png?stars=true)](https://www.npmjs.com/package/mailgo)

<https://mailgo.js.org>
