import { faker } from '@faker-js/faker';
import { Project, EducationYear, ProjectType, Progress } from '@typings/project.type';

export type MockProject = {
  id: string;
  name: string;
  description: string;
  educationYear: string;
  projectType: string;
  midtermProgress: string;
  finalsProgress: string;
  createdAt: string;
  updatedAt: string;
};

export const generateMockProject = (): Project => {
  const createdAt = faker.date.past().toISOString();

  return {
    projectId: faker.string.uuid(),
    name: faker.word.noun() + ' ' + faker.word.adjective() + ' Project',
    term: faker.helpers.arrayElement(['1', '2']),
    educationYear: faker.helpers.arrayElement([EducationYear.Y2566, EducationYear.Y2567, EducationYear.Y2568]),
    projectType: faker.helpers.arrayElement([ProjectType.SingleSchool, ProjectType.MultipleSchools]),
    midtermProgress: faker.helpers.arrayElement(Object.values(Progress)),
    finalsProgress: faker.helpers.arrayElement(Object.values(Progress)),
    status: faker.helpers.arrayElement(['active', 'completed', 'pending']),
    createdAt: createdAt,
    updatedAt: faker.date
      .between({
        from: createdAt,
        to: new Date(),
      })
      .toISOString(),
  };
};

export const generateMockProjects = (count: number): Project[] => {
  faker.seed(123);
  return Array.from({ length: count }, () => generateMockProject());
};

export const MOCK_PROJECTS = generateMockProjects(100);
