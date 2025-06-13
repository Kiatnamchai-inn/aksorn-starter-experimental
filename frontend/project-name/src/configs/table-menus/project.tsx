import { type MenuProps } from 'antd';
import { EditIcon, TrashIcon, CopyIcon, DownloadIcon } from '@icons';

export const projectDropdownMenus = (): MenuProps['items'] => {
  return [
    {
      key: 'edit',
      label: <span className='text-large-r text-secondary-grey-60 font-normal'>แก้ไขโปรเจกต์</span>,
      icon: <EditIcon className='text-secondary-grey-60' />,
    },
    {
      type: 'divider',
    },
    {
      key: 'download',
      label: (
        <span className='text-large-r text-secondary-grey-60 font-normal'>ดาวน์โหลดไฟล์ภาพรวมและ รายวิชา/โรงเรียน</span>
      ),
      icon: <DownloadIcon className='text-secondary-grey-60 scale-150 transform' />,
    },
    {
      type: 'divider',
    },
    {
      key: 'delete',
      label: <span className='text-large-r text-secondary-grey-60 font-normal'>ลบโปรเจกต์</span>,
      icon: <TrashIcon className='text-secondary-grey-60' />,
    },
    {
      type: 'divider',
    },
    {
      key: 'duplicate',
      label: <span className='text-large-r text-secondary-grey-60 font-normal'>ทำสำเนาโปรเจกต์</span>,
      icon: <CopyIcon className='text-secondary-grey-60' />,
    },
  ];
};
