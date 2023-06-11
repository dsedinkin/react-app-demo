const initials = (string: string): string => string?.split(" ")?.map((v) => v[0])?.join("") || "";

export default initials;
