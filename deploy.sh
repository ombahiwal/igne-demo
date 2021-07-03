read -p "Comments : " comments
# yarn build
# cd ./build
# git init
git stage .
git add .
git commit -m "${comments} -script-deploy"
# git remote add origin https://github.com/ombahiwal/igne-demo
git push origin master
echo "Deployment Success! ${comments}"
