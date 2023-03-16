import styles from './Title.module.css'

export default function Title({
  Text,
  H
}) {
  return (
    <h1 className={styles?.[H]}>
      {Text}
    </h1>
  );
}