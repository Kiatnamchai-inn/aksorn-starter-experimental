import { Input, Select, Radio } from 'antd';
import { Controller } from 'react-hook-form';
import { EDUCATION_YEARS } from '@/constants/education-year.const';
import { PROJECT_TYPES } from '@/constants/project/create/project-type.const';
import { registerNumericNumbers } from '@utils/parser/input-event';

type ProjectInformationProps = {
  register: any;
  control: any;
};

const ProjectInformation = ({ register, control }: ProjectInformationProps) => {
  return (
    <div className='flex w-full flex-col'>
      <div className='flex w-full flex-col'>
        <div className='relative w-full'>
          <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
            ชื่อโปรเจกต์ <span className='text-red-500'>*</span>
          </label>
          <Input className='w-full' placeholder='ระบุชื่อโปรเจกต์' {...register('name')} />
        </div>
        <div className='mt-8 flex w-full flex-row gap-10'>
          <div className='relative w-48'>
            <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
              ภาคเรียน (ตัวเลข) <span className='text-primary-red'>*</span>
            </label>
            <Controller
              name='term'
              control={control}
              render={({ field }) => (
                <Input
                  className='w-full'
                  placeholder='ระบุภาคเรียน (ตัวเลข)'
                  {...field}
                  onChange={(e) => field.onChange(registerNumericNumbers(e))}
                />
              )}
            />
          </div>
          <div className='relative w-48'>
            <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
              ปีการศึกษา <span className='text-primary-red'>*</span>
            </label>
            <Controller
              name='educationYear'
              control={control}
              render={({ field }) => (
                <Select {...field} className='w-full' placeholder='เลือกปีการศึกษา'>
                  {EDUCATION_YEARS.map((year) => (
                    <Select.Option key={year} value={year}>
                      {year}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>
        <div className='border-secondary-grey-10 mt-8 border-b' />
      </div>
      <div className='mt-8 w-full flex-col items-start justify-start'>
        <div className='flex flex-row gap-3'>
          <span className='text-large-b font-bold'>ประเภทโปรเจกต์ :</span>
          <Controller
            name='projectType'
            control={control}
            render={({ field }) => <Radio.Group {...field} options={PROJECT_TYPES} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
