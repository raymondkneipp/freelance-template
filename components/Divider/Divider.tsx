import { NextPage } from 'next';

interface Props {
  color: string;
  flip?: boolean;
  bottom?: boolean;
}

{
  /* https://www.shapedivider.app/ */
}
{
  /* Copy and replace path element only */
}

const Divider: NextPage<Props> = ({ color, flip = false, bottom = false }) => {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden text-${color} rotate-180 pointer-events-none z-10 ${
        flip ? 'rotate-180' : 'rotate-0'
      } ${bottom ? 'bottom-0' : 'top-0'}`}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 md:h-16"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default Divider;
