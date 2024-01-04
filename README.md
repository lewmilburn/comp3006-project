# Hotel App
> USE MORE THAN 1 CONTAINER - BACKEND, FRONTEND, DATABASE

## Stats
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![StyleCI Status](https://github.styleci.io/repos/706635533/shield)](https://github.styleci.io/repos/706635533)

## Ratings
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=lewmilburn_comp3006-project&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=lewmilburn_comp3006-project)

# Running the System
You'll need to use Docker to run this system.
On macOS/Linux systems you can run up.sh, on Windows systems type the following command into the terminal after cd'ing into the /comp3006-project folder.

`docker-compose up -d`

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
