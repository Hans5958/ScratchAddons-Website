source "https://rubygems.org"
gem "jekyll", "~> 3.8.7"
gem "minima", "~> 2.5"
gem "github-pages", group: :jekyll_plugins
group :jekyll_plugins do
end
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?
