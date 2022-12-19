#!/usr/bin/env sh

# abort on errors
set -e

git init

sleep 1

git status

sleep 1

git add .

sleep 1

git commit -m "deploy & build with vercel"

sleep 1

git branch -M main

sleep 1

git remote add origin https://github.com/guidofamula/easybank-landing-page-frontendmentor.git

sleep 1

git push -u origin main

sleep 1

echo "Push to github successfully"