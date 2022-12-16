import { useRecoilState } from "recoil";
import { FRIENDS } from "engine/state";

import { TFriends } from "engine/types";

const useApi = () => {
    const BASIS = "https://jsonplaceholder.typicode.com/";

    const [friends, setFriends] = useRecoilState(FRIENDS);

    const request = async (path: string): Promise<any> => new Promise((resolve, reject) => {
        fetch(`${BASIS}${path}`)
            .then(resp => resp.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
    });

    const getFriends = (): Promise<TFriends> => new Promise((resolve, reject) => {
        if (friends && friends.length > 0) {
            return;
        }
        request("users")
            .then(data => setFriends(data))
            .catch(err => console.log(err));
    });

    return {
        getFriends
    };
};

export default useApi;
