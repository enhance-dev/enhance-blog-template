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
check-webmention
  src jobs/events/check-webmention
incoming-webmention
  src jobs/events/incoming-webmention
outgoing-webmention
  src jobs/events/outgoing-webmention

@scheduled
check-rss
  rate 1 day
  src jobs/scheduled/check-rss

@enhance-styles
config theme-minimal.json

@aws
runtime nodejs18.x

@begin
appID 38PS6440
