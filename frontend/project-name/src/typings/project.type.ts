export enum EducationYear {
  Y2568 = '2568',
  Y2567 = '2567',
  Y2566 = '2566',
}

export enum ProjectType {
  SingleSchool = 'single_school',
  MultipleSchools = 'multiple_schools',
}

export enum Progress {
  CreateProject = 'create_project',
  InProgress = 'in_progress',
  Processing = 'processing',
  AvailableFiles = 'available_files',
  Error = 'error',
}

export type Project = {
  projectId: string;
  name: string;
  term: string;
  educationYear: EducationYear;
  projectType: ProjectType;
  midtermProgress: Progress;
  finalsProgress: Progress;
  status: string;
  createdAt: string;
  updatedAt: string;
};
