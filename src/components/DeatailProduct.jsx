



const DetailProduct = ({ product }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 " id='1'>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <img src={product.image} alt={product.name} className="mt-4 mx-auto max-h-60" />
        <p className="mt-2 text-gray-600">{product.description}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Detail Produk:</h3>
        <ul className="list-disc pl-6">
          <li>Harga: {product.price}</li>
          <li>Bintang: <img src={product.star} alt="bintang" /></li>
         
        </ul>
      </div>
    </div>
  );
};

export default DetailProduct;

