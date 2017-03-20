
rm -rf dist && mkdir dist
$(npm bin)/ngc -p ./tsconfig.json
$(npm bin)/rollup -i dist/app.module.js -o dist/dist.js
