FROM node:16.17.0
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build
ENV PORT=3000
CMD ["npm", "start"]
