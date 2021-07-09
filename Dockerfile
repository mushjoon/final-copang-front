FROM nginx:latest

WORKDIR /
COPY /build .

ADD /nginx/nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx","-g", "daemon off;" ]
