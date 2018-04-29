FROM nginx
COPY ./client/ /usr/share/nginx/html
EXPOSE 80
# docker build -t my-angular-app .
# docker run -p 8000:80 -d my-angular-app
