---
layout: "@layouts/markdown-layout.astro"
title: "Markdown example"
date: 2023-02-01
lastmod: 2023-02-02
draft: false
author: "Peter"
tags:
    - "Markdown"
    - "Example"
---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

-   Unordered list
-   with items

1. Ordered
1. with items
1. breaking the order

- [ ] Checkboxes
    - [ ] :/
    - [x] :D
- [x] Checked!
    - All done!

This **is** ~~not~~ a _sentence_ with **_formatting_**.

<ins>Underline</ins> is not natively supported in markdown.

[Spooky comments!]: #

> :warning: **Warning:** Do not push the big red button.

> :memo: **Note:** Sunrises are beautiful.

> :bulb: **Tip:** Remember to appreciate the little things in life.

[Check out all the emoji's](./emojis)

> Rock and stone!

\- Dwarf ([source](#header-6))

---

The following `codeblock` is written in Rust:

```rust
let variable = "world";
println!("Hello {}!", variable);
println!("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Ultrices mi tempus imperdiet nulla malesuada. Diam maecenas ultricies mi eget. Augue ut lectus arcu bibendum at varius vel pharetra. Non nisi est sit amet facilisis magna. Suscipit tellus mauris a diam maecenas sed enim ut. Curabitur gravida arcu ac tortor dignissim convallis. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Dui id ornare arcu odio ut sem nulla. Egestas diam in arcu cursus euismod quis. Tempor orci eu lobortis elementum nibh tellus. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Neque egestas congue quisque egestas diam in. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Egestas purus viverra accumsan in nisl nisi scelerisque. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Urna porttitor rhoncus dolor purus. Feugiat in fermentum posuere urna nec. Nisi scelerisque eu ultrices vitae. Mattis molestie a iaculis at erat pellentesque adipiscing. Pharetra pharetra massa massa ultricies mi quis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Tortor at risus viverra adipiscing at in. Auctor augue mauris augue neque.");
```

```python:even_words.py
def printWords(s):
    s = s.split(' ')
    for word in s:
        if len(word)%2==0:
            print(word)

s = "i am muskan"
printWords(s)
```

---

| Column1 | Column2 | Column3 |
| ------- | ------- | ------- |
| Item1.1 | Item2.1 | Item3.1 |
| Item1.2 | Item2.2 | Item3.2 |
| Item1.3 | Item2.3 | Item3.3 |

![Small heart](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F09%2F23%2F16%2F33%2Fpixel-heart-2779422__180.png&f=1&nofb=1&ipt=697a0bdc8b439cddc2a3b4e584a47feb5830a933a583192a3357b6c53bc772ae&ipo=images)

<img alt="Fixed sized image of the moon" width="500px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F47367%2Ffull-moon-moon-bright-sky-47367.jpeg%3Fcs%3Dsrgb%26dl%3Dsky-space-moon-astronomy-47367.jpg%26fm%3Djpg&f=1&nofb=1&ipt=4244809d84d9bb1dd9cb08284ed3364db20cd064dcba30d56d6927a0cd547425&ipo=images"/>

![Full sized imaged of the moon](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F47367%2Ffull-moon-moon-bright-sky-47367.jpeg%3Fcs%3Dsrgb%26dl%3Dsky-space-moon-astronomy-47367.jpg%26fm%3Djpg&f=1&nofb=1&ipt=4244809d84d9bb1dd9cb08284ed3364db20cd064dcba30d56d6927a0cd547425&ipo=images)
