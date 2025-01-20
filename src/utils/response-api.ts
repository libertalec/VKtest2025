import { Octokit } from 'octokit';

type sortTypes = 'updated' | 'stars' | 'forks' | 'help-wanted-issues';
type orderTypes = 'asc' | 'desc';

interface IGetRepositoriesProps {
  query: string;
  sort?: sortTypes;
  order?: orderTypes;
  page?: number;
  perPage?: number;
}

export const getRepositories = async ({
  query,
  sort = 'stars',
  order = 'asc',
  page = 1,
  perPage = 30,
}: IGetRepositoriesProps) => {
  const octokit = new Octokit({
    auth: 'your token',
  });

  const response = await octokit.request('GET /search/repositories', {
    q: query,
    sort,
    order,
    per_page: perPage,
    page,
    headers: {
      accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return response.data;
};
