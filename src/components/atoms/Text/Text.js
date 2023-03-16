import styles from './Text.module.css'

export default function Title({
  Text,
  Style,
  textprimary
}) {
  return (
    <p className={`${textprimary} ${styles?.[Style]}`}>
      {Text}
    </p>
  );
}