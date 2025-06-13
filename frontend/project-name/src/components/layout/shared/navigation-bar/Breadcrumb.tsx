'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { breadcrumbNameMap } from '@/configs/navigation/breadcrumb-name-map';

type BreadcrumbItem = {
  path: string;
  name: string;
};

const Breadcrumb = () => {
  // Hooks
  const pathname = usePathname();

  // Derived States
  const breadcrumbs: BreadcrumbItem[] = [{ path: '/', name: 'หน้าแรก' }];
  const wholePathKey = pathname.replace(/^\//, '');
  const mappedWholePath = breadcrumbNameMap[wholePathKey];

  if (mappedWholePath) {
    breadcrumbs.push({ path: pathname, name: mappedWholePath });
  } else {
    // Fallback: build crumbs segment-by-segment
    const segments = wholePathKey.split('/');
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = breadcrumbNameMap[segment] || segment;
      breadcrumbs.push({ path: currentPath, name });
    });
  }

  return (
    <nav aria-label='breadcrumb'>
      <ol className='text-3-r text-secondary-grey-60 flex flex-row items-center gap-2'>
        {breadcrumbs.map((crumb, index) => (
          <Fragment key={crumb.path}>
            <span aria-current='page'>{crumb.name}</span>
            {index < breadcrumbs.length - 1 && (
              <li aria-hidden='true'>
                <span>{'>'}</span>
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
