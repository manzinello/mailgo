# 💌 mailgo - a different mailto (WIP)

![mailgo screencast](/assets/video/mailgo-v.0.1.2-screencast.gif)
(see it in action! <https://mailgo.js.org>)

## what?

mailgo will substitute all the `mailto:` links with the **mailgo modal**

<img src="assets/img/screen-1.png" alt="mailgo modal" width="200"/>

## installation

add at the very and of the `<body>` or in the `<head>` of your HTML

```
<script src="https://cdn.jsdelivr.net/npm/mailgo/dist/mailgo.min.js"></script>
```

or, specifying `[VERSION]`

```

<script src="https://cdn.jsdelivr.net/npm/mailgo@[VERSION]/dist/mailgo.min.js"></script>

```

## usage

now all your `mailto` links will be mailgone!

you can also add mailgo to links like in this <u>no-spam</u> way:

`<a class="mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>`

just adding **mailgo** as class and your email address splitted in **data-address** and **data-domain**

### exclude a mailto

to exclude a mailto link add to the `<a>` element the class `no-mailgo` like in this example:

```

<a class="no-mailgo" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

```

---

[![NPM](https://nodei.co/npm/mailgo.png)](https://nodei.co/npm/mailgo/)

<https://mailgo.js.org>
