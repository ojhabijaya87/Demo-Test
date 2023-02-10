FROM cypress/included:10.11.0

# Get the npmjs.org token to access private Tractable packages (Will be used in .npmrc)
# Make sure the build environment has a NPMJS_TOKEN available
ARG NPMJS_TOKEN

# Change the workdir from `/` to `/qa-automation`
WORKDIR /qa-automation

# Use the cached cypress folder
# https://docs.cypress.io/guides/continuous-integration/introduction#Caching
# Use the already _included_ cypress binary
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress/

RUN printf "//registry.npmjs.org/:_authToken=${NPMJS_TOKEN}" >> .npmrc

# Copy project files
COPY package.json reporter-config.json ./
COPY cypress cypress
COPY config config

# Install package.json dependencies
RUN yarn config set registry "url"
RUN yarn
RUN cypress verify
RUN echo "\nCypress version:" && cypress --version
RUN echo "\nBuilt Docker container for project $(npm pkg get name) in version $(npm pkg get version)."

RUN apt-get update
RUN apt-get install software-properties-common -y
RUN apt-get install wget -y
RUN wget https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
RUN tar -xzvf *.tar.gz
ENV JAVA_VERSION="jdk-11.0.2"
RUN mv $JAVA_VERSION /usr/local/share/
RUN rm *.tar.gz
ENV JAVA_HOME=/usr/local/share/$JAVA_VERSION
ENV PATH="$JAVA_HOME/bin:$PATH"

# Install Firefox dependencies, ffmpeg to bring in audio and video codecs necessary for playing videos in Firefox and XVFB if there's a need to run browsers in headful mode
# then clean up the apt cache
RUN apt-get update && apt-get install -y --no-install-recommends \
    libdbus-glib-1-2 \
    libxt6 \
    ffmpeg \
    xvfb \
    && apt-get clean && rm -rf /var/lib/apt/lists/*