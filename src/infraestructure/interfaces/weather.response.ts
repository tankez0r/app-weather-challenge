export interface IweatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: string;
    wind: Wind;
    clouds: Clouds;
    dt: string;
    sys: Sys;
    timezone: string;
    id: string;
    name: string;
    cod: string;
}

export interface Clouds {
    all: string;
}

export interface Coord {
    lon: string;
    lat: string;
}

export interface Main {
    temp: string;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    humidity: string;
    sea_level: string;
    grnd_level: string;
}

export interface Sys {
    country: string;
    sunrise: string;
    sunset: string;
}

export interface Weather {
    id: string;
    main: string;
    description: string;
    icon: string;
}

export interface Wind {
    speed: string;
    deg: string;
    gust: string;
}
