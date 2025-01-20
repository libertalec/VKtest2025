import { FC } from 'react';
import styles from './RepositoriesHeader.module.css';
import { SortTypesSelect } from './SortTypesSelect.tsx';

const RepositoriesHeader: FC = () => {
  return (
    <div className={styles.default}>
      <div className={styles.sortBlock}>
        <SortTypesSelect />
      </div>
    </div>
  );
};

export { RepositoriesHeader };
