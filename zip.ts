/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const version = require('./package.json').version;

const distPath = path.join(__dirname, 'dist');
const zipPath = path.join(distPath, `app-v${version}.zip`);

// Ensure old zip files are deleted
execSync(`rimraf ${zipPath}`);

// Create new zip file
execSync(`7z a -tzip ${zipPath} ${distPath}/* Procfile package.json`);
