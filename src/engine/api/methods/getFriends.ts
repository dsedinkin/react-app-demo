import { setter } from "elum-state";
import { FRIENDS } from "engine/state";

import request from "../request";

import { TFriends } from "engine/types";

const getFriends = () => new Promise<TFriends>((resolve, reject) => {
  request("users")
    .then((data) => {
      setter(FRIENDS, data);
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

export default getFriends;
