#!/bin/sh

res_code=0
for markdown in *.md; do 
	markdown-link-check "$markdown"
	if [[ $? -ne 0 ]]; then
		res_code=1
	fi
done

exit $res_code
