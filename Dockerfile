# definindo uma imagem
FROM node

#definindo diretório de trabalho
WORKDIR /usr/app

#copiar aquivo package.json para o docker
COPY package.json ./

#baixar as dependencias
RUN npm install

#copiar todo o restante do projeto exceto da lista .dockerignore
COPY . .

#informar porta de trabalho do projeto
EXPOSE 3333

#executar comando yarn dev
CMD ["npm", "run", "dev"]
