'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@components/common/button/Button';
import NavbarItem from './NavbarItem';
import { navBarItems } from '@configs/navigation/nav-bar-items';

const Navbar = () => {
  // Hooks
  const pathname = usePathname();

  // Functions and Declarations
  const isInHomePage = pathname === '/';

  return (
    <div className='flex flex-row items-end justify-between'>
      <div className='flex flex-row items-center justify-start gap-6'>
        {navBarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href} label={item.label} icon={item.icon} />
        ))}
      </div>
      <div className='flex items-center justify-end'>
        {isInHomePage && (
          <Link href='/project/create'>
            <Button width={196} icon={<Image src='/svg/circle-plus.svg' alt='plus icon' width={20} height={20} />}>
              สร้างโปรเจกต์
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
