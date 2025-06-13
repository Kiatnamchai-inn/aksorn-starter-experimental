import axios from 'axios';
import { type ProjectFilters } from '@hooks/entity/project/useFilterProjects';

export const listProjects = async (filters: ProjectFilters): Promise<any[]> => {
  const response = await axios.get(`/api/projects`, { params: filters });
  return response.data;
};
