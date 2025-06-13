import { cva } from 'class-variance-authority';
import { LoadingIcon } from '@icons';
import { formatProgress } from '@utils/formatter/enum';

type ProgressCellProps = {
  text: string;
};

const progressVariants = cva('font-bold', {
  variants: {
    status: {
      create_project: 'text-system-active text-large-r',
      in_progress: 'text-system-active text-large-r',
      processing: 'text-secondary-grey-60 text-medium-b',
      available_files: 'text-system-complete text-large-r',
      error: 'text-system-error text-large-r',
      default: 'text-secondary-grey-60 text-large-r',
    },
  },
  defaultVariants: {
    status: 'default',
  },
});

const ProgressCell = ({ text }: ProgressCellProps) => {
  if (text === 'processing') {
    return (
      <div className='flex h-full w-full items-center justify-center gap-2'>
        <LoadingIcon width={20} height={20} className='animate-spin' />
        <span className={progressVariants({ status: text })}>{formatProgress(text)}</span>
      </div>
    );
  }

  if (text === 'error') {
    const [firstLine, secondLine] = formatProgress(text).split('\n');
    return (
      <div className='flex flex-col'>
        <span className={progressVariants({ status: text })}>{firstLine || formatProgress(text)}</span>
        {secondLine && <span className='text-small-r text-secondary-grey-40'>{secondLine}</span>}
      </div>
    );
  }

  const validStatuses = ['create_project', 'in_progress', 'processing', 'available_files', 'error', 'default'];
  const status = validStatuses.includes(text) ? text : 'default';
  return (
    <span
      className={progressVariants({
        status: status as 'create_project' | 'in_progress' | 'processing' | 'available_files' | 'error' | 'default',
      })}
    >
      {formatProgress(text)}
    </span>
  );
};

export default ProgressCell;
