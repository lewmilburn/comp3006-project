> :warning: **This repository was created for University coursework, since I have completed the module this repository is no longer updated.** The repository will not recieve bugfixes or security updates, as a result of this I do not recommend using this code in a production environment.

# Hotel App
Hotel app is a room booking system that allows customers to book rooms at the Hotel Plymouth.

## Stats
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)

## Ratings
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)

# Running the System
You'll need to use Docker to run this system.
On macOS/Linux systems you can run up.sh, on Windows systems type the following command into the terminal after cd'ing into the /hotel-app folder.

`docker-compose up -d`

## Server locations
The [settings.js file](https://github.com/lewmilburn/hotel-app/blob/main/client/assets/js/settings.js) in the client folder should be changed to reflect the server's IP address/hostname. When running locally the default value of 'localhost' will work as intended. If devices other than the one hosting the server is being used to access the application, this will need to be changed.

## Database connection
The [.env file](https://github.com/lewmilburn/hotel-app/blob/main/server/.env) in the server folder contains a database connection string, this can be changed if you wish.

## Ports
### Client
| Port | Usage                        |
|------|------------------------------|
| 80   | Client-side website          |

### Server
| Port | Usage                        |
|------|------------------------------|
| 8080 | Server main port             |
| 6436 | Websocket communication port |
