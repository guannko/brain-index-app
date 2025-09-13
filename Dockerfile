FROM node:18-alpine

WORKDIR /app

# Копируем package файлы
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production || npm install

# Копируем весь код
COPY . .

# Собираем Next.js
RUN npm run build

# Expose порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
