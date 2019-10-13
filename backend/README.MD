# Backend AIRCNC

API to serve the Webpage(Spots manipulations) and mobile app (Spots List by techs / booking)

## Routes

> */users - post - Create Account

> */sessions - post - Login

> */spots - post - Spots Creation

> */spots - get - List Spot by Tech

> */spots/:spot_id/bookings - post - Booking spots

> */dashboard - get - List owners spots

> */bookings/:booking_id/approvals  - post - accept booking

> */bookings/:booking_id/rejections - post - reject booking

## Next Tasks

- [ ] Data entry validations
- [ ] Logic entry validations
- [ ] Delete/update Book/spot/user controllers
- [ ] Redis integration
- [ ] Auto e-mail integration / queue
- [ ] Password/Hash creation and validation
- [ ] Middleware /sessions with token validation

## Libraries

> express

> nodemon

> sucrase

> mongosse

> multer

> cors

> socket.io

> dotenv


### Code STD

> ESlint - AIRBNB

> Prettier

> editorConfig

#### DataBase

> mongoDB / docker

#### Third Apps

> Insomnia
