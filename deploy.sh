echo 'Switching to branch main'
git checkout master

echo 'Building app...'
yarn build

echo 'Deploying files to server...'
scp -r -P 32522 build/* root@wis-software.ru:/var/www/test

echo "Done!"
