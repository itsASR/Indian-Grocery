
import { useContext } from 'react';
import '../server/categories.json'
import { webdata } from './App';

function ProductDisplay2() {


  const { productkadata, setproductkadata } = useContext(webdata)

  return (

    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Explore By Categories</h2>
      <div className="grid grid-cols-4 gap-1">
        {/* Product cards */}
        {
          productkadata.map((datas) => {
            return <div className="bg-white rounded shadow-md p-4 text-center">
              <div><img src={datas.category_image_url} alt="Product" className="mb-4 mx-auto" /></div>
              <div className="text-lg font-semibold mb-2">
                <h2>{datas.name}</h2>
              </div>
            </div>
          })
        }

      </div>
    </div>
  );
}

export default ProductDisplay2;
