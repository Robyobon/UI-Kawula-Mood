const CardProduct = ({ product }) => {
  return (
    <div className="max-w-xs tablet:max-w-smartphone tablet:max-w-tablet desktop:max-w-desktop rounded overflow-hidden shadow-lg mx-auto mb-8">
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <div className="px-4 py-3">
        <div className="font-medium text-base tablet:text-lg desktop:text-xl mb-1 text-center">{product.name}</div>
        <p className="text-gray-700 text-sm tablet:text-base desktop:text-lg font-normal text-center">{product.description}</p>
      </div>
      <div className="px-4 py-3 flex justify-center items-center">
        <span className="rounded-full px-2 py-1 text-xs tablet:text-sm desktop:text-base font-semibold text-gray-700 mr-2">
          <img src={product.star} alt="bintang" />
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
