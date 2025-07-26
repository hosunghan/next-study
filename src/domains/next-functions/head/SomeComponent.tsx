import { FC, useEffect } from "react";

interface Props {
  onMount: () => void;
}

const SomeComponent: FC<Props> = ({ onMount }) => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return <p>Some Component MOUNTED</p>;
};

export { SomeComponent };
