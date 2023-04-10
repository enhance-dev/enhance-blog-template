@app
enhance-blog-template

@static
prune true

@plugins
architect/plugin-lambda-invoker
enhance/arc-plugin-enhance
create-post-metadata
create-rss-feed

@events
new-webmention
  src jobs/events/new-webmention
send-webmention
  src jobs/events/send-webmention

@scheduled
check-webmention
  rate 1 day
  src jobs/scheduled/check-webmention

@enhance-styles
config styleguide.json

@aws
runtime nodejs18.x
