import { Dropdown, type TableProps } from 'antd';
import ProgressCell from '@components/entity/project/ProgressCell';
import { ThreeDotsMoreIcon } from '@icons';
import { projectDropdownMenus } from '@configs/table-menus/project';
import { formatProjectType } from '@utils/formatter/enum';
import type { AlignType } from 'rc-table/lib/interface';

export const projectColumns: TableProps<any>['columns'] = [
  {
    title: 'ลำดับ',
    dataIndex: 'index',
    key: 'index',
    width: '4.688rem',
    align: 'right' as AlignType,
    render: (_, _record, index) => {
      return <span className='text-large-r text-secondary-black'>{index + 1}</span>;
    },
  },
  {
    title: 'ชื่อโปรเจกต์',
    dataIndex: 'name',
    key: 'name',
    width: '36.25rem',
    ellipsis: true,
    align: 'left' as AlignType,
    render: (_, record) => {
      return <span className='text-large-r text-system-active'>{record.name}</span>;
    },
  },
  {
    title: 'ภาคเรียน',
    dataIndex: 'term',
    key: 'term',
    width: '5.625rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return <span className='text-large-r text-secondary-black'>{record.term}</span>;
    },
  },
  {
    title: 'ปีการศึกษา',
    key: 'education-year',
    dataIndex: 'education-year',
    width: '5.625rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return <span className='text-large-r text-secondary-black'>{record.educationYear}</span>;
    },
  },
  {
    title: 'ประเภทโปรเจกต์',
    dataIndex: 'project-type',
    key: 'project-type',
    width: '11.25rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return <span className='text-large-r text-secondary-black'>{formatProjectType(record.projectType)}</span>;
    },
  },
  {
    title: 'ความคืบหน้ากลางภาค',
    dataIndex: 'midterm-progress',
    key: 'midterm-progress',
    width: '13.75rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return <ProgressCell text={record.midtermProgress as string} />;
    },
  },
  {
    title: 'ความคืบหน้าปลายภาค',
    dataIndex: 'finals-progress',
    key: 'finals-progress',
    width: '13.125rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return <ProgressCell text={record.finalsProgress as string} />;
    },
  },
  {
    title: 'ตัวเลือก',
    dataIndex: 'actions',
    key: 'actions',
    width: '5.625rem',
    align: 'center' as AlignType,
    render: (_, record) => {
      return (
        <div className='mx-auto flex w-10 cursor-pointer items-center justify-center'>
          <Dropdown menu={{ items: projectDropdownMenus() }} trigger={['click']} overlayStyle={{ width: '19rem' }}>
            <div>
              <ThreeDotsMoreIcon width={20} height={20} className='text-secondary-grey-60' />
            </div>
          </Dropdown>
        </div>
      );
    },
  },
];
