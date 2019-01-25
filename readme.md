# Lerna / Storybook Architecture Demo

This Repo contains two separate lerna projects which contains the following:
* lerna.json
* `packages/external-component` - a component library using [create-react-library] which builds with React as a Peer Dependency.  It also uses CSSModules to demonstrate that clients are not required to depend on them
* `packages/web-app` - a basic [create-react-app], which depends on and imports the built `external-component` via lerna
* A [Storybook] instance which include `external-component` and supports live reload

When the packages differ is the location of [Storybook].

In `storybook-as-package`, [Storybook] is located in `packages` and behaves just like any other Lerna package.

In `storybook-in-root`, [Storybook] is installed and configured within the Root repository.

# Local Development

Each project works slightly differently.

Follow the readme for each:
* [storybook-as-package](https://github.com/richsoni/lerna-storybook-architecture-demo/blob/master/storybook-as-package)
* [storybook-in-root](https://github.com/richsoni/lerna-storybook-architecture-demo/blob/master/storybook-in-root)

[create-react-library]: https://github.com/transitive-bullshit/create-react-library
[create-react-app]: https://github.com/facebook/create-react-app
[Storybook]: https://storybook.js.org
