import { NextPage } from 'next';
import { FaCheck } from 'react-icons/fa';
import {
  Button,
  Typography,
  DescriptionList,
  DescriptionListItem,
} from '../..';

interface Props {
  name: string;
  description: string;
  price: number;
  perks: string[];
}

const PricingItem: NextPage<Props> = ({ name, description, price, perks }) => {
  return (
    <div className="flex flex-col items-stretch space-y-6 bg-gray-100 p-6 rounded-xl">
      <div className="space-y-2">
        <Typography variant="h3">{name}</Typography>
        <Typography variant="p">{description}</Typography>
      </div>
      <div className="flex items-baseline space-x-2">
        <Typography variant="h1" element="h4">
          ${price}
        </Typography>
        <Typography variant="p" element="span">
          / mo
        </Typography>
      </div>
      <Button to="/">Buy {name}</Button>

      <DescriptionList header="WHAT'S INCLUDED">
        {perks.map((perk, i) => (
          <DescriptionListItem key={perk + i} icon={FaCheck}>
            {perk}
          </DescriptionListItem>
        ))}
      </DescriptionList>
    </div>
  );
};

export default PricingItem;
