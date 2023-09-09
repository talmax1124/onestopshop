import Button from '@/components/UI/Button';
import { IProduct } from '@/types';
import { TrashIcon } from '@heroicons/react/20/solid';

interface CartItemProps {
  product: IProduct;
  deleteSingleItem: (product: IProduct) => void;
}
const CartItem = ({ product, deleteSingleItem }: CartItemProps) => {
  return (
    <div
      key={product._id}
      className='flex justify-between w-full transition-all duration-300 bg-zinc-50 dark:bg-zinc-400 items-center gap-6 px-12 py-6 border-b dark:border-b-zinc-500/50'>
      <div className='flex justify-start items-center gap-6'>
        <img
          className='h-24 w-24 rounded-lg mix-blend-multiply object-cover object-center overflow-hidden flex-shrink-0'
          src={product.image}
        />
        <div className='flex flex-col gap-3'>
          <p className='text-2xl font-medium line-clamp-1'>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>

      <Button onClick={() => deleteSingleItem(product)}>
        <TrashIcon className='h-5 w-5 flex-shrink-0' />
      </Button>
    </div>
  );
};

export default CartItem;
