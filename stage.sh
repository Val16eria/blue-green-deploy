echo "Switching to branch stage"
git checkout stage

echo "Building app..."
yarn build

echo "Deploying files to server..."
scp -r -P 42522 build/* root@wis-software.ru:/var/www/test2

echo "Done!"
