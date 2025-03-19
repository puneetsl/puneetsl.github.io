source "https://rubygems.org"
ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#

# If you have any plugins, put them here!
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem 'jekyll'
gem 'jekyll-feed'
gem 'jekyll-sitemap'
gem 'jekyll-paginate'
gem 'jekyll-seo-tag'
gem 'jekyll-archives'
gem 'jekyll-katex'  # For math rendering
gem 'rouge'         # For syntax highlighting
gem 'kramdown'      # For markdown processing
gem 'webrick'       # Required for Ruby >= 3.0

group :jekyll_plugins do
    gem 'jekyll-mermaid'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]