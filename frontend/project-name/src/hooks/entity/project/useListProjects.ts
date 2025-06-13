import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { type ProjectFilters } from '@hooks/entity/project/useFilterProjects';
import { listProjects } from '@services/project.service';
import { MOCK_PROJECTS } from '@mocks/generators/project.gen';

const QUERY_KEY = 'project';

export const useListProjects = (filters: ProjectFilters): UseQueryResult<any[], unknown> => {
  return useQuery<any[], unknown>({
    queryKey: [QUERY_KEY, filters],
    queryFn: async () => {
      try {
        const response = await listProjects(filters);
        return response;
      } catch (error) {
        console.error('Error fetching projects:', error);
        return MOCK_PROJECTS;
      }
    },
    refetchOnWindowFocus: true,
    gcTime: 0,
  });
};
