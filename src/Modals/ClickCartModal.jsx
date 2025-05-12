import Close from "../icons/Close";
import Basket from "../stores/utils/Basket";
import UseBasket from "../stores/utils/UseBasket";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faTruck } from "@fortawesome/free-solid-svg-icons";
import { getProductsById } from "../service/productsapi";

const ClickCardModal=()=>{
  const items=UseBasket((state)=>state.items)
  const setQuantity = UseBasket((state) => state.actions.setTotalQuantity);
  const totalPrice = UseBasket((state) => state.invoice.totalPrice);
  const productsByIdQuery = useQuery({
    queryKey: ["/productsbyid"],
    queryFn: () => getProductsById(ideas),
    
  });
  const products = productsByIdQuery?.data?.map((product) => {
    const foundProduct = items.find((item) => product.id === item.id);

    if (foundProduct) {
      return { ...product, quantity: foundProduct.quantity };
    }
  });

  const ideas = items.map((item) => item.id);
  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  setQuantity(totalQuantity);


    return(
        

            <div className="w-full h-screen bg-black/30 flex justify-center items-center fixed top-0 left-0">
            <div className="bg-white p-5 rounded-xl absolute z-10 overflow-y-auto translate-[-50%] w-[90%] sm:w-[80%] max-w-[1000px] max-h-[70%] overflow ">
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-5 max-h-[100%] mt-10">

                <div className="opacity: 1; transform: none;  border border-gray-500 
                lg:col-span-3 lg:row-span-3 p-4 rounded-lg overflow-y-auto max-h-[350px]">cart detail
                {products?.map(
                (product) =>
                  product && (
                    <li key={product.id}>
                      <Basket product={product} />
                    </li>
                  )
              )}
                </div>  
                <div className="border border-gray-500 lg:row-start-4 lg:col-span-3 lg:row-span-2 p-4 rounded-lg"> <h2>
                    delivery information
                    </h2>
                    <address className="text-gray-500">John Smith
                    New Zealand
                    <br/>
                    CrossRoad - Po25698
                    United States

                    </address>
                    </div>
                <div className="border border-gray-500 lg:col-span-2 lg:row-span-5 rounded-lg flex flex-col"><h2 className="text-xl mb-5 m-4">

                    order summary
                </h2>
                <div className="flex flex-col gap-y-3 m-4"></div>
                <div>
                    <h3>product added</h3>
                    <p>{totalQuantity}</p>
                </div>
                <div>
                    <h3>total price</h3>
                    <p >{totalPrice}</p>
                </div>
                <div>
                    <h3>Tax Percentage</h3>
                    <p>_</p>
                </div>
                <div>
                    <h3>final price</h3>
                    <p className="text-2xl font-bold text-secondary-theme">{totalPrice}</p>
                </div>
                <div className="mt-auto flex flex-col gap-y-5 bg-gray-200 text-gray-500 rounded-b-lg">
          <div className="flex items-center gap-x-5 px-5 py-2">
            <FontAwesomeIcon icon={faTruck} size="xl" />
            <div>
              <h4 className="text-black">Delivery Limit</h4>
              <p>Free delivery within 50 km</p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 px-5 py-2">
            <FontAwesomeIcon icon={faRotateLeft} size="xl" />
            <div>
              <h4 className="text-black">Return Policy</h4>
              <p>Within 5days of product delivery</p>
            </div>
          </div>
        </div>
                    </div>  
            </div>
            </div>
        </div>
        
    )
}
export default ClickCardModal