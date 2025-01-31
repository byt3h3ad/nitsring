# nits webring

A webring for undergraduate engineering students of NIT, Silchar.

## What is a webring?

A webring is a collection of websites linked together in a circular structure, usually organised around a specific theme or topic. Webrings were particularly popular in the 1990s and early 2000s as a way for websites with similar interests to promote each other and increase traffic. They provided a sense of community and collaboration among site owners and helped users discover new content in a pre-social media era.

## How do I join?

Just open a PR with the required information added in the `SITES` array in `src/lib/data.ts` file.

However, your pull request will only be approved after an identity check.

- It is highly encouraged to mention the webring in your own sites as well!

## Credits

Stumbled upon [cs.uwatering.com](https://cs.uwatering.com/) while doomscrolling twtr and then [se-webring](https://github.com/simcard0000/se-webring/), ctrl + c, ctrl + v. And here we are.

## Developer note

This is another web shenanigan of yours truly. Any PRs and issues and feedback are welcome!

Some features to implement (when I find the motivation and time to do them):

- [ ] Add a logo and og image. Designers needed!

- [ ] Assign an ID to each website, mentioning which it will redirect to neighbouring websites.

- [ ] Implement search feature. The way I am thinking is either using [fuse.js](https://www.fusejs.io/) or wait till [Tanstack Table](https://tanstack.com/table/latest) supports Svelte 5.

- [ ] UI/UX and documentation changes. I have negative design sense.
