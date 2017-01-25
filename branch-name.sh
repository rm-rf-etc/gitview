CAPTURE=`git status | grep "On branch " | sed 's/On branch //' | tr -d '\n'`
printf "$CAPTURE" | pbcopy
echo "Copied '$CAPTURE' to your clipboard."
