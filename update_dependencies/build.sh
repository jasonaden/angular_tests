
rm -rf dist && mkdir dist
$(npm bin)/ngc -p ./tsconfig.json
$(npm bin)/rollup -c rollup.config.js
