<p align="center">
  <a href="https://www.facebook.com/events/977760955910519/" target="blank"><img src="https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/69528317_3752662151426450_5223547445962604544_n.jpg?_nc_cat=102&_nc_eui2=AeEUuozhzroOHaQ17OJSTqUzGUvRJmCl87pz2W06D_h0cS5z8tK72KfDKZZOvhQFFF15uPQw0myOXmLqH7k9dGLJl69WS3IvoFx_87Qb_ONgkw&_nc_oc=AQnHJ-_3OWCMjSA7mV3r51z39Z2Fdw7FUZ9To_KcIlQrFkmB6ZLI8zfNeYtayA8uBkA&_nc_ht=scontent.fkhi1-1.fna&oh=a34a8c3bb99ce78609e4841fda49d2af&oe=5E375C97" alt="FusionX Workshop Image" /></a>
</p>


## Description

The repository contains content/code for [the workshop happening at The NEST IO on 21st September 2019](https://www.facebook.com/events/977760955910519/). It covers the basics of NestJS. We'll also be covering some interesting info about React Hooks and when to use them.

This is a collaborative initiative of ReactKHI and NodeSchool Karachi.

## Installation & Initial Setup

Please install [Git](https://git-scm.com/downloads) & [NodeJS](https://nodejs.org/en/download/) in your machine. Once done, open your terminal/command prompt & make sure you are at the root of this project. Then run the commands below:

### Clone the repo

```bash
git clone https://github.com/nodeschool-karachi/fusionx-workshop.git  # clone the repository

cd ./fusionx-workshop  # navigate to project folder
```

### Install dependencies

```bash
npm install # install nestjs dependencies

cd client # cd into the client folder
npm install # install react app dependencies

cd .. # go back to project's root
```

## Running NestJS server and React app together
Make sure you're at the project's root
```bash
npm run serve:both

# starts both the client (React) and server (NestJS) apps in watch mode
# the react app runs at port 3000 while the nestjs server runs at 5000
```

## Running NestJS server only

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running NestJS tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

### Organizers
- NodeSchool Karachi
  - [Muhammad Ahsan Ayaz](https://github.com/ahsanayaz)
- ReactKHI
  - [Taley'a Mirza](https://github.com/Taleymirza)
  - [Mashhood Rastgar](https://github.com/mashhoodr)

### Speakers
- [Mohammad Quanit](https://github.com/Mohammad-Quanit)
- [Faheem Akhtar](https://github.com/mfaheemakhtar)
- [Shah Nawaz](https://github.com/dev-sna)
- [Alqama Bin Sadiq](https://github.com/alqamabinsadiq)
- [Afnan Amin Ali](https://www.linkedin.com/in/afnan-amin-a49509151/)

### Mentors
- [Zainab Saleem Khan](https://github.com/ZenabKhan) (Mentor and Advisor)
- [See the complete list of all the amazing mentors here](https://github.com/nodeschool/karachi/issues/13)
