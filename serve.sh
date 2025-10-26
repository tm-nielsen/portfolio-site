#!sh
if [[ $1 = "-h" ]]; then
    bundle exec jekyll serve --livereload --host 0.0.0.0
else
    bundle exec jekyll serve --livereload
fi