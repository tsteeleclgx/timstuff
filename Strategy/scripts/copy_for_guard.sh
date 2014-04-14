#!/bin/bash
echo Copying at `date`
cp src/main/resources/public/gen/strategy.css build/classes/production/strategy/public/gen
cp src/main/resources/public/gen/strategy.js build/classes/production/strategy/public/gen

cp src/main/resources/public/gen/strategy.js build/classes/artifacts/strategy__exploded_/WEB-INF/classes/public/gen/strategy.js

rm -fr build/classes/artifacts/strategy__exploded_/WEB-INF/classes/public/style_guide
cp -r src/main/resources/public/style_guide build/classes/artifacts/strategy__exploded_/WEB-INF/classes/public
rm -fr build/classes/production/strategy/public/style_guide
cp -r src/main/resources/public/style_guide build/classes/production/strategy/public
# Someone should figure out how to copy the style guide someday, if necessary
