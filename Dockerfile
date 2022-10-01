WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY ./ /app/
RUN npm run build