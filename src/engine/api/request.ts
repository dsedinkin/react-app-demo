import config from "config.json";

const request = (pathname: string): Promise<any> => new Promise((resolve, reject) => {
  const { SERVER } = config;
  const URL = `${SERVER}${pathname}`;

  fetch(URL)
    .then((data) => data.json())
    .then((json) => {
      console.log({ [URL]: json });
      resolve(json);
    })
    .catch((error) => {
      console.error({ [URL]: error });
      reject(error);
    });
});

export default request;
