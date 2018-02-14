# jekyll

## starters
```
$ gem install jekyll bundler

~ $ jekyll new my-awesome-site

~ $ cd my-awesome-site

~/my-awesome-site $ bundle exec jekyll serve

# => Now browse to http://localhost:4000
```

# build
how to build

    jekyll build


When it's build, you can do:

    jekyll serve --livereload

What you really wanna do is...

    jekyll build && jekyll serve --livereload

If you want to check for broken links:

    bundle exec htmlproofer ./_site/ --only-4xx
