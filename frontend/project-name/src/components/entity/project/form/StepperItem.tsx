import { cva, type VariantProps } from 'class-variance-authority';
import { StepperActiveIcon, StepperIcon } from '@icons';

export interface StepperItemProps extends VariantProps<typeof stepperItemVariants> {
  index: number;
  label: string;
}

const stepperItemVariants = cva(
  'flex h-full w-65 flex-row items-center justify-start gap-4 rounded-[10px] border-2 p-3',
  {
    variants: {
      state: {
        active: 'border-tertiary-light-pink bg-tertiary-background-red',
        finished: 'border-secondary-notification-grey',
        default: 'border-secondary-notification-grey',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const stepperIconVariants = cva('', {
  variants: {
    state: {
      active: 'text-primary-red',
      finished: 'text-primary-dark-red',
      default: 'text-secondary-grey-20',
    },
  },
});

const labelVariants = cva('text-3b line-clamp-2 font-bold break-words', {
  variants: {
    state: {
      active: 'text-primary-red',
      finished: 'text-secondary-black',
      default: 'text-secondary-black',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

const numberVariants = cva(
  'text-medium-b absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform font-bold',
  {
    variants: {
      state: {
        active: 'text-secondary-black',
        finished: 'text-secondary-white',
        default: 'text-secondary-white',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
);

const StepperItem = ({ index, label, state }: StepperItemProps) => {
  // Derived States
  const IconComponent = state === 'active' ? StepperActiveIcon : StepperIcon;

  return (
    <div className={stepperItemVariants({ state })}>
      <div className='relative flex items-center justify-center'>
        <IconComponent className={stepperIconVariants({ state })} />
        <span className={numberVariants({ state })}>{index + 1}</span>
      </div>
      <span className={labelVariants({ state })}>{label}</span>
    </div>
  );
};

export default StepperItem;
