# Utiliser une version spécifique de Node sur Alpine
FROM node:16-alpine As builder

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier seulement les fichiers nécessaires pour réduire la taille de l'image
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construction de l'application
RUN npm run build --prod

FROM nginx:1.27.2-alpine

# Exposer le port sur lequel l'application tourne
EXPOSE 4200

# Commande pour démarrer l'application
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf