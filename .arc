@app
enhance-blog-template

@static
prune true

@plugins
enhance/arc-plugin-enhance
create-post-metadata
create-rss-feed

@events
new-webmention
  src jobs/events/new-webmention

@enhance-styles
config styleguide.json

@aws
runtime nodejs18.x
