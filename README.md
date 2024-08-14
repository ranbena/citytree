# This is the repository of CityTree Website <http://citytree.net>.

![CityTree](https://raw.githubusercontent.com/ranbena/citytree/main/preview.png)

The code was initially built in 2019 and since had multiple redesign revisions and added features.
It started out coded wonderfully but being volunteer work it became quite patchy as time went by.

## 🔧 The stack

- Gatsby, React, Typescript.
- Bootstrap, Sass, Styled Components.

Lots of the packages are version locked mainly cause of the custom intl plugin.
Sorry about having two css frameworks - one day I might finalize transitioning to Styled Components.

## 🚀 Getting started

Clone the repo to your local machine.

```sh
git clone https://github.com/ranbena/citytree.git
```

Use node Long Term Support version

```sh
nvm use --lts
```

Install build tools (if not already installed)

```sh
xcode-select --install
```

Install all npm dependencies (preinstall `yarn` globally)

```sh
yarn install
```

Run the server

```sh
yarn start
```

Then view the site at `http://localhost:8000`.

## 📺 Deployment

Old fashioned FTP. Be very careful not to delete other content within the ftp folders.

- Host: citytree.net
- Creds: Ask tami :P
