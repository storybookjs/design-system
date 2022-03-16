// @ts-check
/** @typedef {import("./config").InterplayCLI.Settings} InterplaySettings */

// For import help please refer to https://docs.interplay.io/docs/admin/importing/cli
// Please note that all local paths should be specified from the base of repo.

/**
 * @returns {InterplaySettings}
 */
module.exports = () => {
  return {
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //TOKENS SETTINGS

    //Specify JSON files to parse for design tokens
    //designTokens: [
    //    {
    //      paths: [],              //glob path for JSON files containing design tokens
    //      format: "w3c@0.1",      //format of your tokens JSON
    //      name: "Default",        //name of this theme
    //    }
    //],

    //////////////////////////////////////////////////////////////////////////////////////////////////
    //COMPONENTS SETTINGS

    //Specify framework to importing components for. Currently react is supported.
    framework: 'react',

    //Specify which component packages to import from this code repo
    packages: [
      {
        name: '@storybook/design-system', //Name of package to import
        packagePath: './package.json', //Path to package.json
        src: './src/index.tsx', //Entry file for component parsing
        build: './dist/index.js', //Entry file for component bundling
        //types: "./relative/path/to/index.d.ts",            //(Optional entry for component parsing instead of src)
        ignoreExports: [], //Exports to ignore when parsing
      },
    ],

    //Specify any npm packages to build as externals (react and react-dom are set automatically)
    peerDependencies: {},

    //aliases to use for resolving import paths for parsing and bundling
    alias: {
      //"<alias string>": "./aliased/relative/path/"
    },

    //run build in development mode instead of (default) production mode
    //devBuild: true,

    //Specify a component to use as a wrapper component (if required) when rendering components. The wrapper component must be exported from the deployed build
    wrapperComponent: '@storybook/design-system/ThemeWrapper',

    //Specify files to parse looking for component instances to use as presets.
    //Can be list of local paths or glob pattern.
    presetPaths: ['./src/components/**/*.stories.tsx'],

    //Specify rules for which component instances should be used as presets in the files found in presetPaths
    presetRules: [
      {
        //match component instances whose name matches first part of filename
        presetPath: '/{componentName}.',
        limit: 5, //per-component, per-file limit
      },
      {
        //match component instances whose name matches folder in preset file path
        presetPath: '/{componentName}/', //per-component, per-file limit
        limit: 5,
      },
      //add more preset rules if needed e.g.
      // {
      //     "presetPath": "lib/components/icons/Icons.stories.js",           //rule only applies to this file
      //     "componentPath": "lib/components/icons/*.*"                      //match components whose source resolves here
      // },
      // {
      //     "presetPath": "lib/components/Typography/Typography.stories.js", //rule only applies to this file
      //     "componentName": "H1|H2|H3|Code|Quote"                           //match components with these names
      // },
    ],

    //Specify files to always include on pages containing your components, in addition to the webpack bundle.
    //Can be list of urls and/or local relative paths or a glob pattern. Local paths will be deployed and included.
    //e.g. ./dist/bundle.css
    includePaths: [],

    //Specify additional local files to deploy to the CDN alongside your build
    //Can be local relative paths or a glob pattern.
    //e.g. ./dist/assets/*.woff2
    deployPaths: [],

    //OVERRIDING COMPONENT PARSING/BUNDLING BEHAVIOUR

    // events: {
    //     //modify config after the CLI resolves source files, before parsing
    //     resolveComponentsComplete: (context) => { return context; },

    //     //modify config after all parsing, before deploy to interplay
    //     parsingComplete: (context) => { return context;}
    // },

    // modifiers:{

    //     //modify the plugins used to transpile
    //     babelConfig: (config) => { return config},

    //     //modify the webpack config used to bundle
    //     webpackConfig: (config, webpack) => { return config},
    // }
  };
};
