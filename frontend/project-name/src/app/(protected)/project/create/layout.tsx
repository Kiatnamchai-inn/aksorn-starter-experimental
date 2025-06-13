'use client';

import Image from 'next/image';
import BackButton from '@components/common/button/BackButton';
import Breadcrumb from '@components/layout/shared/navigation-bar/Breadcrumb';
import ProjectCreateStepper from '@/components/entity/project/form/ProjectCreateStepper';

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex p-6'>
      <div className='shadow-blur relative min-h-screen w-full rounded-[20px]'>
        <Image
          src='/images/frame-73015.webp'
          alt='Frame'
          className='absolute top-0 right-0 object-contain object-[top_right]'
          priority
          width={199}
          height={144}
        />
        <Image
          src='/images/homework.webp'
          alt='homework'
          className='absolute top-6 right-10.5 object-contain object-[top_right]'
          priority
          width={116}
          height={116}
        />
        <div className='flex flex-col p-9'>
          <div className='flex flex-row items-center gap-4'>
            <BackButton />
            <Breadcrumb />
          </div>
          <span className='text-2b text-secondary-black mt-8'>สร้างโปรเจกต์</span>
          <div className='mt-6 w-full'>
            <ProjectCreateStepper />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
