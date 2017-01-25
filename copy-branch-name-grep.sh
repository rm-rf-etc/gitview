#!/bin/bash

if [ -n "$1" ]
then
	OUTPUT=`git branch | grep $1`
else
	echo 'bfind requires at least one argument'
	exit
fi

if [ -n "$2" ]
then
	if [ "$2" -gt 0 ]
	then
		CAPTURE=`sed -n $2p <<< "$OUTPUT" | tr -d '\n' | tr -d ' '`
		printf "$CAPTURE" | pbcopy
		echo 'Copied '$CAPTURE' to clipboard'
	else
		echo 'argument 2 must be an integer'
		exit
	fi
else
	printf "$OUTPUT\n"
	exit
fi

