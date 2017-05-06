FROM node

RUN apt-get update && apt-get install -y curl
#RUN export METEOR_NO_RELEASE_CHECK=true 
RUN curl https://install.meteor.com/ | sh
RUN useradd -m -G users -s /bin/bash meteor
USER meteor
#RUN chown -R meteor:meteor /src
WORKDIR /src

CMD ["meteor"]
