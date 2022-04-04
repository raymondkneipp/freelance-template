import { NextPage } from 'next';
import Image from 'next/image';
import { Typography } from '..';

interface Props {
  image: string;
  date: string;
  title: string;
  content: string;
}

const Card: NextPage<Props> = ({ image, date, title, content }) => (
  <div className="rounded-xl shadow-md flex flex-col">
    <div className="h-60 relative rounded-t-xl overflow-hidden">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6 space-y-6 flex flex-col flex-1">
      <Typography variant="h3">{title}</Typography>
      <div className="flex-1">
        <Typography variant="p">{content}</Typography>
      </div>
      <Typography variant="p" color="primary">
        {date}
      </Typography>
    </div>
  </div>
);

export default Card;
