docker run -it \
-e PORT=3000 \
-p 3000:3000 \
--name express-api \
-w /code \
--mount type=bind,source="$(pwd)",target=/code \
node:slim \
bash -c "npm install && npm run dev"
# Instead of -e PORT=3000 we can do --env-file .env
