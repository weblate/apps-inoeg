# Kiebitz - Privacy Friendly Appointment Scheduling</md-list>

<img src="/public/kiebitz-logo.png" alt="Kiebitz - Logo" title="Kiebitz - Logo" width="40%" />

Welcome to the Kiebitz project! Please visit our [website](https://kiebitz.eu) to learn more about us.

# Getting Started

Kiebietz consists of three apps for providers, mediators and users, which can be found under `/apps/provider`, `/apps/mediator` and `/apps/user`, respectively.

After running `yarn install`, you can simply run `yarn dev:user`, `yarn dev:mediator` or `yarn dev:provider` to reach the respective app under `https://localhost:3000/`,

To build the `production` versions simply run

```bash
yarn build
```

# Apps

The code is organized as a yarn-monorepo and consists of the 3 apps under `/apps/*` and supporting packages, which live inside `/packages/*`.
The three indiependant apps are built on top of [NextJS](https://nextjs.org/) and are exported as static html into the `/apps/*/dist`-folder. They can simply be served via a static html-server.

# UI

The UI lives inside `/packages/ui`, is built with [TailwindCSS](https://tailwindcss.com/) and a storybook can be found inside `/packages/storybook`.

# Testing

We are using `jest` for testing of the code. To test the code, simply run

```bash
# just test
yarn test
```

# Linting & Formatting

We use `eslint` for linting and formatting of code. To lint code, run

```bash
# just lint
yarn lint

# lint and autofix where possible
yarn lint --fix
```

# Licenses

The Kiebitz software code is licensed under Affero GPL version 3 (AGPL-3.0). Please see the [license file for](LICENSE) more information. The license was chosen to ensure that any changes to Kiebitz will benefit the community.

Documentation is licensed under the [Creative Commons - Attribution ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) license. Please see the [license file for](DOCS-LICENSE) more information (translated license texts can be found at the link above).</md-list>

# Feedback

If you have any questions [just contact us](mailto:kontakt@kiebitz.eu).

# Participation

We are happy about your contribution to the project! In order to ensure compliance with the licensing conditions and the future development of the project, we require a signed declaration of consent for all contributions in accordance with the [Harmony standard](http://selector.harmonyagreements.org). Please sign the corresponding document for [natural persons](.clas/Kiebitz-Individual.pdf) or for [organizations](.clas/Kiebitz-Entity.pdf) and send it to [us](mailto:kontakt@kiebitz.eu).

## Third-Party Assets

We use the following third-party libraries and assets directly in this codebase (in addition to the ones specified in `package.json`):

* [TailwindCSS](https://github.com/jgthms/bulma)
* [Carbon Icons](https://www.carbondesignsystem.com/)
* [IBM Plex](https://github.com/IBM/plex)
## Security

Did you find a security issue you'd like to report? Please contact us at [security@kiebitz.eu](mailto:security@kiebitz.eu). We appreciate if you follow [responsible disclosure practices](https://en.wikipedia.org/wiki/Responsible_disclosure).
**Please do not create a public Github issue for exploitable vulnerabilities that you've identified**. We do not have a formal bug bounty program in place but will try to reward researchers for significant security findings. We also pledge to never take any kind of legal action or retaliate against researchers that disclose security issues in good faith. You may of course disclose issues anonymously as well.
