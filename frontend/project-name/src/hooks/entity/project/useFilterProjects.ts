import { useListProjects } from '@hooks/entity/project/useListProjects';
import { useQueryStates, parseAsString, parseAsInteger, parseAsArrayOf, type inferParserType } from 'nuqs';

export const projectFiltersParsers = {
  name: parseAsString.withDefault(''),
  educationYear: parseAsArrayOf(parseAsString).withDefault([]),
  projectType: parseAsArrayOf(parseAsString).withDefault([]),
  midtermProgress: parseAsArrayOf(parseAsString).withDefault([]),
  finalsProgress: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  sortBy: parseAsString.withDefault('createdAt'),
  sortOrder: parseAsString.withDefault('desc'),
} as const;

export type ProjectFilters = inferParserType<typeof projectFiltersParsers>;

type UseFilterProjectsReturn = {
  filters: ProjectFilters;
  handleSetFilter: (key: keyof ProjectFilters, value: string | string[] | number) => void;
  handleResetFilters: () => void;
  isPending: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  data: any[] | undefined | any;
};

const defaultFilterValues = {
  name: '',
  educationYear: [],
  projectType: [],
  midtermProgress: [],
  finalsProgress: [],
  page: 1,
  limit: 10,
  sortBy: 'createdAt',
  sortOrder: 'desc',
};

export const useFilterProjects = (): UseFilterProjectsReturn => {
  // Hooks
  const [filters, setFilters] = useQueryStates(projectFiltersParsers, { history: 'push' });
  const { data, isPending } = useListProjects(filters);

  // Functions
  const handleSetFilter = <K extends keyof ProjectFilters>(key: K, value: ProjectFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      ...defaultFilterValues,
    });
  };

  return {
    filters,
    handleSetFilter,
    handleResetFilters,
    isPending,
    currentPage: filters.page,
    setCurrentPage: (page: number) => handleSetFilter('page', page),
    data: data || [],
  };
};
