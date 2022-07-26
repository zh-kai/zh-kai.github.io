# @note: build files
yarn build
echo 'build successful.'

# @note: add git commit
cd dist
git add .
git commit -m 'update content.'
git push -f origin master
echo 'deploy successful.'