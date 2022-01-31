# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:14.16.0 as build-stage

# See https://crbug.com/795759
RUN apt-get update && apt-get install -yq libgconf-2-4

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update && apt-get install -y wget --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

WORKDIR /app

COPY package*.json /app/

COPY server.js /app/

RUN npm install

RUN npm install pm2 -g

COPY ./ /app/

#RUN npm run test -- --browsers ChromeHeadlessNoSandbox --watch=false

ARG configuration=production

RUN npm run build -- --configuration $configuration

EXPOSE 80

CMD ["pm2-docker", "./server.js", "--name='uni'"]