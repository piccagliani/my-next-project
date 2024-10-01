import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  date: string;
};

export default function Category({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image
        src="/clock.svg"
        alt=""
        width={16}
        height={16}
        priority
      />
      {date}
    </span>
  );
}