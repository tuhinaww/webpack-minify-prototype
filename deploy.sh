#!/bin/bash
npm run build

git add dist
git commit -m 'Auto-minify and versioning'

git push
