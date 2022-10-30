export class Http {
  static HEADERS = {
    "Content-Type": "application/json",
    "X-Yandex-API-Key": "7ab34bec-18ca-430c-a523-5f11bd8fbc1e",
  };

  static async get(url, method) {
    try {
      return await request(url, method);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

async function request(url, method = "GET") {
  const config = {
    method,
    headers: Http.HEADERS,
  };
  try {
    const response = await fetch(url, config);
    const weather = await response.json();
    return transformWeather(weather);
  } catch (error) {
    console.log(error, "error");
  }
}

function transformWeather(weather) {
  return {
    location:
      weather?.geo_object?.locality?.name ||
      weather?.geo_object?.province?.name ||
      weather?.geo_object?.district?.name ||
      weather?.geo_object?.country?.name ||
      "не определен",
    temp: weather?.fact?.temp,
    tempFahrenheit: weather?.fact?.temp * 1.8 + 32,
    condition: weather?.fact?.condition,
    icon: weather?.fact?.icon,
    windSpeed: weather?.fact?.wind_speed,
    windDir: weather?.fact?.wind_dir,
    humidity: weather?.fact?.humidity,
    pressure: weather?.fact?.pressure_mm,
    rain: weather?.forecast?.prec_prob,
  };
}
