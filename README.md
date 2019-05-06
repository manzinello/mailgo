# 💌 mailgo - a different mailto

![mailgo screencast](/assets/video/mailgo-v.0.1.2-screencast.gif)
(see it in action! <https://mailgo.js.org>)

<u>mailgo is WIP</u>

add the mailgo script in a web page to substitute all the `mailgo:` links with the **mailgo modal**

<img src="assets/img/screen-1.png" alt="mailgo modal" width="200"/>

to exclude a mailto link add to the `<a>` element the class `no-mailgo` like in this example:

```
<a class="no-mailgo" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

## script (development)

```
<script src="https://cdn.jsdelivr.net/gh/manzinello/mailgo@latest/dist/mailgo.min.js"></script>
```

## script

```
<script src="https://cdn.jsdelivr.net/npm/mailgo/dist/mailgo.min.js"></script>
```

or

```
<script src="https://cdn.jsdelivr.net/npm/mailgo@latest/dist/mailgo.min.js"></script>
```

or

```
<script src="https://cdn.jsdelivr.net/npm/mailgo@[VERSION]/dist/mailgo.min.js"></script>
```

specifying `[VERSION]`

## docs

<https://mailgo.js.org>

[![NPM](https://nodei.co/npm/mailgo.png)](https://nodei.co/npm/mailgo/)
