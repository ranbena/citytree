This is the repo of landing page in http://citytree.net.

<img src="https://raw.githubusercontent.com/ranbena/citytree/redesign-2022/preview.png" width="500" />

The code was initially built in 2019 and since had multiple redesign revisions and added features.
It started out coded wonderfully but being volunteer work it became quite patchy as time went by.

## 🔧 The stack:

- Gatsby, React, Typescript.
- Bootstrap, Sass, Styled Components.

Lots of the packages are version locked mainly cause of the custom intl plugin.
Sorry about having two css frameworks - one day I might finalize transitioning to Styled Components.

## 🚀 Getting started

This project requires node v14.15.4.

```
nvm use v14.15.4
```

Clone the repo to your local machine.

```
git clone https://github.com/ranbena/citytree.git
```

Install all npm dependencies (preinstall `yarn` globally)

```
yarn install
```

Run the server

```
yarn start
```

Then view the site at `http://localhost:8000`.

## 📺 Deployment

Old fashioned FTP. Be very careful not to delete other content within the ftp folders.

- Host: citytree.net
- Creds: Ask tami :P
