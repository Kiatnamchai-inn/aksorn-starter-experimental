'use client';

import { TreeSelect, Input } from 'antd';
import Button from '@components/common/button/Button';
import { useFilterProjects } from '@hooks/entity/project/useFilterProjects';
import { SearchIcon, ResetIcon } from '@icons';
import { EDUCATION_YEAR, SCHOOL_TYPE, PROGRESS } from '@/constants/tree-data.const';

const Filters = () => {
  // Hooks
  const { filters, handleSetFilter, handleResetFilters } = useFilterProjects();

  return (
    <div className='flex w-full flex-row items-center justify-center gap-[1.063rem]'>
      <Input
        className='w-[99.25rem]'
        placeholder='ค้นหาด้วยชื่อโปรเจกต์'
        suffix={<SearchIcon className='text-secondary-grey-40' />}
        value={filters.name}
        onChange={(e) => handleSetFilter('name', e.target.value)}
      />
      <div className='flex flex-row items-center justify-center gap-[0.875rem]'>
        <div className='relative w-30'>
          <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
            ปีการศึกษา
          </label>
          <TreeSelect
            className='w-full'
            styles={{
              popup: {
                root: {
                  minWidth: '150px',
                },
              },
            }}
            treeCheckable
            treeData={EDUCATION_YEAR}
            placeholder='ปีการศึกษา'
            showSearch={false}
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            switcherIcon={null}
            value={filters.educationYear}
            onChange={(value) => handleSetFilter('educationYear', value)}
            maxTagCount={1}
          />
        </div>
        <div className='relative w-[12.063rem]'>
          <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
            ประเภทโปรเจกต์
          </label>
          <TreeSelect
            className='w-full'
            treeCheckable
            treeData={SCHOOL_TYPE}
            placeholder='ประเภทโปรเจกต์'
            showSearch={false}
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            value={filters.projectType}
            onChange={(value) => handleSetFilter('projectType', value)}
            maxTagCount={1}
          />
        </div>
        <div className='relative w-[12.063rem]'>
          <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
            ความคืบหน้ากลางภาค
          </label>
          <TreeSelect
            className='w-full'
            treeCheckable
            treeData={PROGRESS}
            placeholder='ความคืบหน้ากลางภาค'
            showSearch={false}
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            value={filters.midtermProgress}
            onChange={(value) => handleSetFilter('midtermProgress', value)}
            maxTagCount={1}
          />
        </div>
        <div className='relative w-[12.063rem]'>
          <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
            ความคืบหน้ากลางภาค
          </label>
          <TreeSelect
            className='w-[12.063rem]'
            treeCheckable
            treeData={PROGRESS}
            placeholder='ความคืบหน้าปลายภาค'
            showSearch={false}
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_PARENT}
            value={filters.finalsProgress}
            onChange={(value) => handleSetFilter('finalsProgress', value)}
            maxTagCount={1}
          />
        </div>
        <div className='grow'>
          <Button
            onClick={handleResetFilters}
            icon={<ResetIcon className='text-secondary-black' />}
            priority='secondary'
            state='default'
          >
            รีเซตตัวกรอง
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
