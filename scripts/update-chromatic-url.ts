/* eslint-disable import/no-extraneous-dependencies */
import fetch from 'node-fetch';
import { join } from 'path';
import { readJson, writeJson } from 'fs-extra';

const run = async () => {
  const { url } = await fetch('https://master--5ccbc373887ca40020446347.chromatic.com');
  const packageLocation = join(__dirname, '..', 'package.json');

  const existing = await readJson(packageLocation);

  const contents = {
    ...existing,
    storybook: {
      ...existing.storybook,
      url,
    },
  };

  await writeJson(packageLocation, contents, { spaces: 2 });
};

run().catch(e => {
  console.error(e);
  process.exit(1);
});
