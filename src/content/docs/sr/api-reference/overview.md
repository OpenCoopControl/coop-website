---
title: Преглед API-ја
description: Преглед архитектуре и начина коришћења OpenCoopControl API-ја.
---

Систем OpenCoopControl обезбеђује RESTful API који Вам омогућава да даљински надгледате и управљате кокошињцем. Овај преглед објашњава основне принципе функционисања API-ја, начин аутентификације и општа правила интеграције.

## Архитектура API-ја

API система OpenCoopControl прати REST принципе:

- Користи стандардне HTTP методе (`GET`, `POST`)
- Враћа одговоре у JSON формату
- Користи предвидиве, ресурсно оријентисане URL-ове
- Јесте без стања (сервер не чува податке о сесији клијента)

API је директно сервирано са ESP32 контролера, што га чини доступним у локалној мрежи без потребе за интернет конекцијом или облачним услугама.

## Основни URL

Сви API захтеви се шаљу ка адресама на Вашем ESP32 уређају. Основни URL је IP адреса OpenCoopControl уређаја у Вашој мрежи.

Пример: `http://192.168.1.100/api/`

Ако сте омогућили mDNS током подешавања, можете користити и: `http://opencoopcontrol.local/api/`

## Аутентификација

Тренутна верзија OpenCoopControl система претпоставља да ради у безбедном локалном окружењу и не имплементира аутентификацију. Ово поједностављује употребу API-ја за локалне аутоматизације и интеграције.

> **Напомена:** Ако је Ваш OpenCoopControl уређај изложен интернету, препоручујемо да га заштитите преко безбедног проксија или VPN-а.

## Верзионирање API-ја

Тренутни API се сматра верзијом v1 и није верзионисан у URL путањи. Будуће веће промене могу укључивати бројеве верзија у адресама ендпоинта.

## Формат Захтева

За `GET` захтеве, параметри треба да се укључе као query параметри у URL.

За `POST` захтеве који садрже податке, користи се JSON формат са одговарајућим хедером `Content-Type: application/json`.

## Формат Одговора

Сви одговори API-ја су у JSON формату. Успешни одговори обично садрже тражене податке или поруку о потврди.

Одговори са грешкама садрже текстуалну поруку која објашњава шта је пошло наопако.

## Обрада Грешака

API користи стандардне HTTP статус кодове како би указао на успех или неуспех:

- `200 OK` – Захтев је успешно обрађен
- `400 Bad Request` – Захтев је неважећи или садржи неисправне параметре
- `404 Not Found` – Тражени ресурс или ендпоинт не постоји
- `500 Internal Server Error` – Дошло је до неочекиване грешке на серверу

Грешке се враћају као обичан текст са описом проблема.

## Ограничења Фреквенције

ESP32 хардвер има ограничене капацитете обраде. Иако нема експлицитних ограничења фреквенције, превише захтева у кратком временском периоду може утицати на перформансе или довести до неодзивности уређаја.

За потребе аутоматизације, препоручујемо да не шаљете више од једног захтева у секунди.

## Категорије API-ја

API ендпоинти OpenCoopControl система сврстани су у неколико категорија:

1. **Ендпоинти за статус** – За добијање тренутних вредности сензора и стања система
2. **Ендпоинти за управљање** – За покретање радњи попут отварања/затварања врата и храњења
3. **Ендпоинти за подешавања** – За конфигурисање правила аутоматизације и понашања система
4. **Системски ендпоинти** – За информације о уређају и техничке детаље

## Најчешћи Начини Употребе

### Надгледање

Ендпоинт стања (`/api/state`) пружа детаљне информације о систему у једном захтеву, што је идеално за контролне табле и системе за надгледање.

### Интеграција са системима за кућну аутоматизацију

OpenCoopControl добро сарађује са системима као што су Home Assistant, Node-RED или прилагођени скриптови. Можете направити аутоматизације које:

- Шаљу обавештења када температура падне испод прага
- Чувају податке у екстерне базе
- Активирају резервна правила аутоматизације на основу времена или временских услова

### Мобилне Апликације

API је дизајниран да буде лако употребљив у мобилним апликацијама. Ендпоинти враћају лагани JSON који је једноставан за обраду и приказ у мобилном интерфејсу.

## Следећи Кораци

За детаљне информације о конкретним ендпоинтима и њиховим параметрима, погледајте [Референцу API ендпоинта](./endpoints).

За примере кода у различитим програмским језицима, посетите наш [репозиторијум са примерима API-ја](https://github.com/OpenCoopControl/api-examples).
