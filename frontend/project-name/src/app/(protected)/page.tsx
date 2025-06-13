'use client';

import { Select, Table } from 'antd';
import Filters from '@components/entity/project/Filters';
import Navbar from '@components/layout/shared/navigation-bar/Navbar';
import { useFilterProjects } from '@hooks/entity/project/useFilterProjects';
import { projectColumns } from '@configs/table-columns/project';
import { defaultConfigs } from '@configs';

export default function Home() {
  // Hooks
  const { data, filters, handleSetFilter, isPending, currentPage, setCurrentPage } = useFilterProjects();

  return (
    <div className='flex flex-col px-[53px] py-[19px]'>
      <Navbar />
      <div className='mt-[19px] flex flex-col items-center justify-center'>
        <Filters />
        <div className='mt-6 flex w-full flex-row items-center justify-between'>
          <span className='text-large-b text-secondary-black'>{`โปรเจกต์ทั้งหมด ${data?.totalRecords || 0} รายการ`}</span>
          <div className='relative w-[12.063rem]'>
            <label className='text-xxs-r text-secondary-grey-40 absolute -top-2 left-2 z-1 bg-white px-1'>
              เรียงโดย
            </label>
            <Select
              value={filters.sortOrder}
              onChange={(value) => handleSetFilter('sortOrder', value)}
              className='w-full'
            >
              <Select.Option value='desc'>วันที่สร้างล่าสุด</Select.Option>
              <Select.Option value='asc'>วันที่สร้างเก่าสุด</Select.Option>
            </Select>
          </div>
        </div>
        <div className='mt-[31px] flex w-full items-center justify-center'>
          <Table
            className='min-h-[30rem] w-full'
            rowKey='projectId'
            columns={projectColumns}
            dataSource={data || []}
            pagination={{
              simple: true,
              position: ['bottomCenter'],
              pageSize: defaultConfigs.table.pageSize,
              showSizeChanger: defaultConfigs.table.showSizeChanger,
              hideOnSinglePage: defaultConfigs.table.hideOnSinglePage,
              total: data?.totalRecords || 0,
              current: currentPage,
              onChange: (page) => {
                setCurrentPage(page);
              },
            }}
            scroll={{ x: 'max-content' }}
            loading={isPending}
            locale={{
              emptyText: (
                <div className='flex min-h-[300px] items-center justify-center'>
                  {!isPending && 'ไม่พบโปรเจกต์ที่ตรงตามเงื่อนไข'}
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
