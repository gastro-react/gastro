![PickledBananas application workflow](https://github.com/gastro-react/gastro/workflows/PickledBananas%20application%20workflow/badge.svg)
# gastro

### починил ошибку hot-reload в докере, это новый реакт так тупил. Добавил CI через GitHub Actions. И убрал ошибку в приложении frontend, из-за которой появлялась регулярно ошибка Реакта на экране

## Как запустить
Тут все в одном месте.
1. Клонируйте репозиторий
2. Локально из папки проекта запустите make up  (на  windows docker-compose up -d --build)

Первый запуск будет долгим (скачивает и устанавливает все зависимости)

После этого Фронт будет по адресу http://localhost:4100/

Backend - http://localhost:3000/

Дальше все как обычно, запущен dev сервер на фронте - редактируете файл - изменения сразу появляются в браузере.

Логи смотрим вот так:
- `docker-compose logs -f`    общий лог потоком
-  `docker-compose logs -f backend`     лог backend'a
-  `docker-compose logs -f front` а это фронт, он постоянно будет нужен
    

