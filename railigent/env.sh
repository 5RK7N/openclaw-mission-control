#!/bin/sh
# line-by-line configuration
echo "window._env_ = {" > /usr/share/nginx/html/env-config.js
echo "  BACKEND_URL: \"$BACKEND_URL\"" >> /usr/share/nginx/html/env-config.js
echo "};" >> /usr/share/nginx/html/env-config.js
