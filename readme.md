# jekyll

## starters

``` bash
$ gem install jekyll bundler

~ $ jekyll new my-awesome-site

~ $ cd my-awesome-site

~/my-awesome-site $ bundle exec jekyll serve

# => Now browse to http://localhost:4000
```

## build

how to build

``` bash
    jekyll build
```

When it's build, you can do:

``` bash
    jekyll serve --livereload
```

What you really wanna do is...

``` bash
    jekyll build && jekyll serve --livereload
```

If you want to check for broken links:

``` bash
    bundle exec htmlproofer ./_site/ --only-4xx
```
