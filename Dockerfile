FROM node:18-alpine

WORKDIR /app

# Копируем package файлы
COPY package*.json ./
COPY .npmrc ./

# Устанавливаем зависимости включая dev
RUN npm install

# Копируем весь код
COPY . .

# Генерируем Prisma клиент
RUN npx prisma generate || true

# Собираем Next.js
RUN npm run build

# Expose порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
