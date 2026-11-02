# Tidewell

Tidewell is a **fictional** invoicing product. This repository is a demo site for
[livelocale](https://github.com/Araby99/livelocale): a small React + react-i18next pricing page,
built with Vite, that translators can fix in place with the livelocale share Studio. Tidewell, its
prices and its customers do not exist.

Two mistakes are left in on purpose, so there is something to fix:

- `hero.title` in `locales/en.json` reads "Plans that grows with you".
- `hero.cta` is missing from `locales/ar.json`, so the Arabic page shows the English button.

## Run it

```sh
npm install
npm run dev      # the site
npm run build    # the site plus the share Studio in dist/livelocale/
npm run check    # livelocale check: reports the missing Arabic key
```

Serve `dist/` and open `/livelocale/index.html` for the share Studio. Alt+Click any text, fix it,
then **Send to developer**.

## How a fix becomes a pull request

`npx livelocale init --share` set this repository up:

- `vite.config.ts` has `share: true`, so `vite build` writes the share Studio, and
  `exposeRepo: true`, so the Send dialog can open a pre-filled issue here.
- [`.github/workflows/livelocale.yml`](.github/workflows/livelocale.yml) runs when an issue holding a
  livelocale change block is opened. For a maintainer it commits the edits on a
  `livelocale/issue-<n>` branch and opens the pull request.
- [`.github/workflows/i18n.yml`](.github/workflows/i18n.yml) runs `livelocale check` on pull
  requests.

## Licence

[MIT](LICENSE)
