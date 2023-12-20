
import LucideDelete from '../../assets/LucideDelete.svg';

type ButtonDeleteProps = {
    deleteFn: () => void;
 };

const ButtonDelete = ({ deleteFn }: ButtonDeleteProps) => {
  return <button onClick={deleteFn} className="buttonDelete"><img src={LucideDelete} alt='remove' /></button>;
};

export default ButtonDelete;
