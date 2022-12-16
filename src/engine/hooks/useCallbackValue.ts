import { useRecoilCallback, RecoilValue } from "recoil";

const useCallbackValue = <T extends any>(state: RecoilValue<T>): () => Promise<T> =>
    useRecoilCallback(({ snapshot }) => () => snapshot.getPromise(state));

export default useCallbackValue;
