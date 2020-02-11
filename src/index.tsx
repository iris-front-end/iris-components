import * as React from 'react';

import styles from './styles.css';

export type Props = { text: string };

const ExampleComponent: React.FC<Props> = ({ text }) => (
  <div className={styles.test}>Example Component: {text}</div>
);

export default ExampleComponent;
