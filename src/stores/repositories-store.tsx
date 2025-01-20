import { IRepositories } from '../pages/repositories-list/types.ts';
import { makeAutoObservable, runInAction } from 'mobx';
import { getRepositories } from '../utils/response-api.ts';

class RepositoriesStore {
  repositories: IRepositories[] = [];
  isLoading: boolean = false;
  currentPage = 1;
  errorFetch: unknown | null = null;
  hasMore = true;

  constructor() {
    makeAutoObservable(this);
  }

  getRepositoriesAction = async (): Promise<void> => {
    if (this.isLoading || !this.hasMore) return;
    this.isLoading = true;

    try {
      const res = await getRepositories({
        query: 'javascript',
        page: this.currentPage,
        perPage: 20,
      });

      runInAction(() => {
        this.repositories = [...this.repositories, ...res.items];
        this.currentPage += 1;
        this.hasMore = this.repositories.length < res.total_count;
      });
    } catch (error) {
      runInAction(() => {
        this.errorFetch = error;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  };
}

export default new RepositoriesStore();
