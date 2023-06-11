interface ObjectClassNames {
  [index: string]: boolean | undefined | null;
};

type ClassName =
  | number
  | string
  | ObjectClassNames
  | false
  | null
  | undefined;

export default function classNames(...classnames: ClassName[]): string {
  let result: string[] = [];

  for (let i = 0; i < arguments.length; i++) {
    const item = arguments[i];
    if (!item) {
      continue;
    };
    switch (typeof item) {
      case "string":
        result.push(item);
        break;
      case "object":
        for (let key in item) {
          if (item[key]) {
            result.push(key);
          };
        };
        break;
      default:
        result.push(`${item}`);
    };
  };

  return result.length > 1 ? result.join(" ") : result[0] || "";
};
