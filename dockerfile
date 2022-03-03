FROM node:14.17.0 AS node
WORKDIR /app
COPY ./package.json /app
RUN yarn
COPY . /app
EXPOSE 5050
ENTRYPOINT ["node","index.js"]
# CMD ["npm", "run", "start"]
# CMD ["npm", "run", "run-application-from-deployment-branch"]
